
import Button from "react-bootstrap/Button";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../button.css";

function ScrollingHorizontally() {
  let navigate = useNavigate();
  return (
    <div className="profile-button-container">
      <Button
        className="btn-primary-spacing"
        variant="outline-dark"
        onClick={() => navigate("/currentProjects")}
      >
        Current Projects
      </Button>
     <OverlayTrigger
  placement="top"
  overlay={
    <Tooltip id="nsfw-tooltip">
      NSFW – 18+ Content
    </Tooltip>
  }
>
  <Button
    className="btn-primary-spacing"
    variant="outline-dark"
    onClick={() => navigate("/comics")}
  >
    Comics
  </Button>
</OverlayTrigger>
      <Button
        className="btn-primary-spacing"
        variant="outline-dark"
        onClick={() => navigate("/projects")}
      >
        Past Projects
      </Button>
      <Button
        className="btn-primary-spacing"
        variant="outline-dark"
        onClick={() => navigate("/film")}
      >
        Victor's Vault
      </Button>
      <Button
        className="btn-primary-spacing"
        variant="outline-dark"
        onClick={() => navigate("about")}
      >
        About
      </Button>
    </div>
  );
}
export default ScrollingHorizontally;
