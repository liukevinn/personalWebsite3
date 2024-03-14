import React from 'react';
import './css/Dropdown.css';

const Dropdown = () => {
  const handleNavigation = (event, targetId) => {
    if (targetId === 'linkedin'){
      window.open('https://www.linkedin.com/in/liukevin', '_blank');
    } else if(targetId === 'instagram'){
      window.open('https://www.instagram.com/liukevinn', '_blank');
    } else if(targetId === 'github'){
      window.open('https://github.com/liukevinn', '_blank');
    } else {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet" />
      <nav role="navigation" className="primary-navigation">
        <ul>
          <li>
            <a href="#getToKnowMe" onClick={(e) => handleNavigation(e, 'getToKnowMe')}>Shortcuts</a>
            <ul className="dropdown">
              <li><a href="#getToKnowMe" onClick={(e) => handleNavigation(e, 'getToKnowMe')}>Get to know me</a></li>
              <li><a href="#timeLine" onClick={(e) => handleNavigation(e, 'timeLine')}>Timeline</a></li>
              <li><a href="#pictures" onClick={(e) => handleNavigation(e, 'pictures')}>Pictures</a></li>
            </ul>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact/Socials</a>
            <ul className="dropdown">
              <li><a href="#linkedin" onClick={(e) => handleNavigation(e, 'linkedin')}>Linkedin</a></li>
              <li><a href="#instagram" onClick={(e) => handleNavigation(e, 'instagram')}>Instagram</a></li>
              <li><a href="#github" onClick={(e) => handleNavigation(e, 'github')}>Github</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Dropdown;
