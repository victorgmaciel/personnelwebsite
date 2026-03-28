import Button from "react-bootstrap/Button";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "../button.css";

function ScrollingHorizontally() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = (path) => location.pathname === path ? "dark" : "outline-dark";

  return (
    <nav className="profile-button-container">
      <Button
        className="btn-primary-spacing"
        variant={active("/")}
        onClick={() => navigate("/")}
      >
        Home
      </Button>
      <Button
        className="btn-primary-spacing"
        variant={active("/experience")}
        onClick={() => navigate("/experience")}
      >
        Experience
      </Button>
      <Button
        className="btn-primary-spacing"
        variant={active("/currentProjects")}
        onClick={() => navigate("/currentProjects")}
      >
        Current Projects
      </Button>
      <Button
        className="btn-primary-spacing"
        variant={active("/projects")}
        onClick={() => navigate("/projects")}
      >
        Past Projects
      </Button>
      <Button
        className="btn-primary-spacing"
        variant={active("/about")}
        onClick={() => navigate("/about")}
      >
        About
      </Button>
      <Button
        className="btn-primary-spacing"
        variant={active("/film")}
        onClick={() => navigate("/film")}
      >
        Victor's Vault
      </Button>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="nsfw-tooltip">NSFW – 18+ Content</Tooltip>}
      >
        <Button
          className="btn-primary-spacing"
          variant={active("/comics")}
          onClick={() => navigate("/comics")}
        >
          Comics
        </Button>
      </OverlayTrigger>
    </nav>
  );
}
export default ScrollingHorizontally;
