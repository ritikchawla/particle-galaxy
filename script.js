// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Nebula Background
const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load('./nebula.jpg');

// Background Particle Galaxy
const particleCount = 2000;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 1500;
    positions[i + 1] = (Math.random() - 0.5) * 1500;
    positions[i + 2] = (Math.random() - 0.5) * 1500;
    colors[i] = Math.random();     // R
    colors[i + 1] = Math.random(); // G
    colors[i + 2] = Math.random(); // B
}
particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
const particleMaterial = new THREE.PointsMaterial({
    size: 0.8,
    vertexColors: true,
    transparent: true,
    blending: THREE.AdditiveBlending // Glow effect
});
const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

// Define Clusters (Resume Sections)
const clusters = [
    { name: "Experience", position: [-150, 80, 0], color: 0xff5555, text: "Building Scalable MLOps Systems" },
    { name: "Skills", position: [150, 80, 0], color: 0x55ff55, text: "Distributed Systems | Cloud | ML Engineering" },
    { name: "Projects", position: [-150, -80, 0], color: 0x5555ff, text: "MLOps Infrastructure & Automation" },
    { name: "Contact", position: [150, -80, 0], color: 0xffff55, text: "Let's Build Something Amazing" }
];

// Create Cluster Particle Systems with Glow
const clusterSystems = [];
clusters.forEach(cluster => {
    const clusterParticles = new THREE.BufferGeometry();
    const clusterPositions = new Float32Array(150 * 3);
    const clusterColors = new Float32Array(150 * 3);
    for (let i = 0; i < 150 * 3; i += 3) {
        const radius = 40;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        clusterPositions[i] = cluster.position[0] + radius * Math.sin(phi) * Math.cos(theta);
        clusterPositions[i + 1] = cluster.position[1] + radius * Math.sin(phi) * Math.sin(theta);
        clusterPositions[i + 2] = cluster.position[2] + radius * Math.cos(phi);
        clusterColors[i] = (cluster.color >> 16 & 255) / 255;     // R
        clusterColors[i + 1] = (cluster.color >> 8 & 255) / 255;  // G
        clusterColors[i + 2] = (cluster.color & 255) / 255;       // B
    }
    clusterParticles.setAttribute('position', new THREE.BufferAttribute(clusterPositions, 3));
    clusterParticles.setAttribute('color', new THREE.BufferAttribute(clusterColors, 3));
    const clusterMaterial = new THREE.PointsMaterial({
        size: 5,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending
    });
    const clusterSystem = new THREE.Points(clusterParticles, clusterMaterial);
    clusterSystem.userData = { name: cluster.name, text: cluster.text, position: cluster.position };
    scene.add(clusterSystem);
    clusterSystems.push(clusterSystem);
});

// Dynamic Lighting
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(0, 0, 400);
scene.add(light);

// Camera Positioning
camera.position.z = 300;

// Raycaster and Overlay
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const overlay = document.querySelector('.overlay');
let currentCluster = null;

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(clusterSystems);

    if (intersects.length > 0) {
        const cluster = intersects[0].object;
        if (cluster !== currentCluster) {
            currentCluster = cluster;
            overlay.innerHTML = `<h1>${cluster.userData.text}</h1>`;
            overlay.classList.add('active');
        }
    } else if (currentCluster) {
        currentCluster = null;
        overlay.innerHTML = `<h1>Ritik Chawla: Galactic Code Overlord</h1>`;
        overlay.classList.remove('active');
    }
});

// Zoom on Click
window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(clusterSystems);

    if (intersects.length > 0) {
        const cluster = intersects[0].object;
        const targetPos = new THREE.Vector3(...cluster.userData.position).add(new THREE.Vector3(0, 0, 100));
        new TWEEN.Tween(camera.position)
            .to({ x: targetPos.x, y: targetPos.y, z: targetPos.z }, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();
    } else {
        new TWEEN.Tween(camera.position)
            .to({ x: 0, y: 0, z: 300 }, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();
    }
});

// Animation Loop
// Add at the beginning of the file
let isLoading = true;
const loadingElement = document.querySelector('.loading');

// After all resources are loaded
window.addEventListener('load', () => {
    isLoading = false;
    loadingElement.style.display = 'none';
});

// Add these optimizations in the renderer setup
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setClearColor(0x000000, 1);

// Update the animate function for better performance
function animate() {
    if (isLoading) return;
    requestAnimationFrame(animate);
    
    // Optimize rotation calculations
    const time = Date.now() * 0.001;
    particleSystem.rotation.y = time * 0.0003;
    
    clusterSystems.forEach(cluster => {
        cluster.rotation.y = time * 0.001;
    });
    
    light.position.x = Math.sin(time) * 200;
    TWEEN.update();
    renderer.render(scene, camera);
}
animate();

// Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});