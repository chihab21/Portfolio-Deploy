import React from 'react';
import './skill.css';
import { FaReact, FaNodeJs, FaAws, FaPython, FaDatabase, FaAngular, FaPhp, FaGithub, FaGit } from 'react-icons/fa';
import { SiTypescript, SiDocker, SiMongodb, SiHtml5, SiCss3, SiGit, SiNodedotjs, SiPostgresql, SiLaravel, SiVisualstudiocode, SiPostman } from 'react-icons/si';

function Skill() {
  return (
    <div className="skills-container" id='skill'>
      <h1>Skills</h1>
      <p>Overview of my technical expertise and tools</p>
      
      {/* Skill Categories */}
      <div className="skills-grid">
        
        <div className="skills-category">
          <h2>Frontend</h2>
          <div className="skills-icons">
            <div className="skill"><FaReact /> React</div>
            <div className="skill"><FaAngular /> Angular</div>
            <div className="skill"><SiHtml5 /> HTML5</div>
            <div className="skill"><SiCss3 /> CSS3</div>
            <div className="skill"><SiTypescript /> TypeScript</div>
            <div className="skill">Material UI</div>
          </div>
        </div>

        <div className="skills-category">
          <h2>Backend</h2>
          <div className="skills-icons">
            <div className="skill"><FaNodeJs /> Node.js</div>
            <div className="skill"><SiNodedotjs /> Express</div>
            <div className="skill"><SiLaravel /> Laravel</div>
            <div className="skill"><FaPhp /> PHP</div>
            <div className="skill">.NET</div>
          </div>
        </div>

        <div className="skills-category">
          <h2>Programming Languages</h2>
          <div className="skills-icons">
            <div className="skill"><SiTypescript /> TypeScript</div>
            <div className="skill"><FaPhp /> PHP</div>
            <div className="skill">C#</div>
            <div className="skill"><FaPython /> Python</div>
          </div>
        </div>

        <div className="skills-category">
          <h2>Databases</h2>
          <div className="skills-icons">
            <div className="skill"><SiMongodb /> MongoDB</div>
            <div className="skill"><FaDatabase /> MySQL</div>
            <div className="skill"><SiPostgresql /> PostgreSQL</div>
          </div>
        </div>

        <div className="skills-category">
          <h2>Tools</h2>
          <div className="skills-icons">
            <div className="skill"><FaGit /> Git</div>
            <div className="skill"><FaGithub /> GitHub</div>
            <div className="skill"><SiPostman /> Postman</div>
            <div className="skill"><SiVisualstudiocode /> Visual Studio Code</div>
            <div className="skill"><SiDocker /> Docker</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skill;
