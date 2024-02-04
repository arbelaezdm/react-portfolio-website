import React from "react";
import "./experience.css";
import { SiPowerapps } from "react-icons/si";
import { SiMicrosoftsharepoint } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { BsPatchCheckFill } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";

const Experience = () => {
  return (
    <section id="experiences">
      <h2>Experience</h2>

      <div className="container experience_description">
        <article className="about__card">
          <div>
            <PiCertificate className="about_icon" />
          </div>
          <span>+18 Years of Manufacturing Experience</span>

          <br />
          <span> +3 Years of Software Development Experience</span>
        </article>
        <p>
          I have worked for more than 18 years in the manufacturing industry
          passing for several roles which have allowed me to apply my knowledge
          in my professional field and achieving gain new skills that have
          improve my professional career. During my last years I have worked in
          manufacturing industry and software development enhancing my skills using technologies in
          frontend, backend and data analysis.
        </p>
      </div>

      <div className="container experiences__container">
        <article className="experience">
          <div className="experience__head">
            {/* ============= ENGINEERING  =====================*/}
            <h3>ENGINEERING</h3>
          </div>

          <ul className="experience__list">
            <li>
              <div>
                <BsPatchCheckFill className="experience__list_icon" />
              </div>
              <div>
                <p>Equipment Overhauling</p>
              </div>
            </li>

            <li>
              <BsPatchCheckFill className="experience__list_icon" />
              <div>
                <p>Equipment improvement</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="experience__list_icon" />
              </div>
              <div>
                <p>Project automation</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="experience__list_icon" />
              </div>
              <div>
                <p>Productive projects</p>
              </div>
            </li>
            <li>
              <div>
                <BsPatchCheckFill className="experience__list_icon" />
              </div>
              <div>
                <p>Cost Management</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="experience__list_icon" />
              </div>
              <div>
                <p>Loss analysis and cost elimination projects</p>
              </div>
            </li>
            <li>
              <div>
                <BsPatchCheckFill className="experience__list_icon" />
              </div>
              <div>
                <p>Quality assurance systems management</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="experience__list_icon" />
              </div>
              <div>
                <p>Industrial safety systems management</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="experience__list_icon" />
              </div>
              <div>
                <p>Environmental systems management</p>
              </div>
            </li>

            <li>
              <div>
                <BsPatchCheckFill className="experience__list_icon" />
              </div>
              <div>
                <p>Logistics</p>
              </div>
            </li>
            <li>
              <div>
                <BsPatchCheckFill className="experience__list_icon" />
              </div>
              <div>
                <p>3D Spare Parts Design</p>
              </div>
            </li>
            <li>
              <BsPatchCheckFill className="experience__list_icon" />
              <p>Equipment 3D Design</p>
            </li>
          </ul>
        </article>
        {/* =====   END OF ENGINEERING ====== */}

        {/* =====   SOFTWARE DEVELOPMENT ====== */}

        <article className="experience">
          <div className="experience__head">
            <h3>SOFTWARE DEVELOPMENT</h3>
          </div>

          <ul className="experience__list">
            <li>
              <div>
                <SiPowerapps className="experience__list_icon" />
              </div>
              <div>
                <p>Software Development - Microsoft PowerApps</p>
              </div>
            </li>

            <li>
              <div>
                <SiMicrosoftsharepoint className="experience__list_icon" />
              </div>
              <div>
                <p>Software Development - Microsoft Sharepoint</p>
              </div>
            </li>

            <li>
              <div>
                <SiPowerbi className="experience__list_icon" />
              </div>
              <div>
                <p>Dashboards Development - PowerBI </p>
              </div>
            </li>

            <li>
              <div>
                <FaReact className="experience__list_icon" />
              </div>
              <div>
                <p>Frontend Development</p>
              </div>
            </li>

            <li>
              <div>
                <DiMysql className="experience__list_icon" />
              </div>
              <div>
                <p>Backend Development</p>
              </div>
            </li>
          </ul>
        </article>
        {/* =====   END SOFTWARE DEVELOPMENT ====== */}
      </div>
    </section>
  );
};

export default Experience;
