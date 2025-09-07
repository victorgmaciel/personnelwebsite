import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import subpic from "../imgs/Capture90.PNG";
import artpic from "../imgs/her.JPG";
import eventhorizon from "../imgs/Capture3.PNG";
import age from "../imgs/age.jpg";
import bowDown from "../imgs/bow_down.png";
import iSchool from "../imgs/yes.png";
import "../card.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100 d-flex align-items-center">
      <div className="container py-4">
        <h1 className="text-center mb-4">About</h1>

        <div className="row justify-content-center g-4">
          {/* 1) Graduate Student */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <Card className="h-100 text-center shadow-sm" border="light">
              <Card.Img variant="top" src={iSchool} alt="Graduate Student" />
              <Card.Body>
                <Card.Title className="fw-bold">Graduate Student 🎓</Card.Title>
                <Card.Text>
                  Pursuing an MSIM with a specialization in AI — building
                  intelligent, human-centered information systems and ML-powered
                  applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* 2) Software Engineer */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <Card className="h-100 text-center shadow-sm" border="light">
              <Card.Img
                variant="top"
                src={eventhorizon}
                alt="Software Engineer"
              />
              <Card.Body>
                <Card.Title className="fw-bold">
                  Software Engineer 💻
                </Card.Title>
                <Card.Text>
                  Full-stack builder with a growth mindset—shipping reliable
                  features, improving systems, and always learning. See my
                  projects page!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* 3) Navy Veteran */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <Card className="h-100 text-center shadow-sm" border="light">
              <Card.Img variant="top" src={subpic} alt="Navy Veteran" />
              <Card.Body>
                <Card.Title className="fw-bold">
                  U.S. Navy Veteran ⚓️
                </Card.Title>
                <Card.Text>
                  Served five years aboard a U.S. submarine as an A-Ganger. Ask
                  me to tell you a sea story!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* 4) Graduate of UW */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <Card className="h-100 text-center shadow-sm" border="light">
              <Card.Img variant="top" src={bowDown} alt="Software Engineer" />
              <Card.Body>
                <Card.Title className="fw-bold">Graduate of UW</Card.Title>
                <Card.Text>
                  Proud Husky alum—grateful for the community, rigor, and
                  projects that shaped my path in tech and beyond.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* 5) Artist */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <Card className="h-100 text-center shadow-sm" border="light">
              <Card.Img variant="top" src={artpic} alt="Artist" />
              <Card.Body>
                <Card.Title className="fw-bold">Artist ✒️</Card.Title>
                <Card.Text>
                  I love to draw. Check out my art page on Instagram.
                </Card.Text>
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

          {/* 6) Gamer */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <Card className="h-100 text-center shadow-sm" border="light">
              <Card.Img variant="top" src={age} alt="Gamer" />
              <Card.Body>
                <Card.Title className="fw-bold">Gamer 🎮</Card.Title>
                <Card.Text>
                  Real-time strategy fan—prep and persistence pay off. “Suffer
                  now, live the rest of your life as a champion.”
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
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
export default About;
