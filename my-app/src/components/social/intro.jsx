import Profile from "../../imgs/victor_maciel_profess.jpg";
import "../../intro.css";
import Pdf from "../documents/victor_maciel_resume_2026.pdf";

export default function ProfilePage() {
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
          <a href="https://www.linkedin.com/in/victor-maciel008/" aria-label="LinkedIn">
            <i className="icon-cog fab fa-linkedin fa-lg"></i>
          </a>
          <a href="mailto:victorgmaciel@protonmail.com" aria-label="Email">
            <i className="icon-cog fa-solid fa-envelope"></i>
          </a>
          <a href={Pdf} target="_blank" rel="noreferrer" aria-label="Resume PDF">
            <i className="icon-cog fa-solid fa-file"></i>
          </a>
        </div>
      </header>

      <h1 className="font-cursive main-heading big">
        Hello, I'm Victor Maciel
      </h1>

      <div className="profile-badges">
        <span className="profile-badge">🎓 MSIM · AI Specialization</span>
        <span className="profile-badge">💻 Full-Stack Engineer</span>
        <span className="profile-badge">⚓ Navy Veteran</span>
        <span className="profile-badge">✒️ Artist</span>
        <span className="profile-badge">🐾 UW Alum</span>
      </div>

      <p className="small text-muted mt-2">Based in Seattle, WA ⛰️🌲</p>

      <div className="cta-row">
        <a href="mailto:victorgmaciel@protonmail.com" className="cta-btn">
          Get in Touch
        </a>
        <a href={Pdf} target="_blank" rel="noreferrer" className="cta-btn cta-btn--outline">
          Download Resume
        </a>
      </div>

      {/* Tech Stack */}
      <div className="row justify-content-center g-3 mt-3">
        <div className="col-12 col-lg-10">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">🛠️ Tech Stack</h5>
              <div className="tech-icons d-flex flex-wrap justify-content-center gap-3">
                {[
                  { cls: "devicon-javascript-plain colored", label: "JavaScript" },
                  { cls: "devicon-react-original colored", label: "React" },
                  { cls: "devicon-angularjs-plain colored", label: "Angular" },
                  { cls: "devicon-typescript-plain colored", label: "TypeScript" },
                  { cls: "devicon-python-plain colored", label: "Python" },
                  { cls: "devicon-fastapi-plain colored", label: "FastAPI" },
                  { cls: "devicon-flask-original", label: "Flask" },
                  { cls: "devicon-docker-plain colored", label: "Docker" },
                  { cls: "devicon-kubernetes-plain colored", label: "Kubernetes" },
                  { cls: "devicon-terraform-plain colored", label: "Terraform" },
                  { cls: "devicon-postgresql-plain colored", label: "PostgreSQL" },
                  { cls: "devicon-elasticsearch-plain colored", label: "Elasticsearch" },
                  { cls: "devicon-googlecloud-plain colored", label: "GCP" },
                  { cls: "devicon-azure-plain colored", label: "Azure" },
                  { cls: "devicon-git-plain colored", label: "Git" },
                ].map(({ cls, label }) => (
                  <div key={label} className="tech-icon-item">
                    <i className={cls} />
                    <small>{label}</small>
                  </div>
                ))}
              </div>

              <hr className="my-3" style={{ opacity: 0.1 }} />
              <p className="text-muted mb-2" style={{ fontSize: "0.75rem", letterSpacing: "0.08em" }}>
                🤖 AI &amp; ML
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {["OpenAI API", "Claude API", "Claude Code", "RAG / pgvector", "LLM Development", "Supabase"].map((tool) => (
                  <span key={tool} className="ai-tool-badge">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Currently Reading / Playing / Want to See */}
        <div className="container mt-3">
          <div className="row justify-content-center g-3">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-2">📚 Currently Reading</h5>
                  <p>
                    The Long Way to a Small, Angry Planet
                    <br />
                    Carl's Doomsday Scenario
                    <br />
                    Demon of Unrest
                  </p>
                  <small className="text-muted">Sci-Fi, Dungeons!, and some history.</small>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-2">🎮 Currently Playing</h5>
                  <p className="mb-1">Red Dead Redemption</p>
                  <p className="mb-1">Age of Empires 2: DE</p>
                  <small className="text-muted">Roaming the west and RTSing.</small>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-2">🎬 Want to See</h5>
                  <p className="mb-1">
                    The Odyssey
                    <br />
                    The Bride
                    <br />
                    Peaky Blinders: The Immortal Man
                  </p>
                  <small className="text-muted">On my watchlist.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
