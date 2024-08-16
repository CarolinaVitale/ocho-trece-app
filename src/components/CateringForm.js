import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../components/CateringForm.css';

export const CateringForm = () => {
    const [namePlaceholder, setNamePlaceholder] = useState('first name');
    const [lastNamePlaceholder, setLastNamePlaceholder] = useState('last name');
    const [companyPlaceholder, setCompanyPlaceholder] = useState('company/organization (optional)');
    const [phonePlaceholder, setPhonePlaceholder] = useState('phone number');
    const [emailPlaceholder, setEmailPlaceholder] = useState('email');
    const [eventDatePlaceholder, setEventDatePlaceholder] = useState('event date (mm/dd/yyyy)');
    const [eventTimePlaceholder, setEventTimePlaceholder] = useState('event time');
    const [streetPlaceholder, setStreetPlaceholder] = useState('street');
    const [cityPlaceholder, setCityPlaceholder] = useState('city');
    const [statePlaceholder, setStatePlaceholder] = useState('state');
    const [zipPlaceholder, setZipPlaceholder] = useState('zip');
    const [detailsPlaceholder, setDetailsPlaceholder] = useState('event description (brief description of your event)');
    const [howPlaceholder, setHowPlaceholder] = useState('how did you hear about us');
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
                'template_rlshlst',
                e.target, {
                publicKey:
                    'IBMUF5E22fPm9zQxz',
            })
            .then(
                () => {
                    e.target.reset();
                    setNamePlaceholder('first name');
                    setLastNamePlaceholder('last name');
                    setCompanyPlaceholder('company/organization (optional)');
                    setPhonePlaceholder('phone number');
                    setEmailPlaceholder('email');
                    setEventDatePlaceholder('event date (mm/dd/yyyy)');
                    setEventTimePlaceholder('event time');
                    setStreetPlaceholder('street');
                    setCityPlaceholder('city');
                    setStatePlaceholder('state');
                    setZipPlaceholder('ZIP');
                    setDetailsPlaceholder('event description (brief description of your event)');
                    setHowPlaceholder('how did you hear about us');

                    setShowSuccessMessage(true);
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 30000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className='catering-form'>
            <h1>catering quote</h1>
            <br />
            <div className="catering-container">
                <form className="catering-form" onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        onChange={(e) => handleInputChange(e, setNamePlaceholder, 'first name')}
                        placeholder={namePlaceholder}
                    />
                    <input
                        type="text"
                        name="last_name"
                        onChange={(e) => handleInputChange(e, setLastNamePlaceholder, 'last name')}
                        placeholder={lastNamePlaceholder}
                    />

                    <input
                        type="text"
                        name="company"
                        onChange={(e) => handleInputChange(e, setCompanyPlaceholder, 'company/organization (optional)')}
                        placeholder={companyPlaceholder}
                    />
                    <input
                        type="tel"
                        name="phone"
                        onChange={(e) => handleInputChange(e, setPhonePlaceholder, 'phone number')}
                        placeholder={phonePlaceholder}
                    />
                    <input
                        type="email"
                        name="user_email"
                        onChange={(e) => handleInputChange(e, setEmailPlaceholder, 'email')}
                        placeholder={emailPlaceholder}
                    />
                    <input
                        type="text"
                        name="event_date"
                        onChange={(e) => handleInputChange(e, setEventDatePlaceholder, 'event date (mm/dd/yyyy)')}
                        placeholder={eventDatePlaceholder}
                    />
                    <input
                        type="text"
                        name="event_time"
                        onChange={(e) => handleInputChange(e, setEventTimePlaceholder, 'event time')}
                        placeholder={eventTimePlaceholder}
                    />
                    <input
                        type="text"
                        name="street"
                        onChange={(e) => handleInputChange(e, setStreetPlaceholder, 'street')}
                        placeholder={streetPlaceholder}
                    />
                    <input
                        type="text"
                        name="city"
                        onChange={(e) => handleInputChange(e, setCityPlaceholder, 'city')}
                        placeholder={cityPlaceholder}
                    />
                    <input
                        type="text"
                        name="state"
                        onChange={(e) => handleInputChange(e, setStatePlaceholder, 'state')}
                        placeholder={statePlaceholder}
                    />
                    <input
                        type="text"
                        name="zip"
                        onChange={(e) => handleInputChange(e, setZipPlaceholder, 'ZIP')}
                        placeholder={zipPlaceholder}
                    />
                    <textarea
                        name="details"
                        onChange={(e) => handleInputChange(e, setDetailsPlaceholder, 'event description (provide a brief description of your event)')}
                        placeholder={detailsPlaceholder}
                    />
                    <input
                        type="text"
                        name="how"
                        onChange={(e) => handleInputChange(e, setHowPlaceholder, 'how did you hear about us')}
                        placeholder={howPlaceholder}
                    />
                    <input type="submit" value="send" />
                </form>

                {showSuccessMessage && (
                    <div className="catering-success-message">
                        thank you for contacting us regarding your event. our staff will gladly contact you shorty to finalize any details and provide you with a quote.
                    </div>
                )}
            </div>
        </div>
    );
};

export default CateringForm;