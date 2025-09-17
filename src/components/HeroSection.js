import React from 'react';
import '../App.css';
import './HeroSection.css';
import home from '../images/now-open.png'
import togo from '../images/to-go.png'
import logo from '../images/logo.png'
import toastLogo from "../images/toast-logo.png";
import uberEatsLogo from "../images/ubereats-logo.png";
import doordashLogo from "../images/doordash-logo.png";
import { Link } from 'react-router-dom';




function HeroSection() {
    return (
        <>
            <div className='hero-container'>
                <img className='home-img' src={home} alt='home' />
                <Link className='btn-delivery' to="/delivery-menu">here!</Link>
                <img className='to-go' src={togo} alt='home' />

                <div className="delivery-cta" aria-labelledby="delivery-title">
                    <h3 id="delivery-title" className="delivery-title">
                        PLACE YOUR ORDER
                    </h3>
<br />
                    {/* Toast destacado */}
                    <a
                        className="partner-main"
                        href="https://order.toasttab.com/online/ochotrecerestaurant"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Order on Toast"
                    >
                        <img src={toastLogo} alt="Toast" />
                    </a>

                    <div className="or">OR</div>

                    {/* Alternativas */}
                    <div className="partners-secondary">
                        <a
                            className="partner-secondary"
                            href="https://www.ubereats.com/store/ocho-trece-restaurant-800-w-john-f-kennedy-blvd-suite-a/TcpJDMZ-QQew4eMpQHfSaQ?diningMode=DELIVERY"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Order on Uber Eats"
                        >
                            <img src={uberEatsLogo} alt="Uber Eats" />
                        </a>

                        <a
                            className="partner-secondary"
                            href="https://www.doordash.com/store/ocho-trece-restaurant-800-w-kennedy-blvd-tampa-36017351/80427147/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Order on DoorDash"
                        >
                            <img src={doordashLogo} alt="DoorDash" />
                        </a>
                    </div>
                </div>
            </div>

            


            <div>
                <img className='logo-hero' src={logo} alt='logo' />
            </div>
        </>

    );
}

export default HeroSection;