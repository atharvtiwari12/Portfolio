import React from "react";
import "./Skills.css";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiFirebase,
  SiExpress,
  SiJavascript,
  SiHibernate,
} from "react-icons/si";
import { GiTreeBranch } from "react-icons/gi";
import { AiOutlineApi } from "react-icons/ai";

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h3 className="skills-heading">Skills</h3>
      <div className="skills-wrapper">
        <div className="skills-container">
          <div className="skills-box">
            <h4>Frontend</h4>
            <div className="skills-grid">
              <div className="skill-item">
                <FaReact /> React.js
              </div>
              <div className="skill-item">
                <SiRedux /> Redux
              </div>
              <div className="skill-item">
                <FaHtml5 /> HTML
              </div>
              <div className="skill-item">
                <FaCss3Alt /> CSS
              </div>
              <div className="skill-item">
                <SiBootstrap /> Bootstrap
              </div>
              <div className="skill-item">
                <SiTailwindcss /> Tailwind CSS
              </div>
              <div className="skill-item">
                <SiJavascript /> JavaScript
              </div>
            </div>
          </div>

          <div className="skills-box">
            <h4>Backend</h4>
            <div className="skills-grid">
              <div className="skill-item">
                <FaJava /> Java
              </div>
              <div className="skill-item">
                <FaNodeJs /> Node.js
              </div>
              <div className="skill-item">
                <SiExpress /> Express.js
              </div>
              <div className="skill-item">
                <SiHibernate /> Hibernate
              </div>

              <div className="skill-item">
                <AiOutlineApi /> API Handling
              </div>
              <div className="skill-item">
                <FaDatabase /> JDBC
              </div>

              <div className="skill-item">
                <SiFirebase /> Firebase
              </div>
            </div>
          </div>

          <div className="skills-box">
            <h4>Additional Skills</h4>
            <div className="skills-grid">
              <div className="skill-item">
                <SiMysql /> MySQL
              </div>
              <div className="skill-item">
                <FaGitAlt /> Git/GitHub
              </div>

              <div className="skill-item">
                <GiTreeBranch /> Data Structures
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
