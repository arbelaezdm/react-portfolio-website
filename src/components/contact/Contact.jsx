import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const userName = useRef("");
  const email = useRef("");

  useEffect(() => {}, []);

  const [errors, setErrors] = useState({
    errorName: "",
    errorEmail: "",
  });

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  // ===========  HANDLE INPUT  ============
  const handleInput = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ============  HANDLE SUBMIT  ============
  const sendEmail = (e) => {
    e.preventDefault();

    // ========= NAME VALIDATION ================
    if (user.name === "") {
      setErrors((prev) => {
        return { ...prev, errorName: "Este campo no puede estar vacio" };
      });
      console.log(errors.errorName);
    } else if (user.name && user.name.length < 5) {
      console.log("else if");
      setErrors((prev) => ({
        ...prev,
        errorName: "Este campo debe tener minimo 5 caracteres",
      }));
      console.log(errors.errorName);
    } 
    // else {
    //   setErrors({ errorName: "" });
    //   console.log('error name')
    //   console.log(errors.errorName);
    // }

    // ========== EMAIL VALIDATION =============

    if (user.email === "") {
      setErrors((prev) => ({
        ...prev,
        errorEmail: "Debes ingresar un email",
      }));
      console.log(errors.errorEmail);
    } else if (user.email.includes("@")) {
      setErrors((prev) => ({
        ...prev,
        errorEmail: "El mail no es valido",
      }));
      console.log(errors.errorEmail);
    } 
    // else {
    //   setErrors((prev) => ({
    //     ...prev,
    //     errorEmail: "El mail no es valido",
    //   }));
    //   console.log(errors.errorEmail);
    // }

    // ======= SEND EMAIL & CLEAR FORM ========

    if (errors.errorName === "" && errors.errorEmail === "") {
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
      //   .then(() => {
      //     setUser({
      //       name: "",
      //       email: "",
      //     });
      //   });

      console.log("sending email");

      userName.current.value = "";
      email.current.value = "";
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
            className={errors.errorName && "name_error"}
          />
          <div className="errors">
            {errors.errorName && <span>{errors.errorName}</span>}
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleInput}
            ref={email}
            className={errors.errorEmail && "email_error"}
          />
          <div className="errors">
            {errors.errorEmail && <span>{errors.errorEmail}</span>}
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
