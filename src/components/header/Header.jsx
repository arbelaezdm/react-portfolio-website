import React from "react";
import "./header.css";
import Links from "../links/Links";
import ME from "../../assets/me-about.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2 className=" profession-text">Hello I'm</h2>
        <h1>Diego Arbelaez</h1>
        <h2 className="profession-text">
          Mechatronic Engineer | Power BI Developer | Full Stack Developer
        </h2>

          <Links />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
