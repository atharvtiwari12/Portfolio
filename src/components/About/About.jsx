import React, { useEffect, useState } from "react";
import "./About.css";
import Profile from "../../assets/Profile.png";
import { FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AtharvResume from "../../assets/Atharv_s_Resume.pdf";

function About() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Software Developer",
    "Full Stack Developer",
    "Java Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setIsDeleting(true);
        setTypingSpeed(50);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <>
      <div className="hero" id="home">
        <img src={Profile} alt="Profile" />
        <h2>
          <span> Hi, I'm Atharv Tiwari,</span> a passionate
        </h2>
        <h3>
          <span>{text}</span>
          <span className="blinking-cursor">|</span>
        </h3>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/atharvtiwari12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/atharvtiwari12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://leetcode.com/u/atharvtiwari12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode size={30} />
          </a>
          <a href="mailto:atharvtiwari1203@gmail.com">
            <SiGmail size={30} />
          </a>
          <a
            href="https://t.me/atharvtiwari1203"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane size={30} />
          </a>
        </div>

        <div className="hero-action">
          <div className="hero-connect">
            {" "}
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </div>
          <a href={AtharvResume} download className="hero-resume">
            My Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
