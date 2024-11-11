import React from "react";
import "./About.css";
import { FaRegClock, FaProjectDiagram, FaHeadset, FaDownload } from 'react-icons/fa'; // Import icons

const About = () => {
  return (
    <section className="section_about"  id="about" >
      <div className="about_intro">
        <h1>About Me</h1>
        <h5>My introduction</h5>
      </div>

      <div className="about_main">
        <div className="about_img"></div> {/* Profile image on the left */}

        <div className="about_container">
          <div className="cards">
            <div className="about-card">
              <FaRegClock size={40} color="#4a90e2" />
              <h2>Experience</h2>
              <p>3+ Years</p>
            </div>

            <div className="about-card">
              <FaProjectDiagram size={40} color="#4a90e2" />
              <h2>Completed</h2>
              <p>6+ Projects</p>
            </div>

            <div className="about-card">
              <FaHeadset size={40} color="#4a90e2" />
              <h2>Support</h2>
              <p>Online 24/7</p>
            </div>
          </div>

          <div className="about_info">
            <h4>
              A highly skilled Full-Stack Developer with a strong focus on developing comprehensive web applications using modern frameworks such as React.js, Nest.js, and Node.js. Possesses excellent problem-solving abilities and the capability to troubleshoot and resolve technical issues swiftly. Adept at working in collaborative, team-driven environments and committed to contributing to innovative projects. Constantly seeking new challenges to grow and advance in the field.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
