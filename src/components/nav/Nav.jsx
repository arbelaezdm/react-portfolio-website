import React from 'react'
import './nav.css'
import {IoIosHome} from 'react-icons/io'
import {FaUserAlt} from 'react-icons/fa'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {RiCustomerServiceFill} from 'react-icons/ri'
import {BiMessageRoundedDots} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <IoIosHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>

      <a href="#experience"
      onClick={() => setActiveNav("#experience")}
      className={activeNav === "#experience" ? "active" : ""}
      >
        <BsJournalBookmarkFill />
      </a>

      <a href="#services"
      onClick={() => setActiveNav("#services")}
      className={activeNav === "#services" ? "active" : ""}
      >
        <RiCustomerServiceFill />
      </a>

      <a href="#contact"
      onClick={() => setActiveNav("#contact")}
      className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageRoundedDots />
      </a>

    </nav>
  );
}

export default Nav