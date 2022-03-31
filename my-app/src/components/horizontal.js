import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HorizontalScroll from 'react-scroll-horizontal';
import '../../src/scroll.css';

export default class ScrollingHorizontally extends Component {
    render() {
        const child = { width: '25em', height: '50em' }
        const parent = { width: '50%', height: '1.5em' }
        return (
            <div className='center scrollbar' style={parent} >
                <HorizontalScroll className='scroll-horizontal'>
                    <div onClick={event => window.location.href = '/projects'} style={child} >Projects
                    </div>
                    <div onClick={event => window.location.href = '/film'} style={child} >Film</div>
                    <div onClick={event => window.location.href = '/about'} style={child} >About</div>
                </HorizontalScroll>
            </div>
        )
    }
}