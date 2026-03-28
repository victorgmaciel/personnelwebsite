import React from "react";
import "../experience.css";

const jobs = [
  {
    title: "Software Engineer (Contract)",
    company: "StrainPilot",
    location: "Seattle, WA",
    dates: "Aug 2025 – Dec 2025",
    bullets: [
      "Integrated OpenAI API to enable an AI agent that queries and interacts with a proprietary knowledge base, directly improving contributor data quality workflows.",
      "Developed 6+ React front-end features for an AI-powered plant wellness platform.",
      "Designed and optimized Supabase database interactions to support real-time AI responses with improved accuracy and scalability.",
      "Collaborated with cross-functional teams to refine model outputs, reducing latency and improving insight accuracy by 15%.",
      "Contributed to early-stage RAG pipeline development using Supabase pgvector, implementing document chunking and semantic retrieval to ground AI responses in a proprietary knowledge base.",
    ],
    tags: ["React", "OpenAI API", "Supabase", "RAG", "Python"],
  },
  {
    title: "Software Engineer",
    company: "Zonar Systems",
    location: "Seattle, WA",
    dates: "Jan 2023 – Feb 2025",
    bullets: [
      "Developed and maintained 5+ REST APIs with FastAPI and Python for telematics integrations.",
      "Designed and deployed scalable infrastructure with Kubernetes, Terraform, and GitLab CI/CD, improving reliability and supporting growing workloads.",
      "Implemented Datadog monitoring services, improving observability and reducing service downtime by 20%.",
      "Built 10+ reusable UI components in React and Angular across 5 production apps, cutting load times by 30% and boosting user engagement by 20%.",
      "Built a FastAPI service from the ground up to handle CARB emissions compliance logic, delivering the solution across the fleet under an accelerated timeline.",
      "Managed Elasticsearch infrastructure, including lifecycle configuration to optimize storage costs and query performance.",
    ],
    tags: ["FastAPI", "Python", "React", "Angular", "Kubernetes", "Terraform", "Elasticsearch", "Datadog"],
  },
  {
    title: "Junior Software Engineer",
    company: "Sirrus7",
    location: "Seattle, WA",
    dates: "June 2022 – Dec 2022",
    bullets: [
      "Built high-performance backend service in Flask handling 10K+ daily requests with low latency.",
      "Implemented API-driven features to support geospatial data workflows in a web-based Angular application.",
      "Contributed to infrastructure as code using Terraform, Docker, and deployed services to GCP.",
    ],
    tags: ["Flask", "Angular", "Terraform", "Docker", "GCP"],
  },
  {
    title: "Machinist Mate",
    company: "U.S. Navy",
    location: "Bangor, WA",
    dates: "Dec 2013 – Dec 2018",
    bullets: [
      "Managed Auxiliary Division operations and maintenance systems to ensure equipment readiness for deployments.",
      "Discovered a bug in SKED (maintenance scheduling software), sparking a self-driven transition into software engineering.",
    ],
    tags: ["Leadership", "Operations", "Maintenance Systems"],
  },
];

export default function Experience() {
  return (
    <div className="experience-wrapper">
      <div className="container py-5">
        <h1 className="text-center mb-2">Experience</h1>
        <p className="text-center text-muted mb-5" style={{ fontSize: "0.9rem" }}>
          3+ years of full-stack and infrastructure experience
        </p>

        <div className="experience-timeline">
          {jobs.map((job, i) => (
            <div key={i} className="experience-card">
              <div className="experience-card-header">
                <div>
                  <h5 className="experience-title">{job.title}</h5>
                  <span className="experience-company">{job.company}</span>
                  <span className="experience-location"> · {job.location}</span>
                </div>
                <span className="experience-dates">{job.dates}</span>
              </div>

              <ul className="experience-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>

              <div className="experience-tags">
                {job.tags.map((tag) => (
                  <span key={tag} className="experience-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
