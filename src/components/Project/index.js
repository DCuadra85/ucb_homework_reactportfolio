import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";

function Project(props) {
  return (
    <div className="card">
      <img src={props.image} class="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
      </div>
    </div>
  );
}

export default Project;
