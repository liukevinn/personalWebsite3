
import React from 'react';
import './css/Skills.css';
const SkillsSection = () => {
    return (

    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-category">
        <h3>Front-End</h3>
        <div className="skills-list">
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">React Basics</span>

        </div>
      </div>
      <div className="skills-category">
        <h3>Back-End</h3>
        <div className="skills-list">
          <span className="skill">Java</span>
          <span className="skill">Python</span>
          <span className="skill">C Basics</span>
          <span className="skill">MIPS</span>
        </div>
      </div>
      <div className="skills-category">
        <h3>Data Science</h3>
        <div className="skills-list">
          <span className="skill">R</span>
          <span className="skill">Pandas</span>
        </div>
      </div>
      <div className="skills-category">
        <h3>Developer Tools</h3>
        <div className="skills-list">
          <span className="skill">VSCode</span>
          <span className="skill">GIT</span>
          <span className="skill">GitHub</span>
        </div>
      </div>
    </div>
  )
}

  export default SkillsSection;