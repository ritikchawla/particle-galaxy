// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Particle Galaxy Background
const particleCount = 5000;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 2000;
}
particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particleMaterial = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 2, transparent: true });
const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

// Portfolio Clusters (Experience, Skills, Projects, Education)
const clusters = [
    { name: "Experience", position: [-300, 200, 0], color: 0xff5555, text: "I Build Stuff That Doesn’t Crash" },
    { name: "Skills", position: [300, 200, 0], color: 0x55ff55, text: "Golang? Kubernetes? I’m Your Guy" },
    { name: "Projects", position: [-300, -200, 0], color: 0x5555ff, text: "Distributed Systems Are My Playground" },
    { name: "Education", position: [300, -200, 0], color: 0xffff55, text: "9.16 CGPA, NBD" }
];

// Add Clusters as Particle Groups + Text
clusters.forEach(cluster => {
    // Mini particle cloud for each cluster
    const clusterParticles = new THREE.BufferGeometry();
    const clusterPositions = new Float32Array(500 * 3);
    for (let i = 0; i < 500 * 3; i++) {
        clusterPositions[i] = cluster.position[i % 3] + (Math.random() - 0.5) * 100;
    }
    clusterParticles.setAttribute('position', new THREE.BufferAttribute(clusterPositions, 3));
    const clusterMaterial = new THREE.PointsMaterial({ color: cluster.color, size: 3 });
    const clusterSystem = new THREE.Points(clusterParticles, clusterMaterial);
    clusterSystem.userData = { name: cluster.name }; // For interaction
    scene.add(clusterSystem);
});

// Camera Position
camera.position.z = 600;

// Raycaster for Interactivity
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const overlay = document.querySelector('.overlay');

// Mouse Move Listener
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children.filter(obj => obj.isPoints));

    if (intersects.length > 0) {
        const cluster = intersects[0].object;
        overlay.innerHTML = `<h1>${clusters.find(c => c.name === cluster.userData.name).text}</h1>`;
    } else {
        overlay.innerHTML = `<h1>Ritik Chawla: Galactic Code Overlord</h1>`;
    }
});

// Animation
function animate() {
    requestAnimationFrame(animate);
    particleSystem.rotation.y += 0.001;
    clusters.forEach((_, i) => {
        const cluster = scene.children[i + 1]; // Skip background particles
        cluster.rotation.y += 0.002;
    });
    renderer.render(scene, camera);
}
animate();

// Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});