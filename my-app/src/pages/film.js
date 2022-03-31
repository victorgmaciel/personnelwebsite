import React from 'react';
import { Card } from 'react-bootstrap';
import '../film.css'

function film() {
    return (
        <div>
            <h1 className='header text-center'>Film</h1>
            <div className='container row justify-content-center'>
                <Card className='filmText text-center' style={{ width: '20rem' }} border='light'>
                    <Card.Body>
                        <Card.Title>Recommendations</Card.Title>
                        <Card.Text>
                            GoodFellas<br />
                            The Fountain<br />
                            The Secret Life of Walter Mitty<br />
                            Interstellar<br />
                            A Goofy Movie<br />
                            Dune<br />
                            The Godfather Part II<br />
                            Sunshine<br />
                            Lord of the Rings trilogy<br />
                            The Matrix<br />
                            The Host<br />
                            Spirited Away <br />
                            Casablanca<br />
                            Arrival<br />
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
export default film