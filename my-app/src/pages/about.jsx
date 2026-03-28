import { Card } from "react-bootstrap";
import subpic from "../imgs/Capture90.PNG";
import artpic from "../imgs/her.JPG";
import eventhorizon from "../imgs/Capture3.PNG";
import age from "../imgs/age.jpg";
import bowDown from "../imgs/bow_down.png";
import iSchool from "../imgs/yes.png";
import "../card.css";
import "../about.css";

function About() {
  const timeline = [
    {
      icon: "⚓",
      title: "U.S. Navy — Machinist Mate",
      sub: "Bangor, WA · Dec 2013 – Dec 2018",
      active: false,
    },
    {
      icon: "🎓",
      title: "University of Washington",
      sub: "B.S. Informatics · June 2022",
      active: false,
    },
    {
      icon: "💻",
      title: "Sirrus7 — Junior Software Engineer",
      sub: "Seattle, WA · June 2022 – Dec 2022",
      active: false,
    },
    {
      icon: "💻",
      title: "Zonar Systems — Software Engineer",
      sub: "Seattle, WA · Jan 2023 – Feb 2025",
      active: false,
    },
    {
      icon: "💻",
      title: "StrainPilot — Software Engineer (Contract)",
      sub: "Seattle, WA · Aug 2025 – Dec 2025",
      active: false,
    },
    {
      icon: "🎓",
      title: "University of Washington — MSIM",
      sub: "AI Specialization · Expected June 2027",
      active: true,
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">About</h1>

      {/* Career Timeline */}
      <div className="career-timeline mx-auto mb-5">
        {timeline.map((item, i) => (
          <div key={i} className={`timeline-item${item.active ? " timeline-item--active" : ""}`}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-icon">{item.icon}</span>
              <div>
                <span className="timeline-title">{item.title}</span>
                <span className="timeline-sub">
                  {item.sub}
                  {item.active && (
                    <span className="badge bg-dark ms-2" style={{ fontSize: "0.65rem" }}>
                      Current
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="row justify-content-center g-4">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card className="h-100 text-center shadow-sm" border="light">
            <Card.Img style={{ height: "140px", objectFit: "cover" }} variant="top" src={iSchool} alt="Graduate Student" />
            <Card.Body>
              <Card.Title className="fw-bold">Graduate Student 🎓</Card.Title>
              <Card.Text>
                Pursuing an MSIM with a specialization in AI — building
                intelligent, human-centered information systems and ML-powered
                applications. Expected June 2027.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card className="h-100 text-center shadow-sm" border="light">
            <Card.Img style={{ height: "140px", objectFit: "cover" }} variant="top" src={eventhorizon} alt="Software Engineer" />
            <Card.Body>
              <Card.Title className="fw-bold">Software Engineer 💻</Card.Title>
              <Card.Text>
                3+ years shipping production features across React, Python, and
                cloud-native environments at Zonar Systems, StrainPilot, and
                Sirrus7.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card className="h-100 text-center shadow-sm" border="light">
            <Card.Img style={{ height: "140px", objectFit: "cover", objectPosition: "top" }} variant="top" src={subpic} alt="Navy Veteran" />
            <Card.Body>
              <Card.Title className="fw-bold">U.S. Navy Veteran ⚓️</Card.Title>
              <Card.Text>
                Served five years aboard a U.S. submarine as an A-Ganger.
                Discovered a bug in Navy scheduling software that sparked my
                path into engineering.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card className="h-100 text-center shadow-sm" border="light">
            <Card.Img style={{ height: "140px", objectFit: "cover" }} variant="top" src={bowDown} alt="UW Graduate" />
            <Card.Body>
              <Card.Title className="fw-bold">Graduate of UW</Card.Title>
              <Card.Text>
                Proud Husky alum — B.S. Informatics (2022), now back for an
                MSIM with an AI specialization.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card className="h-100 text-center shadow-sm" border="light">
            <Card.Img style={{ height: "140px", objectFit: "cover" }} variant="top" src={artpic} alt="Artist" />
            <Card.Body>
              <Card.Title className="fw-bold">Artist ✒️</Card.Title>
              <Card.Text>I love to draw. Check out my art on Instagram.</Card.Text>
              <Card.Link
                href="https://www.instagram.com/fluffbros/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Fluff Bros
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card className="h-100 text-center shadow-sm" border="light">
            <Card.Img style={{ height: "140px", objectFit: "cover" }} variant="top" src={age} alt="Gamer" />
            <Card.Body>
              <Card.Title className="fw-bold">Gamer 🎮</Card.Title>
              <Card.Text>
                Real-time strategy fan — prep and persistence pay off. "Suffer
                now, live the rest of your life as a champion."
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default About;
