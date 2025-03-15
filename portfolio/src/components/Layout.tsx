import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Ritik Chawla - Portfolio' }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Ritik Chawla's professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 pb-12">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
