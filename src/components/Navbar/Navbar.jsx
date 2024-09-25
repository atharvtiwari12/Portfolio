import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="Logo" />
        <div className="menu-mob-open" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="menu-mob-close" onClick={toggleMenu}>
            &times; {/* Close icon */}
          </div>
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#skills">
              <p onClick={() => setMenu("skills")}>Skills</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#projects">
              <p onClick={() => setMenu("projects")}>Projects</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("contact")}>Contact Me</p>
            </AnchorLink>
          </li>
          {/* Move Connect With Me inside the mobile menu */}
          <div className="nav-connect mobile">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </div>
        </ul>
        <div className="nav-connect desktop">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
