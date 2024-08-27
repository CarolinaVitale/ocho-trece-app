import React from 'react';
import { Button } from './Button';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import '../components/ImageAnimation.css';

const ImageAnimation = ({ image, tittle, paragraph, paragraph2, button }) => {
    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });
    const [AnimationRef2, AnimationInView2] = useInView({ threshold: 0.5 });
    const [AnimationRef3, AnimationInView3] = useInView({ threshold: 0.5 });


    return (

        <div className="animation-container">
            <img className='image-animation' src={image} alt="placeholder" />

            <div className="text-container-animation">
                <motion.div
                    ref={AnimationRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: AnimationInView ? 1 : 0, y: AnimationInView ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='tittle-animation'>
                        <br />
                        <h1>{tittle}</h1>
                        <br />
                    </div>
                </motion.div>

                <motion.div
                    ref={AnimationRef2}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: AnimationInView2 ? 1 : 0, y: AnimationInView2 ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='paragraph'>
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
                    <div className='tittle'>
                        <Button
                            where='/menu'
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                        >{button}</Button>
                    </div>
                </motion.div>
            </div>
        </div>

    );
};

export default ImageAnimation;