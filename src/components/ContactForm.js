import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import '../components/ContactForm.css';

export const ContactUs = () => {
    const [namePlaceholder, setNamePlaceholder] = useState('name');
    const [emailPlaceholder, setEmailPlaceholder] = useState('email');
    const [messagePlaceholder, setMessagePlaceholder] = useState('message');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleInputChange = (e, setStateFunction, placeholderValue) => {
        if (e.target.value !== '') {
            setStateFunction('');
        } else {
            setStateFunction(placeholderValue);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_1e3wyxq',
                'template_c9d56ir',
                e.target, {
                publicKey:
                    'IBMUF5E22fPm9zQxz',
            })
            .then(
                () => {
                    e.target.reset();
                    setNamePlaceholder('name');
                    setEmailPlaceholder('email');
                    setMessagePlaceholder('message');
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 8000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const [workingHoursRef, workingHoursInView] = useInView({ threshold: 0.5 });
    const [contactFormRef, contactFormInView] = useInView({ threshold: 0.5 });

    return (
        <div className='total-container'>
            <div className='tittle-container'>
                <h1>contact us</h1>
            </div>
            <div className="contact-container">
                <motion.div
                    ref={workingHoursRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: workingHoursInView ? 1 : 0, y: workingHoursInView ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                    className="working-hours"
                >
                    <h2>working hours</h2>
                    <br />
                    <p>monday - friday: 9am - 5pm</p>
                    <p>saturday: 10am - 3pm</p>
                    <p>sunday: closed</p>
                </motion.div>

                <motion.div
                    ref={contactFormRef}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: contactFormInView ? 1 : 0, x: contactFormInView ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <form ref={contactFormRef} className="contact-form" onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="user_name"
                            onChange={(e) => handleInputChange(e, setNamePlaceholder, 'name')}
                            placeholder={namePlaceholder}
                        />
                        <input
                            type="email"
                            name="user_email"
                            onChange={(e) => handleInputChange(e, setEmailPlaceholder, 'email')}
                            placeholder={emailPlaceholder}
                        />
                        <textarea
                            name="message"
                            onChange={(e) => handleInputChange(e, setMessagePlaceholder, 'message')}
                            placeholder={messagePlaceholder}
                        />
                        <input type="submit" value="Send" />
                    </form>

                </motion.div>

                {showSuccessMessage && (
                    <div className="success-message">
                        your message has been sent successfully!
                    </div>
                )}

            </div>
        </div>
    );
};



export default ContactUs;
