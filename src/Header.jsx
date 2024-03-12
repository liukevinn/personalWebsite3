import React from 'react';
import './css/Header.css'; // Ensure the path to your CSS file is correct


const Header = () => {
  return (
    <header className="fixed-header">
      <div className="header-content">
        <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;