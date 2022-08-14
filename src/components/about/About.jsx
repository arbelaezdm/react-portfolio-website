import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { IoIosAlbums } from "react-icons/io";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>+3 Years of Experience</small>
            </article>

            <article className="about__card">
              <TbUsers className="about__icon" />
              <h5>Clients</h5>
              <small>+200 Worldwide</small>
            </article>

            <article className="about__card">
              <IoIosAlbums className="about__icon" />
              <h5>Projects</h5>
              <small>+80 Completed</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure error
            magni enim dignissimos in alias porro excepturi nam laborum omnis.
            Eaque dignissimos quis tempore ratione dicta cupiditate, deleniti
            eveniet assumenda?
          </p>

          <a href="#contac" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
