import React from "react";
import Button from "react-bootstrap/Button";
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
