import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import eventhorizon from "../imgs/Capture7.PNG";
import gamefinder from "../imgs/GameFinder.png";
import moon from "../imgs/moon.jpg";
import "../card.css";

function Projects() {
  let navigate = useNavigate();
  return (
    <div className="projects-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <Card
              className="text-center"
              style={{ width: "20rem" }}
              border="light"
            >
              <Card.Img variant="top" src={gamefinder} />
              <Card.Body>
                <Card.Title>Game Finder</Card.Title>
                <Card.Text>
                  This was a project for my Front-End development course. An
                  interactive React app where users could search database for
                  games.
                  <br />
                  <br />
                  <b>utilized: Firebase, JavaScript, React, HTML, and CSS.</b>
                  <br />
                  <i className="icon-cog fab fa-github fa-lg"></i>
                  <Card.Link href="https://github.com/info340-wi21/project-2-ria-antony">
                    Game Finder
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-auto">
            <Card
              className="text-center"
              style={{ width: "20rem" }}
              border="light"
            >
              <Card.Img variant="top" src={moon} />
              <Card.Body>
                <Card.Title>Spaceline SQL Database</Card.Title>
                This database is for a spaceline company. It is designed to keep
                track of flights throughout our solar system.
                <br />
                <b>utilized: SQL</b>
                <br />
                <i className="icon-cog fab fa-github fa-lg"></i>
                <Card.Link href="https://github.com/victorgmaciel/spaceline/tree/main">
                  Spaceline GitHub
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-auto">
            <Card
              className="text-center"
              style={{ width: "20rem" }}
              border="light"
            >
              <Card.Img variant="top" src={eventhorizon} />
              <Card.Body>
                <Card.Title>Event Horizon</Card.Title>
                <Card.Text>
                  This was a collaborative effort by the 2021 X-Force cohort and
                  DoD employees. It is a training simulation for the US Navy.
                  <br />
                  <b>utilized: C#</b>
                  <br />
                  Check out link below:{" "}
                  <a
                    href="https://www.youtube.com/watch?v=0oWM342IyKg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.youtube.com/watch?v=0oWM342IyKg
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br />
        <div className="project-button-container">
          <Button variant="outline-dark" onClick={() => navigate("/")}>
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Projects;
