import React, { useState } from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <p>
          Code Analytics Hub
        </p>
        <img src={logo} className="logo "/>
      </div>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://linkedin.com/in/diego-arbelaez"
          target="_blank"
          className="social_links"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/arbelaezdm"
          target="_blank"
          className="social_links"
        >
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Code Analytics Hub All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
