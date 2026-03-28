import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../film.css";

function Film() {
  const navigate = useNavigate();

  return (
    <div className="vault-wrapper">
      <div>
        <h1 className="header text-center">Victor's Vault</h1>
        <div className="container">
          <div className="row justify-content-center g-3">
            {/* Film Card */}
            <div className="col-12 col-sm-6 col-lg-4">
              <Card className="filmText text-center h-100" border="light">
                <Card.Body>
                  <Card.Title className="fw-bold">Favorite Films</Card.Title>
                  <Card.Text>
                    GoodFellas
                    <br />
                    The Fountain
                    <br />
                    The Secret Life Of Walter Mitty
                    <br />
                    Interstellar
                    <br />
                    A Goofy Movie
                    <br />
                    Dune Part I & II
                    <br />
                    The Dark Knight
                    <br />
                    The Godfather Part II
                    <br />
                    Eternal Sunshine Of The Spotless Mind
                    <br />
                    Everything Everywhere All At Once
                    <br />
                    The Worst Person In The World
                    <br />
                    Sunshine
                    <br />
                    Lord Of The Rings trilogy
                    <br />
                    The Matrix
                    <br />
                    The Host
                    <br />
                    The Holdovers
                    <br />
                    Spirited Away
                    <br />
                    Casablanca
                    <br />
                    Arrival
                    <br />
                    Sinners
                    <br />
                    Frankenstein
                    <br />
                    Train Dreams
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            {/* Video Games Card */}
            <div className="col-12 col-sm-6 col-lg-4">
              <Card className="filmText text-center h-100" border="light">
                <Card.Body>
                  <Card.Title className="fw-bold">Favorite Video Games</Card.Title>
                  <Card.Text>
                    Sonic 2
                    <br />
                    Dynamite Headdy
                    <br />
                    Red Dead Redemption 2
                    <br />
                    Fallout: New Vegas
                    <br />
                    Fallout 4
                    <br />
                    Grand Theft Auto Vice City
                    <br />
                    Shovel Knight
                    <br />
                    Age of Empires II: DE
                    <br />
                    Mario Kart Double Dash & Wii
                    <br />
                    Helldivers 2
                    <br />
                    Super Mario World
                    <br />
                    Super Smash Bros Brawl & Ultimate
                    <br />
                    Cuphead
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            {/* Books Card */}
            <div className="col-12 col-sm-6 col-lg-4">
              <Card className="filmText text-center h-100" border="light">
                <Card.Body>
                  <Card.Title className="fw-bold">Favorite Books</Card.Title>
                  <Card.Text>
                    People's History of the United States
                    <br />
                    Dune
                    <br />
                    The Running Man
                    <br />
                    Sapiens
                    <br />
                    Harry Potter and the Goblet of Fire
                    <br />
                    The Killer Angels
                    <br />
                    The Stormlight Archive
                    <br />
                    Killers of the Flower Moon
                    <br />
                    Genghis Khan and the Making of the Modern World
                    <br />
                    The Wager
                    <br />
                    The Underground Railroad
                    <br />
                    The Master and Margarita
                    <br />
                    The Nix
                    <br />
                    The Road
                    <br />
                    The Stand
                    <br />
                    The Dark Tower (Series)
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Film;
