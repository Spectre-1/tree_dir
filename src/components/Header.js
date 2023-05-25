import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '../tailwind.css';

const Header = () => {
    return (
      <header className="bg-black text-green-400 p-2 fixed inset-x-0 top-0">
        <div className="flex items-center padding">
          <h1 className="text-md md:text-xl">Treeify!</h1>
          <a href="https://github.com" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="pl-4  text-green-400 text-xl mx-1 transition-colors duration-300 hover:text-blue-500">
          Read me!
          <FontAwesomeIcon icon={faGithub} className="ml-2" />
        </a>
        </div>
      </header>
    );
};

export default Header;
