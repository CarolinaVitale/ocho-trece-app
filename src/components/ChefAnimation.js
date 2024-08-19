import React from 'react';
import { Button } from './Button';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import '../components/Animation.css';

const HomeAnimation = ({ image, text, paragraph, paragraph2, button }) => {
    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });
    const [AnimationRef2, AnimationInView2] = useInView({ threshold: 0.5 });
    const [AnimationRef3, AnimationInView3] = useInView({ threshold: 0.5 });
    const [AnimationRef4, AnimationInView4] = useInView({ threshold: 0.5 });


    return (
        <div className="scroll-animation-container">

            <motion.div
                className="image-container"
                ref={AnimationRef4}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: AnimationInView4 ? 1 : 0, x: AnimationInView4 ? 0 : 50 }}
                transition={{ duration: 0.5 }}
            >
                <img src={image} alt="placeholder" />
            </motion.div>

            <div className="text-container">
                <motion.div
                    ref={AnimationRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: AnimationInView ? 1 : 0, y: AnimationInView ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='text'>
                        <br />
                        <h1>{text}</h1>
                        <br />
                    </div>
                </motion.div>

                <motion.div
                    ref={AnimationRef2}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: AnimationInView2 ? 1 : 0, y: AnimationInView2 ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='text'>
                        <br />
                        <p>{paragraph}</p>
                        <p>{paragraph2}</p>

                        <br />
                    </div>
                </motion.div>

                <motion.div
                    ref={AnimationRef3}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: AnimationInView3 ? 1 : 0, y: AnimationInView3 ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='text'>
                        <Button
                            where='/about'
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                        >{button}</Button>
                    </div>
                </motion.div>
            </div>

            
        </div>
    );
};

export default HomeAnimation;