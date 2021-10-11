import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <main className="home__wrapper">
      <div className="home__main">
        <h2 className="home__titleName">Hi, I'm Pedro.</h2>
        <h1 className="home__title">Front-End Developer. Designer.</h1>
        <p className="home__text">
         20, self-taught frontend developer from Portugal, living in Germany.
        </p>
        <p className="home__text">
          Part of{" "}
          <a
            className="home__link"
            href="https://school.mindera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mindera School
          </a>{" "}
          program where I learnt most of my developer skills and a lot of soft skills as well.
        </p>
        <p className="home__text">Photography and gaming lover.</p>
        <Link to="/about" className="home__link_to_about">
          Know more &gt;
        </Link>
      </div>
      <div className="home__section_making_space" />
    </main>
  );
};

export default Home;
