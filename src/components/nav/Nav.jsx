import React from "react";
import "./nav.css";
import { IoIosHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import { useState } from "react";
import { IoLibrary } from "react-icons/io5";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {/* HOME */}
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <IoIosHome />
      </a>
       {/* ABOUT ME */}
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      {/* SKILLS */}
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <GrCertificate />
      </a>
      {/* EXPERIENCE */}
      <a
        href="#experiences"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdOutlineAssuredWorkload />
      </a>
      {/* PORTFOLIO */}
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <IoLibrary />
      </a>
      {/* CONTACT */}
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageRoundedDots />
      </a>
    </nav>
  );
};

export default Nav;
