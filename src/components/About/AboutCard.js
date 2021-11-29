import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md.Naimur Rahman (Rafi) </span>
            from <span className="purple">Mirpur, Dhaka,Bangladesh.</span>
            <br />
            I’m currently Study on BSc in Computer Science and Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Photography
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Every man dies. Not every man really lives . live the life of your
            DREAMS."{" "}
          </p>
          <footer className="blockquote-footer">Rafi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
