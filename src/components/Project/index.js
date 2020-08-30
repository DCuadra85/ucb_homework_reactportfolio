import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div className="project-card">
      <a href={props.link}>
        <div className="card">
          <img src={props.image} style={{width:"198px", height:"200px"}}className="card-img-top proj-icons" alt={props.title} target="_blank" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Project;
