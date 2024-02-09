import React from "react";
import "../links/links.css"
import CV from "../../assets/diegoarbelaezCV.pdf";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Links = () => {
  return (
    <>
      <div className="container_links">
        <a href={CV} download className="btn">
          Download my CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Talk with me
        </a>
      </div>
      <div className="container_socials">
        <a href="https://linkedin.com/in/diego-arbelaez" target="_blank" className="social_links">
          <BsLinkedin />
        </a>
        <a href="https://github.com/arbelaezdm" target="_blank" className="social_links">
          <BsGithub />
        </a>
      </div>
    </>
  );
};

export default Links;
