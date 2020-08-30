import React, { Component } from "react";
import Header from "../components/Header";
import Project from "../components/Project";
import Container from "../components/Container"

class Portfolio extends Component {
  state = {};

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

        </Container>

        <Project
          title={"Kitten Projects"}
          image={
            "https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg"
          }
        >
          This is my first project
        </Project>
      </div>
    );
  }
}

export default Portfolio;
