import { Card } from "react-bootstrap";
import eventhorizon from "../imgs/Capture7.PNG";
import gamefinder from "../imgs/GameFinder.png";
import moon from "../imgs/moon.jpg";
import "../card.css";

function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="container">
        <h1 className="text-center mb-4">Past Projects</h1>
        <div className="row justify-content-center g-3">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card className="text-center h-100" border="light">
              <Card.Img variant="top" src={gamefinder} style={{ height: "150px", objectFit: "cover" }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">Game Finder</Card.Title>
                <Card.Text>
                  React SPA backed by a Firebase real-time database — users
                  search and filter a games catalog by title and genre.
                  Built during my Front-End Development course at UW.
                </Card.Text>
                <Card.Text className="text-muted" style={{ fontSize: "0.82rem" }}>
                  <b>Stack:</b> Firebase, React, JavaScript, HTML, CSS
                </Card.Text>
                <div className="mt-auto">
                  <i className="icon-cog fab fa-github fa-lg me-1"></i>
                  <Card.Link href="https://github.com/info340-wi21/project-2-ria-antony">
                    View on GitHub
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card className="text-center h-100" border="light">
              <Card.Img variant="top" src={moon} style={{ height: "150px", objectFit: "cover" }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">Spaceline SQL Database</Card.Title>
                <Card.Text>
                  Relational database for a fictional interplanetary spaceline,
                  modeling flights, passengers, and routes across the solar
                  system. Demonstrates normalized schema design and complex
                  multi-table queries.
                </Card.Text>
                <Card.Text className="text-muted" style={{ fontSize: "0.82rem" }}>
                  <b>Stack:</b> SQL
                </Card.Text>
                <div className="mt-auto">
                  <i className="icon-cog fab fa-github fa-lg me-1"></i>
                  <Card.Link href="https://github.com/victorgmaciel/spaceline/tree/main">
                    View on GitHub
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card className="text-center h-100" border="light">
              <Card.Img variant="top" src={eventhorizon} style={{ height: "150px", objectFit: "cover" }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">Event Horizon</Card.Title>
                <Card.Text>
                  C# training simulation built collaboratively with the 2021
                  DoD X-Force cohort. Designed as an operational training tool
                  for U.S. Navy personnel — a government/industry project
                  presented publicly.
                </Card.Text>
                <Card.Text className="text-muted" style={{ fontSize: "0.82rem" }}>
                  <b>Stack:</b> C#
                </Card.Text>
                <div className="mt-auto">
                  <Card.Link
                    href="https://www.youtube.com/watch?v=0oWM342IyKg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Demo
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
