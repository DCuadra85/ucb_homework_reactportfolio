import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <img src={props.image} className="icon" alt="imageLoading"/>
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.children}</p>
      </div>
    </div>
  );
}

export default Header;
