import React from 'react';
import '../components/Direction.css';

export const Direction = () => {

    return (
        <>
            <div className='direction'>
                <a src="https://maps.app.goo.gl/y5cHHtZywg8wfN4U9" target='_blank' href='maps'>
                    <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.6166927940585!2d-82.47036202531854!3d27.944393814998012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c48457850799%3A0x1f38b6d6208dcfe1!2s800%20W%20Kennedy%20Blvd%2C%20Tampa%2C%20FL%2033606%2C%20USA!5e0!3m2!1sen!2sve!4v1712001176482!5m2!1sen!2sve"
                        width="100%"
                        height="400px"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </a>
            </div>
        </>
    );
};