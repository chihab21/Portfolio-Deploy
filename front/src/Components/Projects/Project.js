import React from 'react';
import './Project.css';
import { FaGithub } from 'react-icons/fa';

function Project() {
  const projects = [
    {
      title: "Gym Application ",
      link: "https://github.com/chihab21/Gym-Application",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSvUDOfRY8kVUTpPpIljzU0pBqRNbi0iKxBeOgyAs9KCCrkN6FKxOVyf3-igdSAdLK-0&usqp=CAU"
    },
    {
      title: " Job Portal ",
      link: "https://github.com/chihab21/Job-portal-MERN-Stack",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9F0xp0cG45Lwkopvlr-ZPRSNp_rsibXjVOIHHs6sd2HVka-6ZOAbeGFJ5_jXC7WcgrZs&usqp=CAU"
    },
    {
      title: " Medical Appointment Booking",
      
      link: "https://github.com/chihab21/Doctor-Appointment",
      image: "https://img.freepik.com/vecteurs-libre/application-reservation-medicale_23-2148566376.jpg"
    },
    {
      title: "React-Quiz",
      link: "https://github.com/chihab21/React-Quiz",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WcEvzH6tgfRC9FQiNtZvfn3T49k3ZvQQo3ZNb8rc_ylvIXhqfeG_7snEkTFYBH2CvNc&usqp=CAU"
    },
    {
      title: "E-commerce Application",
      link: "https://github.com/chihab21/Ecommerce",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_-V6Ua_BbH_WOYI5d7CjiQKwSyYzcUEJvr63gWhQnLG9sNHkalPBGKw3asfnMMZkgAA&usqp=CAU"
    },
    {
      title: "Chatbot ",
      link: "https://github.com/chihab21/Chat_bot",
      image: "https://savvycomsoftware.com/wp-content/uploads/2023/03/Chatbot-Integration-For-Automating-Your-Customer-Support-1-e1679476148813.webp"
    },
  ];

  return (
    <div className="projects-container" id='portfolio'>
      <h1>My Projects</h1>
      <p>Check out some of my recent work!</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
