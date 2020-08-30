import React, { useState } from "react";
import Header from "../components/Header";
import Container from "../components/Container"

function About() {
  return (
    <div>
      <Header
        title={"Hi, I'm Tanya"}
        image={
          "https://avatars3.githubusercontent.com/u/5468259?s=460&u=7300f3976c4203e8c8b45d21fc40dfa5a1343d1d&v=4"
        }
      >
        Professional Artist / Web Developer
      </Header>
      <Container>

      <p>
        Tanya is a story artist and aspiring web developer based in Northern
        California. She holds a BFA degree in Animation from California College
        of the Arts, and has experience in a variety of settings, from working
        as a story artist at Evil Eye Pictures, to most recently working in
        higher education as the 4D Studio Operations Manager (Animation, Film,
        Game Arts, VR) at her alma mater, California College of the Arts. She
        has worked on several freelance projects, including an original piece
        for episode 5 the YouTube series “My Personal Code,” map levels for the
        indie game "Halus" by Qalang, and an advertisement for the app “Hound”
        by SoundHound, Inc. She is currently enrolled in a UC Berkeley coding
        bootcamp for Web Development.
        <br />
        <br />
        Tanya loves to tell unique stories with an unexpected twist, and
        delights in making people laugh. Creating characters that are honest and
        sincere, and telling stories that resonate with people, is what drives
        her. Tanya is passionate about art, education, technology, and
        innovation.
        <br />
        <br />
        When she’s not animating, you can often find Tanya practicing martial
        arts, playing the piano, or teaching herself to play the guitar. Tanya
        also enjoys traveling, cooking (more like experimenting!) and video
        games.
        <br />
        <br />
        You can download Tanya's resume here:{" "}
        <a
          href="assets/images/resume2019.pdf"
          download="Poovaiah_resume"
          target="_blank"
        >
          Resume PDF
        </a>
      </p>
      </Container>
    </div>
  );
}

export default About;
