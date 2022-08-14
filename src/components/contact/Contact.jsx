import React, { useRef } from 'react'
import './contac.css'
import {FiMail} from 'react-icons/fi'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o5v42dp', 'template_pr6mvea', form.current, 'V45x1_YA4pzj4R-FS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      .then(()=>{
        e.target.reset()
      })
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contac Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>diego@diego.com</h5>
            <a href="mailto:arbelaez.dm@hotmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Mensagger</h4>
            <h5>Test</h5>
            <a href="https://google.com" target="_blank">
              Test
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+12345678</h5>
            <a
              href="https://api.whatsapp.com/send?phone=573194961068"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
      
      {/* END OF CONTACT OPTIONS */}

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <textarea name="message" rows="7" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
      </div>
    </section>
  );
}

export default Contact