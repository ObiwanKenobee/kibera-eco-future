
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Modules from '@/components/Modules';
import Community from '@/components/Community';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Vision />
      <Modules />
      <Community />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
