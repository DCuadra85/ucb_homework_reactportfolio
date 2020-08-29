import React, { Component } from "react";
//import API from "../utils/API";
//import Card from "../components/Card";
import Project from "../components/Project";

class Portfolio extends Component {
  state = {
    image: "",
    title: "",
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Portfolio</h1>
        
        <Project image={this.state.image} title={this.state.title}>
          This is my first project
        </Project>
        <h1 className="text-center">Made friends with many pups so far!</h1>
      </div>
    );
  }
}

export default Portfolio;
