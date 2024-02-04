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
          Hello! I’m Diego Arbelaez and I thrive at the intersection of project
          management, maintenance management, and software development. Here’s a
          glimpse into my professional journey.
        </p>
        <p>
          <b>Software Development Passion:</b> Coding is my creative outlet.
          I’ve dived into languages like Python, JavaScript, and Java, building
          robust applications and solving intricate problems. From front-end
          interfaces to back-end architecture, I’m committed to elegant,
          scalable solutions.
        </p>
        <p>
          <b>Project Management:</b> As a seasoned project manager, I’ve
          orchestrated complex initiatives from inception to successful
          completion. My toolkit includes Gantt charts, agile methodologies,
          budget management and risk assessment. I believe in fostering
          collaboration, ensuring clear communication, and delivering results
          that exceed expectations.
        </p>
        <p>
          <b>Maintenance Management:</b> I believe that reliability is the
          backbone of any successful operation. With a background in maintenance
          management, I’ve honed my skills in predictive maintenance, root cause
          analysis, and failure prevention.
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
