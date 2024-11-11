import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-6 mt-20 text-center font-playfair">
      <div className="flex flex-col items-center">
        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 mt-10">
          <a href="/" className="hover:underline">FLORAL CULTURE</a>
          <a href="/plant" className="hover:underline">Plant Memoir</a>
          <a href="/industry" className="hover:underline">Industry</a>
          <a href="/culinary" className="hover:underline">Culinary</a>
          <a href="/botanistAI" className="hover:underline">BotaniQ AI</a>
        </div>

        {/* Contact Info */}
        <div className="mb-4 font-playfair mt-8">
          <p>Please send your questions or opinions to: <a  href="mailto:sadirbekova12@gmail.com" 
            className="hover:underline hover:text-blue-400 ml-1">sadirbekova12@gmail.com</a></p>
        </div>

        {/* Copyright */}
        <div className="font-playfair">
          <p>&copy; {currentYear}  Floral Culture.  All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
