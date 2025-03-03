import React from "react";
import "./styles.css";

import twitter from "../../assets/twitter.svg";
import github from "../../assets/github.svg";

const Contact = () => {
  return (
    <main className="contact__wrapper">
      <div className="contact__main">
        <h1>Contact</h1>
        <p className="contact__p">( You can find me here )</p>
        <div className="contact__contacts">
          <a
            href="https://twitter.com/pedrogdsilva410"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="twitter" className="contact__img" />
          </a>

          <a
            href="https://github.com/pedrosilva410"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={github} alt="github" className="contact__img" />
          </a>
        </div>

        <a href="mailto:pgds410@gmail.com" className="contact__email-link">
          Contact me now
        </a>
      </div>
      <div className="contact__section_making_space" />
    </main>
  );
};

export default Contact;
