import React from 'react';
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import '../button.css';

function ScrollingHorizontally() {
    let navigate = useNavigate();
    return (
        <div className="button-container">
            <Button className="btn-primary-spacing" variant="outline-dark" onClick={() => navigate('/projects')}>Projects</Button>
            <Button className="btn-primary-spacing" variant="outline-dark" onClick={() => navigate('/film')}>Film</Button>
            <Button className="btn-primary-spacing" variant="outline-dark" onClick={() => navigate('about')}>About</Button>
        </div>
    )
}
export default ScrollingHorizontally;