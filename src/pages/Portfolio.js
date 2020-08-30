import React, { Component } from "react";
import Header from "../components/Header";
import Project from "../components/Project";
import Container from "../components/Container"
import projects from "../projects.json"


class Portfolio extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div>
        <Header
          title={"Projects"}
          image={
            "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png"
          }
        >
          Check out my porfolio.
        </Header>

        <Container>
        {this.state.projects.map(project => (
          <Project
            id={project.id}
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
        </Container>
      </div>
    );
  }
}

export default Portfolio;
