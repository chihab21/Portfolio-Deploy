import React, { useState } from "react";
import { FiHome, FiUser, FiTool, FiBriefcase, FiMail, FiMenu, FiX } from "react-icons/fi"; // Import toggle icons
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  return (
    <header className="header">
      <nav className="nav-container">
        <a href="index.html" className="nav-logo">
          Chihab
        </a>

        {/* Toggle Button */}
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />} {/* Toggle between menu and close icons */}
        </div>

        {/* Navigation Menu */}
        <div className={`nav_menu ${menuOpen ? "show-menu" : ""}`}>
          <ul className="nav_list">
            <li>
              <a href="#home" className="nav_link">
                <FiHome /> Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav_link">
                <FiUser /> About
              </a>
            </li>
            <li>
              <a href="#skill" className="nav_link">
                <FiTool /> Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav_link">
                <FiBriefcase /> Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="nav_link">
                <FiMail /> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
