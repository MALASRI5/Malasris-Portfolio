import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="portfolio-title">My Portfolio</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={closeMenu}><a href="#home">Home</a></li>
          <li onClick={closeMenu}><a href="#about">About</a></li>
          <li onClick={closeMenu}><a href="#skills">Skills</a></li>
          <li onClick={closeMenu}><a href="#projects">Projects</a></li>
          <li onClick={closeMenu}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
