import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "Développeur PHP/POO",
    company: "OPTIMADA",
    duration: "Juillet 2024 – Décembre 2024",
    description:
      "Maintenance d’une application web Radian et conception d’une application Sage.",
    tools: ["PHP 8", "MySQL", "Jquery", "JavaScript", "HTML", "CSS", "MVC", "Agile"],
  },
  {
    title: "Développeur PHP/POO",
    company: "Créative Développement",
    duration: "Septembre 2023 – Mars 2024",
    description:
      "Développement d’une application pour la gestion d’école avec notifications et système mail.",
    tools: ["PHP 8", "MySQL", "Jquery", "JavaScript", "HTML", "CSS", "MVC"],
  },
  {
    title: "Développeur Symfony & Angular (Stage)",
    company: "Creatic",
    duration: "Avril 2023 – Juin 2023",
    description:
      "Développement d'une application de gestion de CV avec API RESTful et intégration tiers.",
    tools: ["Symfony 5", "MySQL", "API REST", "PHP 7", "Angular"],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="experience-container">
      <h2 className="experience-title">Expériences Professionnelles</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-job-title">
              {exp.title} <span className="experience-company">@{exp.company}</span>
            </h3>
            <p className="experience-duration">{exp.duration}</p>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-tools">
              <h4>Outils & Technologies :</h4>
              <ul>
                {exp.tools.map((tool, i) => (
                  <li key={i} className="experience-tool">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
