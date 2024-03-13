import React from 'react';
import './css/Dropdown.css';

const Dropdown = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet" />
      <nav role="navigation" className="primary-navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li>
            <a href="#">Work</a>
            <ul className="dropdown">
              <li><a href="#">Home</a></li>
              <li><a href="#">Get to know me</a></li>
              <li><a href="#">Timeline</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Contact/Socials </a>
            <ul className="dropdown">
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Github</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Dropdown;
