import React from "react";
import "./styles.css";

const About = () => {
  return (
    <main className="about__wrapper">
      <div className="about__main">
        <h1 className="about__title">
          I'm guessing you wanted to know more...
        </h1>

        <p className="about__text">
          I've been fascinated by computers from a young age—how they work and
          what we can truly create with them. So, when I had the opportunity to
          study programming and business during my final three years of school,
          I didn’t have to think twice.
        </p>

        <p className="about__text">
          Throughout those three years, I learned a lot about programming,
          starting with pseudocode and small Pascal apps, eventually building a
          fully functional website. I was proud of what I had accomplished, but
          I knew I wanted more.
        </p>

        <p className="about__text">
          When school ended, I felt a bit lost. I knew I didn’t want to go to
          college, but I also wasn’t ready for a programming job yet. That’s
          when I discovered Mindera, a major technology company in Portugal and
          beyond. They offered an internship program where I could explore any
          programming field that interested me.
        </p>

        <p className="about__text">
          The program lasted a year—and it changed my life. I made plenty of
          mistakes, but I also gained invaluable knowledge, both technically and
          personally. It was there that I realized my true passion lies in web
          development and design.
        </p>

        <p className="about__text">
          This is my journey so far. Let’s see what the future holds!
        </p>
      </div>
      <div className="about__section_making_space" />
    </main>
  );
};

export default About;
