import React from 'react';
import { Button } from '../components/Button';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import '../components/Animation.css';

const ScrollAnimationComponent = ({ imageSrc, text, paragraph }) => {
    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });
    const [AnimationRef2, AnimationInView2] = useInView({ threshold: 0.5 });
    const [AnimationRef3, AnimationInView3] = useInView({ threshold: 0.5 });
    const [AnimationRef4, AnimationInView4] = useInView({ threshold: 0.5 });


    return (
        <div className="scroll-animation-container">
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
                            where='/catering'
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                        >explore our catering</Button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="image-container"
                ref={AnimationRef4}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: AnimationInView4 ? 1 : 0, x: AnimationInView4 ? 0 : 50 }}
                transition={{ duration: 0.5 }}
            >
                <img src={imageSrc} alt="placeholder" />
            </motion.div>
        </div>
    );
};

export default ScrollAnimationComponent;