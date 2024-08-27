import React from 'react';
import { Header } from '../components/Header';
import pic from '../images/carpaccio.JPG'
// import MenuForm from '../Menu'
import CateringForm from '../components/CateringForm'


function Catering() {
    return (
        <>
            <Header tittle='catering' image={pic} />
            <div>
                {/* <MenuForm /> */}
                <CateringForm />
            </div>
        </>
    );
}

export default Catering;