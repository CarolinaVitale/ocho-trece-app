import React from 'react';
import { Header } from '../components/Header';
import pic from '../images/carousel2.JPG';
import AboutForm from '../components/About';

function About() {
    return (
        <>
            <Header tittle='about' image={pic} />
            <div>
                <AboutForm />
            </div>
        </>
    );
}

export default About;