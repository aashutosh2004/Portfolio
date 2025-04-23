import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/todo.png";
//import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/wallpaper.jpg";
import chatify from "../../Assets/Projects/glio.jpg";
import emotion from "../../Assets/Projects/trs.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/mern.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Glioma Grading Clinical and Mutation Features"
              description="Glioma grading involves classifying brain tumors based on their aggressiveness. This grading helps guide treatment decisions and predict prognosis. Mutation features, such as changes in genes like IDH1, TP53, and EGFR, play a critical role in tumor behavior and treatment response."
              ghLink="https://github.com/aashutosh2004/Glioma-Grading-Clinical-and-mutation"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Kotlin Based Wallpaper App"
              description="Developed a Kotlin-based Wallpaper app, providing users with a vast collection of high-qualitywallpaper through a sleek and intuitive interface. Implemented features such as wallpaper browsing, category filtering, favorites management, andone-tap wallpaper setting."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Train Reservation System (TRS)"
              description="Designed and developed a user-friendly platform designed to streamline the process of booking and managing train tickets. It allows passengers to search for available trains, check schedules, reserve seats, and make payments online."
              ghLink="https://github.com/aashutosh2004/RAILWAY-RESERVATION-TICKET"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ToDo App"
              description="Designed and developed a user-friendly cross-platform Todo app using React, aimed atstreamlining task management. Built responsive and intuitive interfaces optimized for both web and mobile platforms, followingmodern UI/UX principles."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
