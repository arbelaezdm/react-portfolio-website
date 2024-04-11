import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiMicrosoftsharepoint } from "react-icons/si";
import { SiPowerapps } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiPowerbi } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="container skills__container">
        <article className="skill">
          <div className="skill__head">
            {/* ======== FRONTEND =================*/}

            <h3>ENGINEERING</h3>
          </div>

          <ul className="skill__list">
            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Project Management</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Maintenance Management</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Cost Management</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Total Productive Maintenance</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Logistics</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>SAP</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Microsoft Office</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Solid Edge</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Electricity</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>PLC Programming</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Training Development</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Quality Assurance</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Environmental Management</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="engineer_list_icon" />
              </div>
              <div>
                <p>Industrial Hygiene & Safety Management</p>
              </div>
            </li>
          </ul>
        </article>
        {/* =====   END OF ENGINEERING ====== */}

        <article className="skill">
          <div className="skill__head">
            <h3>FRONTEND</h3>
          </div>

          <ul className="skill__list">
            <li>
              <FaHtml5 className="skill__list_icon" />
              <p>HTML</p>
            </li>

            <li>
              <FaHtml5 className="skill__list_icon" />
              <p>CSS</p>
            </li>

            <li>
              <TbBrandJavascript className="skill__list_icon" />
              <p>JavaScript</p>
            </li>

            <li>
              <FaReact className="skill__list_icon" />
              <p>React</p>
            </li>

            <li>
              <FaGithub className="skill__list_icon" />
              <p>GIT</p>
            </li>

            <li>
              <SiMicrosoftsharepoint className="skill__list_icon" />
              <p>Sharepoint</p>
            </li>

            <li>
              <SiPowerapps className="skill__list_icon" />
              <p>Power Apps</p>
            </li>
          </ul>
        </article>
        {/* =====   END FRONTEND ====== */}

        {/* ======== BACKEND =================*/}

        <article className="skill">
          <div className="skill__head">
            <h3>BACKEND</h3>
          </div>

          <ul className="skill__list">
            <li>
              <FaNodeJs className="skill__list_icon" />
              <p>NodeJS</p>
            </li>

            <li>
              <FaNodeJs className="skill__list_icon" />
              <p>ExpressJS</p>
            </li>

            <li>
              <SiMysql className="skill__list_icon" />
              <p>MySQL</p>
            </li>

            <li>
              <DiMongodb className="skill__list_icon" />
              <p>MongoDB</p>
            </li>

            <li>
              <SiMicrosoftsharepoint className="skill__list_icon" />
              <p>Sharepoint</p>
            </li>
          </ul>
        </article>
        {/* =====   END OF BACKEND ====== */}

        {/* ======== BI =================*/}

        <article className="skill">
          <div className="skill__head">
            <h3>BUSINESS INTELLIGENCE</h3>
          </div>

          <ul className="skill__list">
            <li>
              <SiPowerbi className="skill__list_icon" />
              <p>Power BI</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Skills;
