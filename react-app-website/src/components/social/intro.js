import React from "react";
import Profile from "../../imgs/victor_maciel_profess.jpg";
import "../../intro.css";
import Pdf from "../documents/september_victor_maciel_resume.pdf";

function ProfilePage() {
  return (
    <div className="Profile">
      <header className="Profile-header">
        <div className="lightning-frame">
          <img src={Profile} className="Profile-logo" alt="profile" />
        </div>
        <br />
        <div className="Social-icons">
          <a href="https://github.com/victorgmaciel" aria-label="GitHub">
            <i className="icon-cog fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/victor-maciel008/"
            aria-label="LinkedIn"
          >
            <i className="icon-cog fab fa-linkedin fa-lg"></i>
          </a>
          <a href="mailto:victorgmaciel@protonmail.com" aria-label="Email">
            <i className="icon-cog fa-solid fa-envelope"></i>
          </a>
          <a
            href={Pdf}
            target="_blank"
            rel="noreferrer"
            aria-label="Resume PDF"
          >
            <i className="icon-cog fa-solid fa-file"></i>
          </a>
        </div>
      </header>

      <h1 className="font-cursive main-heading big">
        Hello, I'm Victor Maciel
      </h1>
      <p className="description">
        🎓 Graduate Student | 💻 Full-Stack Software Engineer | ✒️ Artist | UW
        Alum | ⚓️ U.S. Navy Veteran
      </p>
      <p className="small text-muted">Based in Seattle, WA ⛰️🌲</p>

      {/* Cards row */}
      <div className="container mt-3">
        <div className="row justify-content-center g-3">
          {/* Currently Reading */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-2">
                  📚 Currently Reading
                </h5>
                <div className="marquee-container marquee--gold">
                  <div className="marquee" aria-label="Currently Reading">
                    <div className="marquee__track">
                      <span>Project Hail Mary — Andy Weir</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tech Stack */}
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">🛠️ Tech Stack</h5>

                <div className="tech-icons d-flex flex-wrap justify-content-center align-items-center gap-3">
                  <i className="devicon-react-original colored" title="React" />
                  <i
                    className="devicon-nextjs-original-wordmark"
                    title="Next.js"
                  />
                  <i className="devicon-angular-plain" title="Angular" />
                  <i
                    className="devicon-typescript-plain colored"
                    title="TypeScript"
                  />
                  <i className="devicon-python-plain colored" title="Python" />
                  <i
                    className="devicon-fastapi-plain colored"
                    title="FastAPI"
                  />
                  <i className="devicon-docker-plain colored" title="Docker" />
                  <i
                    className="devicon-postgresql-plain colored"
                    title="PostgreSQL"
                  />
                  <i
                    className="devicon-elasticsearch-plain colored"
                    title="Elasticsearch"
                  />
                  <i
                    className="devicon-googlecloud-plain colored"
                    title="GCP"
                  />
                  <i className="devicon-git-plain colored" title="Git" />
                </div>

                <div className="mt-3 d-flex flex-wrap gap-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
