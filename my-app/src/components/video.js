import React from 'react';
import '../card.css';

export default function Video() {
    return (
        <div align='center'>
            <iframe
                src='https://www.youtube.com/embed/0oWM342IyKg'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='I Stalker video'
            />
        </div>
    )
}