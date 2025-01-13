import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiExpress,
  SiGithub,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiGit,
  SiMongodb,
  SiC,
  SiRedux
} from "react-icons/si";
import { MdCode } from "react-icons/md";
import { FaJava } from "react-icons/fa";

import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS", logo: <SiCss3 />, color: "#1572B6" },
    { name: "JavaScript", logo: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", logo: <SiReact />, color: "#61DAFB" },
    { name: "Redux Toolkit", logo: <SiRedux />, color: "#764ABC" },
    { name: "Express JS", logo: <SiExpress />, color: "#110011" },
    { name: "GitHub", logo: <SiGithub />, color: "#181717" },
    { name: "Node JS", logo: <SiNodedotjs />, color: "#339933" },
    { name: "Java", logo: <FaJava />, color: "#007396" },
    { name: "Python", logo: <SiPython />, color: "#3776AB" },
    { name: "MySQL", logo: <SiMysql />, color: "#4479A1" },
    { name: "Git", logo: <SiGit />, color: "#F05032" },
    { name: "MongoDB", logo: <SiMongodb />, color: "#47A248" },
    { name: "C", logo: <SiC />, color: "#A8B9CC" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h3 className="skills-title">
          My <span className="highlight">Skills</span>
        </h3>
        <p className="skills-subtitle">Here are my technical skills</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ borderColor: skill.color }}
          >
            <div
              className="skill-icon"
              style={{ background: skill.color }}
            >
              {skill.logo}
            </div>
            <h4 className="skill-name">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
