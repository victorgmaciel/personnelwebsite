// src/pages/CurrentProjects.jsx
import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ProjectCard({ item }) {
  const { title, image, description, tech, links = {} } = item || {};
  return (
    <Card className="text-center shadow-sm h-100" border="light">
      {image && <Card.Img variant="top" src={image} alt={title || "project"} />}
      <Card.Body className="d-flex flex-column">
        {title && <Card.Title className="fw-bold">{title}</Card.Title>}
        {description && <Card.Text className="mb-2">{description}</Card.Text>}
        {tech && (
          <Card.Text className="text-muted">
            <b>utilized:</b> {tech}
          </Card.Text>
        )}
        <div className="mt-auto d-flex justify-content-center gap-3">
          {links.github && (
            <Card.Link href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </Card.Link>
          )}
          {links.demo && (
            <Card.Link href={links.demo} target="_blank" rel="noreferrer">
              Demo
            </Card.Link>
          )}
          {links.video && (
            <Card.Link href={links.video} target="_blank" rel="noreferrer">
              Video
            </Card.Link>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default function CurrentProjects() {
  const navigate = useNavigate();
  const projects = []; //add here when ready

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container py-4">
        <h1 className="text-center mb-4">Current Projects</h1>

        <div className="row justify-content-center g-3">
          {projects.length === 0 ? (
            <div className="col-12 col-md-8 col-lg-6">
              <Card className="text-center" border="light">
                <Card.Body>
                  <Card.Title className="fw-bold">No projects yet</Card.Title>
                  <Card.Text className="text-muted">
                    Add items to the <code>projects</code> array.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ) : (
            projects.map((p, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ProjectCard item={p} />
              </div>
            ))
          )}
        </div>

        <div className="d-flex justify-content-center mt-4">
          <Button variant="outline-dark" onClick={() => navigate("/")}>
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}
