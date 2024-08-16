import React from 'react';
import { Header } from '../components/Header';
import pic from '../images/cordero.jpeg'
import { Direction } from '../components/Direction';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

function Contact() {
    return (
        <>
            <Header tittle='contact' image={pic} />
            <ContactInfo />
            <ContactForm />
            <Direction />
        </>
    );
}

export default Contact;