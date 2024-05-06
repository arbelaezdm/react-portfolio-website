import React from "react";
import "./portfolio.css";
import img from "../../assets/portfolio.jpg";
import pbi from "../../assets/powerbi.png";
import pwa from "../../assets/powerapps.png";
import ad from "../../assets/arepas_diana.png";
import ed from "../../assets/electrodoggy.png";
import { FaCopyright } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { SiPowerapps } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { TbWorld } from "react-icons/tb";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* ========== APPS IN POWERAPPS ============= */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pwa} />
          </div>

          <div className="icon">
            <SiPowerapps className="icon_technology" />
          </div>

          <h3 className="portfolio__title">Developed Apps Testing in PowerApps</h3>

          <p className="text_description">
            Apps that was developed to fill out many forms with data that is
            required for safety and quality departments in P&G to store in data
            base.
          </p>

          <span className="text_notes">
            <span>
              <b className="note_subtitle">Note:</b>
            </span>{" "}
            Restricted information by company policies. If you want more
            information about it please contact me.
          </span>

          <div className="allright_container">
            <p className="text_allrights">
              All Rights Reserved
              <FaCopyright className="icon_allright" />
            </p>
          </div>
        </article>

        {/* ========== POWER BI DASHBOARDS ============= */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pbi} />
          </div>

          <div className="icon">
            <SiPowerbi className="icon_technology" />
          </div>

          <h3 className="portfolio__title">Developed Dashboards in Power BI</h3>

          <p className="text_description">
            Many dashboards was developed to show data according with the
            requirements of the departments of costs, safety, contractors,
            quality assurance, education & training and material process in P&G.
          </p>

          <span className="text_notes">
            <span>
              <b className="note_subtitle">Note:</b>
            </span>{" "}
            Restricted information by company policies. If you want more
            information about it please contact me.
          </span>

          <div className="allright_container">
            <p className="text_allrights">
              All Rights Reserved
              <FaCopyright className="icon_allright" />
            </p>
          </div>
        </article>

        {/* ========== AREPAS DIANA WEBSITE ============= */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ad} className="arepas_diana_image" />
          </div>

          <div className="icon">
            <TbWorld className="icon_technology" />
          </div>

          <h3 className="portfolio__title">Website - Arepas Diana</h3>

          <p className="text_description">
            Website created with ReactJS for a small business in US. You can
            find the products information, cost, address and link with contacts
            and more about the company.
          </p>

          <span className="text_notes">
            <span>
              <b className="note_subtitle">Note:</b>
            </span>{" "}
            You can visit the website by clicking in the button.
          </span>

          <div>
            <a href="https://arepasdiana.com" target="_blank">
              <GiClick className="text_notes_click" />
            </a>
          </div>

          <div className="allright_container">
            <p className="text_allrights">
              All Rights Reserved
              <FaCopyright className="icon_allright" />
            </p>
          </div>
        </article>

        {/* ========== ELECTRODOGGY ECOMMERCE ============= */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ed} className="arepas_diana_image" />
          </div>

          <div className="icon">
            <TbWorld className="icon_technology" />
          </div>

          <h3 className="portfolio__title">
            Ecommerce Final Project - Full Stack Course
          </h3>

          <p className="text_description">
            Website created with HTML | CSS | JavaScript | NodeJS | Express | Multer | Sequelize | ReactJS | EJS | MySQL
          </p>

          <span className="text_notes">
            <span>
              <b className="note_subtitle">Note:</b>
            </span>{" "}
            You can visit the website by clicking in the button.
          </span>

          <div>
            <a href="https://electrodoggy-pd-6c23aacc2bdb.herokuapp.com/" target="_blank">
              <GiClick className="text_notes_click" />
            </a>
          </div>

          <div className="allright_container">
            <p className="text_allrights">
              All Rights Reserved
              <FaCopyright className="icon_allright" />
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
