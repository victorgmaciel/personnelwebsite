import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../film.css";

function Film() {
  let navigate = useNavigate();

  return (
    <div>
      <div>
        <h1 className="header text-center">Film</h1>
        <div className="container row justify-content-center">
          <Card
            className="filmText text-center"
            style={{ width: "20rem" }}
            border="light"
          >
            <Card.Body>
              <Card.Title>Recommendations</Card.Title>
              <Card.Text>
                GoodFellas
                <br />
                The Fountain
                <br />
                The Secret Life of Walter Mitty
                <br />
                Interstellar
                <br />
                A Goofy Movie
                <br />
                Dune
                <br />
                The Godfather Part II
                <br />
                Sunshine
                <br />
                Lord of the Rings trilogy
                <br />
                The Matrix
                <br />
                The Host
                <br />
                Spirited Away <br />
                Casablanca
                <br />
                Arrival
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />
      <div className="button-container">
        <Button variant="outline-dark" onClick={() => navigate("/")}>
          Home
        </Button>
      </div>
    </div>
  );
}
export default Film;
