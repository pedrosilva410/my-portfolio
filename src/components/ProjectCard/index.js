import React from "react";
import "./styles.css";

const ProjectCard = (props) => {
  return (
    <div className="projects__project">
      <a
        href={props.link}
        rel="noopener noreferrer"
        target="_blank">

        <img src={props.img} alt={props.title} className="projects__project__img" />

        </a>

        <a
        href={props.link}
        rel="noopener noreferrer"
        target="_blank"
        className="projects__project__title">
            {props.title}
        </a>
    </div>
  );
};

export default ProjectCard;