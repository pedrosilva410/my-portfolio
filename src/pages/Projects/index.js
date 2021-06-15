import React from "react";
import "./styles.css";

import bookswap from "../../assets/projects-thumbnails/bookswap.PNG";
import tictactoe from "../../assets/projects-thumbnails/tictactoe.PNG";
import shouldyoudoit from "../../assets/projects-thumbnails/should-you-do-it.PNG";
import circulorodador from "../../assets/projects-thumbnails/circulo-rodador.PNG";



const Projects = () => {
  return (
    <main className="projects__wrapper">
      <div className="projects__main">

        <div className="projects__all_text">
          <h1 className="projects__title">My projects</h1>
          <p className="projects__text">
          These are some cool projects i did :)
          </p>
        </div>


        {/*todo: make next items inside of the next div a component*/}
        <div className="projects__project_galery">
          <div className="projects__project">
            <a
            href="https://booksswap.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
            >
            <img src={bookswap} alt="bookswap" className="projects__project__img" />
            </a>
            <a
            href="https://booksswap.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
            className="projects__project__title">BookSwap</a>
          </div>

          <div className="projects__project">
            <a
            href="https://t1ct4ct0e.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
            >
            <img src={tictactoe} alt="tictactoe" className="projects__project__img" />
            </a>
            <a
            href="https://t1ct4ct0e.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
            className="projects__project__title">TicTacToe</a>
          </div>

          <div className="projects__project">
            <a
            href="https://shouldyoudoit.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
            >
            <img src={shouldyoudoit} alt="should you do it" className="projects__project__img" />
            </a>
            <a
            href="https://shouldyoudoit.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
            className="projects__project__title">Should You Do It</a>
          </div>

          <div className="projects__project">
            <a
            href="https://circulorodador.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
            >
            <img src={circulorodador} alt="fun circle" className="projects__project__img" />
            </a>
            <a
            href="https://circulorodador.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
            className="projects__project__title">Fun Circle</a>
          </div>
        </div>
      </div>
      <div className="projects__section_making_space"/>
    </main>
  );
};

export default Projects;
