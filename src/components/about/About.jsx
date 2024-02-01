import React from "react";
import "./about.css";
import { IoIosAlbums } from "react-icons/io";
import { TbHandClick } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <p>
          I am a Mechatronic Engineer and passionate about programming. I have
          worked in different fields of my career including programming
          projects, automation projects, development projects in Power Apps,
          Power BI, Power Automate, and full-stack technologies.
        </p>
      </div>
      <div className="lets__talk">
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default About;
