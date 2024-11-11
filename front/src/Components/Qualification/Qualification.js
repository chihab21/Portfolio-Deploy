import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import "./Qualification.css";

function Qualification() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="qualification-container">
      <h1>Qualification</h1>
      <p>My personal journey</p>

      {/* Tabs for Education and Experience */}
      <div className="qualification-tabs">
        <div
          className={`qualification-tab ${
            activeTab === "education" ? "active" : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
          <FaGraduationCap className="tab-icon" /> Education
        </div>
        <div
          className={`qualification-tab ${
            activeTab === "experience" ? "active" : ""
          }`}
          onClick={() => setActiveTab("experience")}
        >
          <FaBriefcase className="tab-icon" /> Experience
        </div>
      </div>

      {/* Timeline Content */}
      <div className="qualification-timeline">
        {activeTab === "education" && (
          <div className="timeline">
            <div className="timeline-item">
              <div className="bulb"></div>
              <div className="timeline-content">
                <h3> Software Engineer</h3>
                <p>Enetcom (Sfax)</p>
                <div className="timeline-date">
                  <FaCalendarAlt /> 2021 - 2024
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="bulb"></div>
              <div className="timeline-content">
                <h3>Preparatory Cycle in Physics and Chemistry</h3>
                <p>Ipeiem (Tunis)</p>
                <div className="timeline-date">
                  <FaCalendarAlt /> 2018-2021
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="bulb"></div>
              <div className="timeline-content">
                <h3> Baccalaureate in Experimental Sciences</h3>
                <p> Gafsa</p>
                <div className="timeline-date">
                  <FaCalendarAlt /> 2017
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "experience" && (
          <div className="timeline">
            <div className="timeline-item">
              <div className="bulb"></div>
              <div className="timeline-content">
                <h3>Final Year Project (Full Stack Developer)</h3>
                <p> Wind Consulting </p>
                <div className="timeline-date">
                  <FaCalendarAlt /> 2024
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="bulb"></div>
              <div className="timeline-content">
                <h3> Web Developer Internship</h3>
                <p> Bee Coders </p>
                <div className="timeline-date">
                  <FaCalendarAlt /> 2023
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="bulb"></div>
              <div className="timeline-content">
                <h3> Web Developer Internship</h3>
                <p> Proxym </p>
                <div className="timeline-date">
                  <FaCalendarAlt /> 2022
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Qualification;
