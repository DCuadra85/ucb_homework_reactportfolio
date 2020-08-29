import React from "react";
//import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Project(props) {
  return (
    <div className="card" style={props.style}>
      <img src={props.image} class="card-img-top" alt={props.title} />
      <div className="card-body">
        <p className="card-text">
          {props.children}
        </p>
      </div>
    </div>
  );
}

export default Project;
