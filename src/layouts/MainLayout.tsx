import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-brand-black">
      <Navbar />
      
      {/* Padding top accounts for the fixed Navbar height to prevent content overlap */}
      <main className="flex-grow pt-[120px] md:pt-[140px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;