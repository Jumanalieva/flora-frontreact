import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import awsConfig from '../config/amplifyConfig';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSubscribe = () => {
    const signUpUrl = `${awsConfig.Auth.oauth.domain}/signup?client_id=${awsConfig.Auth.userPoolWebClientId}&response_type=code&scope=${awsConfig.Auth.oauth.scope.join('+')}&redirect_uri=${awsConfig.Auth.oauth.redirectSignIn}`;
    window.location.href = signUpUrl;
  };

  const handleSignIn = () => {
    const signInUrl = `${awsConfig.Auth.oauth.domain}/login?client_id=${awsConfig.Auth.userPoolWebClientId}&response_type=code&scope=${awsConfig.Auth.oauth.scope.join('+')}&redirect_uri=${awsConfig.Auth.oauth.redirectSignIn}`;
    window.location.href = signInUrl;
  };

  // Function to check if the link is active
  const isActive = (path: string) => (location.pathname === path ? 'underline' : '');


  return (
    <header className="bg-white fixed w-full top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-4  max-w-5xl mx-auto">
        {/* Centered Floral Culture Logo */}
        <div className="flex-1 flex justify-center">
          {/* Responsive font size for Floral Culture */}
          <Link
            to="/"
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center m-5 font-playfair"
          >
            FLORAL CULTURE
          </Link>
        </div>
        {/* Menu Button on Small Screens */}
        {!isLargeScreen && (
          <button onClick={toggleMenu} className="text-l absolute right-4 font-playfair">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        )}
      </div>

      {/* Full-screen Dropdown Menu for Small Screens */}
      {isOpen && !isLargeScreen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-40 space-y-6 font-playfair">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-lg">
            CLOSE
          </button>
          <Link to="/plant" onClick={toggleMenu} className={`text-3xl ${isActive('/plant')}`}>
            Plant Memoir
          </Link>
          <Link to="/industry" onClick={toggleMenu} className={`text-3xl ${isActive('/industry')}`}>
            Industry
          </Link>
          <Link to="/culinary" onClick={toggleMenu} className={`text-3xl ${isActive('/culinary')}`}>
            Culinary
          </Link>
          <Link to="/botanistAI" onClick={toggleMenu} className={`text-3xl ${isActive('/botanistAI')}`}>
            BotaniQ AI
          </Link>
          <button onClick={handleSubscribe} className="text-3xl text-red-600">
            Subscribe
          </button>
          <button onClick={handleSignIn} className="text-3xl text-red-600">
            Sign In
          </button>
        </div>
      )}

      {/* Horizontal Navbar for Large Screens */}
      {isLargeScreen && (
        <nav className="flex justify-center space-x-8 py-4">
          <Link to="/plant" className={`text-lg hover:underline ${isActive('/plant')}`}>
            Plant Memoir
          </Link>
          <Link to="/industry" className={`text-lg hover:underline ${isActive('/industry')}`}>
            Industry
          </Link>
          <Link to="/culinary" className={`text-lg hover:underline ${isActive('/culinary')}`}>
            Culinary
          </Link>
          <Link to="/botanistAI" className={`text-lg hover:underline ${isActive('/botanistAI')}`}>
            BotaniQ AI
          </Link>
          <button onClick={handleSubscribe} className="text-lg text-red-600 hover:underline">
            Subscribe
          </button>
          <button onClick={handleSignIn} className="text-lg text-red-600 hover:underline">
            Sign In
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
