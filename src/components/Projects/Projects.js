import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import travel from "../../Assets/Projects/saintmartin.jpg";
import health from "../../Assets/Projects/banner1.jpg";
import car from "../../Assets/Projects/car-house.png";
import clock from "../../Assets/Projects/logo.png";
import learn from "../../Assets/Projects/banner.jpg";

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
              imgPath={car}
              isBlog={false}
              title="Autozon-vehicle-dealers"
              description="Users can buy any car and check their previous order history with status.
                This website has a functional admin panel with restricted access.
                Only admin can access this section where admin can 1. add product, 2. delete
                any existing product, 3. update the state of customers order."
              link="https://github.com/rafirahman123/Autozon-car-selling-website-MERN-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Dream Holidays"
              description="My Dream Holidays website is a tourism website.Which contains varietes tour package and we can book those package and aslo remove them or cancel them by login or registration on the website."
              link="https://github.com/rafirahman123/Tourism-website-MERN-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="Heath-care-diagnostic-center"
              description=" There is a home page,doctors page,blog page,login and registration page • Private or Protected routing page are details and blogs also Dynamic Routing is Details page • There is login and resitration system with google authentication and email/password login"
              link="https://github.com/rafirahman123/Healthcare-website-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learn}
              isBlog={false}
              title="Online Course Center"
              description=" This is a Online based Skill development center • Here anyone can enrole their favourate course with resonable price • In Rafi's Dream Skill everyone can read & learn important topic also."
              link="https://github.com/rafirahman123/Online-course-website-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Ema-john simple"
              description="It's a simple e-commarce website"
              link="https://github.com/rafirahman123/ema-john-simple"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
