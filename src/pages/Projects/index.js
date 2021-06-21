import React from "react";
import "./styles.css";

import bookswap from "../../assets/projects-thumbnails/bookswap.PNG";
import tictactoe from "../../assets/projects-thumbnails/tictactoe.PNG";
import shouldyoudoit from "../../assets/projects-thumbnails/should-you-do-it.PNG";
import circulorodador from "../../assets/projects-thumbnails/circulo-rodador.PNG";

import ProjectCard from "../../components/ProjectCard";



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

        <div className="projects__project_galery">
          <ProjectCard link="https://booksswap.netlify.app" title="bookswap" img={bookswap}/>

          <ProjectCard link="https://t1ct4ct0e.netlify.app" title="TicTacToe" img={tictactoe}/>

          <ProjectCard link="https://shouldyoudoit.netlify.appp" title="Should You Do It" img={shouldyoudoit}/>

          <ProjectCard link="https://circulorodador.netlify.app" title="Fun Circle" img={circulorodador}/>
        </div>
        
      </div>
      <div className="projects__section_making_space"/>
    </main>
  );
};

export default Projects;
