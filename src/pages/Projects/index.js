import React from "react";
import "./styles.css";

import bookswap from "./projects-thumbnails/bookswap.svg";
import circulorodador from "./projects-thumbnails/circulo-rodador.svg";
import shouldyoudoit from "./projects-thumbnails/should-you-do-it.svg";
import tictactoe from "./projects-thumbnails/tictactoe.svg";

const Projects = () => {
  return (
    <main className="projects__wrapper">
      <div className="projects__main">

        <div className="projects__all_text">
          <h1 className="projects__title">My projects</h1>
            <p className="projects__text">
            This were some cool proejects i did :)
            </p>
        </div>

        <div className="project__images">

        <a
            href="https://booksswap.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
        >
            <img src={bookswap} alt="bookswap" className="projects__bookswap"/>
        </a>

        <a
            href="https://circulorodador.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
        >
             <img src={circulorodador} alt="circulorodador" className="projects__circulorodador"/>
        </a>

        <a
            href="https://shouldyoudoit.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
        >
            <img src={shouldyoudoit} alt="shouldyoudoit" className="projects__shouldyoudoit"/>
        </a>

        <a
            href="https://t1ct4ct0e.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
        >
            <img src={tictactoe} alt="tictactoe" className="projects__tictactoe"/>
        </a>

        </div>
   
        </div>
      </main>
  );
};

export default Projects;
