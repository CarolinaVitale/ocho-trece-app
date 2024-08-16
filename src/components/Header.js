import React from 'react';
import '../components/Header.css';

export const Header = ({
    tittle,
    image
}) => {

    return (
        <>
            <div className='header-container'>
                <h1>{tittle}</h1>
                <img className='header-img' src={image} alt='header' />
            </div>
        </>
    );
};