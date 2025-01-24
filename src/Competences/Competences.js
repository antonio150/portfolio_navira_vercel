import React from "react";
import "./Competences.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Importation des icônes
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaWordpress } from "react-icons/fa";
import { SiSymfony, SiPrestashop, SiJquery } from "react-icons/si";

const Competences = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, value: 90, color: "#e34c26" },
    { name: "CSS", icon: <FaCss3Alt />, value: 80, color: "#1572b6" },
    { name: "JavaScript", icon: <FaJs />, value: 78, color: "#f7df1e" },
    { name: "jQuery", icon: <SiJquery />, value: 75, color: "#0769ad" },
    { name: "PHP", icon: <FaPhp />, value: 85, color: "#777bb4" },
    { name: "PrestaShop", icon: <SiPrestashop />, value: 60, color: "#df0067" },
    { name: "React", icon: <FaReact />, value: 70, color: "#61dafb" },
    { name: "Symfony", icon: <SiSymfony />, value: 74, color: "#000000" },
    { name: "WordPress", icon: <FaWordpress />, value: 50, color: "#21759b" },
  ];

  return (
    <div className="competences" id="competences">
      <div className="title_compete">COMPETENCES</div>
      <div id="compete_logo">
        {skills.map((skill, index) => (
          <div className="align_img" key={index}>
            <div className="circle">
              <CircularProgressbar
                value={skill.value}
                text={`${skill.value}%`}
                styles={buildStyles({
                  textColor: "white",
                  pathColor: skill.color,
                  trailColor: "rgba(255, 255, 255, 0.2)",
                })}
              />
            </div>
            <div className="icon" style={{ color: skill.color, fontSize: "2.5rem", marginTop: "1rem" }}>
              {skill.icon}
            </div>
            <p className="skill_name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competences;
