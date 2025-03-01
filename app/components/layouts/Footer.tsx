import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Make sure to install react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto px-4 lg:px-[3vw]">
        <div className="flex flex-col items-center mb-6">
          <h3 className="text-2xl font-semibold mb-2">Connect with Me</h3>
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl hover:text-gray-400 transition-all duration-300" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl hover:text-gray-400 transition-all duration-300" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl hover:text-gray-400 transition-all duration-300" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <p className="text-center text-sm text-gray-400"> 
            &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
          </p>
        </div>
        
        {/* Back to Top Button */}
        <div className="text-center mt-4">
          <a href="#top" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition-all duration-300">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
