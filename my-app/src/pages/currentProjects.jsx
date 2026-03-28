// src/pages/CurrentProjects.jsx
import React from "react";
import { Card } from "react-bootstrap";
import GridironGuruImg from "../imgs/Gridiron_guru.png";
import submarineMaintenanceImg from "../imgs/submarine-maintenance.png";

function ProjectCard({ item }) {
  const { title, image, description, tech, links = {}, status } = item || {};
  return (
    <Card className="text-center shadow-sm h-100 position-relative" border="light">
      {status === "live" && (
        <div className="position-absolute top-0 end-0 m-2" style={{ zIndex: 1 }}>
          <span className="badge bg-success" style={{ fontSize: "0.72rem" }}>
            ● Live
          </span>
        </div>
      )}
      {image && <Card.Img variant="top" src={image} alt={title || "project"} style={{ height: "160px", objectFit: "cover" }} />}
      <Card.Body className="d-flex flex-column">
        {title && <Card.Title className="fw-bold">{title}</Card.Title>}
        {description && <Card.Text className="mb-2">{description}</Card.Text>}
        {tech && (
          <Card.Text className="text-muted" style={{ fontSize: "0.82rem" }}>
            <b>Stack:</b> {tech}
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
              Live Demo
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
  const projects = [
    {
      title: "Submarine Maintenance",
      image: submarineMaintenanceImg,
      description:
        "Built from firsthand Navy experience — a React app for tracking submarine maintenance schedules, work periods, and system status. Bridges real operational knowledge with modern web development.",
      tech: "React, JavaScript, HTML, CSS",
      status: "live",
      links: {
        demo: "https://submarine-maintenance.netlify.app/",
      },
    },
    {
      title: "Gridiron Guru – NFL Pick'em App",
      image: GridironGuruImg,
      description:
        "Full-stack NFL pick'em platform with real-time Firestore sync. Users make weekly picks, track live scores, view leaderboards, and compete with friends — backed by a FastAPI Python service for game data ingestion.",
      tech: "React, Firebase Auth, Firestore, FastAPI, Python",
      status: "live",
      links: {
        github: "https://github.com/victorgmaciel/Gridiron-Guru",
        demo: "https://gridiron-guru-d1963.web.app/",
      },
    },
  ];

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container py-4">
        <h1 className="text-center mb-4">Current Projects</h1>
        <div className="row justify-content-center g-3">
          {projects.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProjectCard item={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
