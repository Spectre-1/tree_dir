import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../tailwind.css';

const Footer = () => {
  return (
    <footer className="bg-black p-2 fixed inset-x-0 bottom-0 text-center">
      <p className="text-green-400"> © Not at all protected by copyright. No rights reserved.</p>
      <div className="mt-1">
        <a href="https://github.com" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-green-400 text-xl mx-1 transition-colors duration-300 hover:text-blue-500">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-green-400 text-xl mx-1 transition-colors duration-300 hover:text-blue-500">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
