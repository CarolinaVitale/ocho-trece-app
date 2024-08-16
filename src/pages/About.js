import React from 'react';
import { Header } from '../components/Header';
import pic from '../images/panceta.jpg'
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