import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import { TbHandClick } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <p>
          I am a Mechatronic Engineer and passionate about programming. I have
          worked in different fields of my career including engineering and programming
          projects, automation projects, development projects in Power Apps, Power BI, Power Automate, and
          full-stack technologies.
        </p>
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>+18 Years of Manufacturing Experience</small>

            <br />
            <small> +3 Years of Software Development Experience</small>
          </article>

          <article className="about__card">
            <IoIosAlbums className="about__icon" />
            <h5>Projects</h5>
            <TbHandClick className="click__icon"/>
          </article>
        </div>
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
