import React from 'react'
import './footer.css'
import {AiFillGoogleCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Diego</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://google.com" target='_blank'><AiFillGoogleCircle /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Diego Arbelaez All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer