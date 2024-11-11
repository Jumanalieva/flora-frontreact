import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Page content */}
      <main className="flex-grow pt-20">{/* pt-20 to avoid overlap with fixed Navbar */}
        {children}
      </main>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
