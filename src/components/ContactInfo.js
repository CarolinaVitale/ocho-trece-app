import React from 'react';
import '../components/ContactInfo.css'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


function ContactInfo() {
    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });
    const [AnimationRef2, AnimationInView2] = useInView({ threshold: 0.5 });
    const [AnimationRef3, AnimationInView3] = useInView({ threshold: 0.5 });


    return (
        <div className='contact-info'>

            <motion.div
                ref={AnimationRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: AnimationInView ? 1 : 0, y: AnimationInView ? 0 : 50 }}
                transition={{ duration: 0.5 }}

            >
                <div className='contact-address'>
                    <i className="fa-solid fa-location-dot fa-3x"></i>
                    <h3>address</h3>
                    <a rel="noreferrer" target="_blank" href="https://maps.app.goo.gl/eXcAhXj6Hzz11rcB6">
                        <p>800w kennedy boulevard, tampa, fl. 33606</p>
                    </a>
                </div>
            </motion.div>

            <motion.div
                ref={AnimationRef2}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: AnimationInView2 ? 1 : 0, y: AnimationInView2 ? 0 : 50 }}
                transition={{ duration: 0.5 }}

            >
                <div className='contact-phone'>
                    <i className="fa-solid fa-phone fa-3x"></i>
                    <h3>phone</h3>
                    <a href="tel:+18133745363">
                        <p>813-374-5363</p>
                    </a>
                </div>
            </motion.div>

            <motion.div
                ref={AnimationRef3}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: AnimationInView3 ? 1 : 0, y: AnimationInView3 ? 0 : 50 }}
                transition={{ duration: 0.5 }}

            >
                <div className='contact-mail'>
                    <i className="fa-solid fa-envelope fa-3x"></i>
                    <h3>mail</h3>
                    <a href="mailto:info@ochotrece.restaurant?subject=Email%20Subject&body=Hi%20I'd%20like%20to%20find%20out%20more%20about">
                        <p>info@ochotrece.restaurant</p>
                    </a>
                </div>
            </motion.div>

        </div>
    );
}

export default ContactInfo;