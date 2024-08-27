import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import home from '../images/home.jpg'
import logo from '../images/logo.png'


function HeroSection() {
    return (
        <>
            <div className='hero-container'>
                <img className='home-img' src={home} alt='home' />
                <h1>coming soon...</h1>
            </div>
            <div>
                <img className='logo-hero' src={logo} alt='logo' />
            </div>
        </>

    );
}

export default HeroSection;