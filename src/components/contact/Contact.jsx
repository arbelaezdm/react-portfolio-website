import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const userName = useRef("");
  const email = useRef("");
  const comments = useRef("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const [message, setMessage] = useState("");

  const [messageClass, setMessageClass] = useState("");

  useEffect(() => {}, [errors]);
  useEffect(() => {}, [messageClass]);

  // ===========  HANDLE INPUT  ============
  const handleInput = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ============  HANDLE SUBMIT  ============
  const sendEmail = async (e) => {
    e.preventDefault();

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const validationErrors = {};

    // ========= NAME VALIDATION ================

    if (!user.name.trim()) {
      validationErrors.name = "Name is required";
      console.log(errors);
    }

    if (!user.email.trim()) {
      validationErrors.email = "Email is required";
      console.log(errors);
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!user.comments.trim()) {
      validationErrors.comments = "Please insert your message";
    }

    // ========== EMAIL VALIDATION =============

    // ======= SEND EMAIL & CLEAR FORM ========

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // ======= SEND EMAIL WITH EMAILJS ==========
      // emailjs
      //   .sendForm(
      //     "service_o5v42dp",
      //     "template_pr6mvea",
      //     form.current,
      //     "V45x1_YA4pzj4R-FS"
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   )

      console.log("sending email");
      console.log(`validation errors: ${validationErrors.length}`);

      setMessage(`${user.name} your message was sent successful`);
      setMessageClass("successful");

      await delay(2000);

      userName.current.value = "";
      email.current.value = "";
      comments.current.value = "";

      window.location.href = "/about";
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

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

        {/* ========= FORM ======= */}

        <form ref={form}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            onChange={handleInput}
            ref={userName}
            className={errors.name && "name_error"}
          />
          <div className="errors">
            {errors.name && <span>{errors.name}</span>}
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleInput}
            ref={email}
            className={errors.email && "email_error"}
          />
          <div className="errors">
            {errors.email && <span>{errors.email}</span>}
          </div>
          <textarea
            name="comments"
            rows="7"
            placeholder="Your Message"
            onChange={handleInput}
            ref={comments}
            className={errors.email && "email_error"}
          ></textarea>
          <div className="errors">
            {errors.comments && <span>{errors.comments}</span>}
          </div>
          <button type="submit" className="btn btn-primary" onClick={sendEmail}>
            Send Message
          </button>
          <div className={messageClass}>
            {message && <span>{message}</span>}
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
