import React, { useEffect, useRef, useState } from "react";
import "./contac.css";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import formValidation from "../FormValidation";

const Contact = () => {
  const form = useRef();

  useEffect(() => {}, []);

  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  // =========  HANDLE INPUT  ============
  const handleInput = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // =========  HANDLE SUBMIT  ============
  const sendEmail = (e) => {
    e.preventDefault();
    if (errors.name === "" && errors.email === "") {
      console.log("user added");
      console.log(errors);
    } else {
      console.log("NOK");
      console.log(errors);
    }
    setErrors(formValidation(user));
    return;

    // ======= SEND EMAIL WITH EMAILJS ==========
    emailjs
      .sendForm(
        "service_o5v42dp",
        "template_pr6mvea",
        form.current,
        "V45x1_YA4pzj4R-FS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        setUser({
          name: "",
          email: "",
        });
      });
  };

  return (
    <section id="contact">
      <h2>Contac Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>arbelaez.dm.1@gmail.com</h5>
            <a href="mailto:arbelaez.dm@hotmail.com">Send me an email</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=17544576330"
              target="_blank"
            >
              Send me a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            onChange={handleInput}
          />
          <div className="errors">
            {errors.name && <span>{errors.name}</span>}
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleInput}
          />
          <div className="errors">
            {errors.email && <span>{errors.email}</span>}
          </div>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary" onClick={sendEmail}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
