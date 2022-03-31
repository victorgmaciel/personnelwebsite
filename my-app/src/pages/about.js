import React from 'react';
import { Card } from 'react-bootstrap';
import subpic from '../imgs/Capture90.PNG';
import artpic from '../imgs/her.JPG';
import eventhorizon from '../imgs/Capture3.PNG';
import age from '../imgs/age.jpg';
import '../card.css';

function projects() {
    return (
        <div className='container row justify-content-center'>
            <Card className='card text-center' style={{ width: '20rem' }} border='light'>
                <Card.Img variant="top" src={subpic} />
                <Card.Body>
                    <Card.Title>Submariner</Card.Title>
                    <Card.Text>
                        I served onboard a U.S. Submarine for five years. I was a mechanic. I worked on hydraulic plants,oxygen systems etc. Ask me to tell you a sea story!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='text-center' style={{ width: '20rem' }} border='light'>
                <Card.Img variant="top" src={artpic} />
                <Card.Body>
                    <Card.Title>Artist</Card.Title>
                    I love to draw. I Check out my art page on Instagram.
                    <br />
                    <Card.Link href="https://www.instagram.com/fluffbros/?hl=en">Fluff Bros</Card.Link>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='text-center' style={{ width: '20rem' }} border='light'>
                <Card.Img variant="top" src={eventhorizon} />
                <Card.Body>
                    <Card.Title>Developer</Card.Title>
                    <Card.Text>
                        As an aspiring Full-Stack Developer, I know how crucial it is to have and maintain a growth mentality. I understand that knowledge and skill can only come through hard work and practice.I'm always working on something new, check my projects page. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='text-center' style={{ width: '20rem' }} border='light'>
                <Card.Img variant="top" src={age} />
                <Card.Body>
                    <Card.Title>Gamer</Card.Title>
                    <Card.Text>
                        I enjoy real time strategy games. I love how hard work and prepartion can serve you in the long run. To quote Muhammad Ali, "I hated every minute of training, but I said, Don't quit. Suffer now and live the rest of your life as a champion. "
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
export default projects