import React from 'react';
import { Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import eventhorizon from '../imgs/Capture7.PNG';
import gamefinder from '../imgs/GameFinder.png';
import moon from '../imgs/moon.jpg';
import Video from '../components/video';
import '../card.css';

function Projects() {
    let navigate = useNavigate();
    return (
        <div>
            <div className='container row justify-content-center'>
                <Card className='card text-center' style={{ width: '20rem' }} border='light'>
                    <Card.Img variant="top" src={gamefinder} />
                    <Card.Body>
                        <Card.Title>Game Finder</Card.Title>
                        <Card.Text>
                            This was a project for my Front-End development course. We used JavaScript,React, HTML, and CSS. Here is the landing page for the app.
                            <br />
                            <i className="icon-cog fab fa-github fa-lg"></i>
                            <Card.Link href="https://github.com/info340-wi21/project-2-ria-antony">Game Finder</Card.Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='text-center' style={{ width: '20rem' }} border='light'>
                    <Card.Img variant="top" src={moon} />
                    <Card.Body>
                        <Card.Title>Spaceline SQL Database</Card.Title>
                        This database is for a spaceline. It is designed to keep track of flights throughout our solar system.
                        <br />
                        <i className="icon-cog fab fa-github fa-lg"></i>
                        <Card.Link href="https://github.com/victorgmaciel/spaceline/tree/main">Spaceline GitHub</Card.Link>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='text-center' style={{ width: '20rem' }} border='light'>
                    <Card.Img variant="top" src={eventhorizon} />
                    <Card.Body>
                        <Card.Title>Event Horizon</Card.Title>
                        <Card.Text>
                            This is an ongoing collaborative effort by the 2021 X-Force cohort and DoD employees. It is a training simulation for the US Navy. Check out the video here
                            <br />
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Video />

            </div>
            <br/>
            <div className='button-container'>
            <Button variant="outline-dark" onClick={() => navigate('/')}>Home</Button>
            </div>
        </div>
    );
}
export default Projects



