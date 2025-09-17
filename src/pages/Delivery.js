// src/pages/DeliveryMenu.js
import React from "react";
import deliveryMenu from '../images/delivery-menu.png';
import './Delivery.css';
import toastLogo from "../images/toast-logo.png";
import uberEatsLogo from "../images/ubereats-logo.png";
import doordashLogo from "../images/doordash-logo.png";

function DeliveryMenu() {
    return (
        <div className="delivery-menu">
            <img src={deliveryMenu} alt="delivery-menu" className="delivery-menu-pic"/>
            <div className="delivery-cta" aria-labelledby="delivery-title">
                <h3 id="delivery-title" className="delivery-title">
                    PLACE YOUR ORDER
                </h3>

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

    );
}

export default DeliveryMenu;