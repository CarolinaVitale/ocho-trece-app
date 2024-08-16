import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../images/logotype.png'


function Footer() {
    return (
        <div className='footer-container'>

            <section className='info'>
                <div className='info-wrap'>

                    <small className='website-info'>
                        <a rel="noreferrer" target="_blank" href="https://maps.app.goo.gl/eXcAhXj6Hzz11rcB6">
                            800w kennedy boulevard, tampa, fl. 33606</a></small>
                    <small className='website-info'>
                        <a href="tel:+18133745363">
                            phone: 813-374-5363</a>
                    </small>
                </div>
            </section>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img className='logo' src={logo} alt='logo' />
                        </Link>
                    </div>
                    <small className='website-rights'>ocho trece © 2024  </small> {/* |
                        <Link className='info-privacy' to='/terms-conditions' target='_blank'> terms & conditions
                        </Link> |
                        <Link className='info-privacy' to='/privacy' target='_blank'> privacy
                        </Link> |
                        <Link className='info-privacy' to='/accessibility' target='_blank'> accessibility
                        </Link>
                    </small> */}
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>

            <div className='created'>
                <small className='created-by'> website by
                    <Link className='created-by-link' to='https://carolavitale.com/' target='_blank'> Carola Vitale
                    </Link>
                </small>
            </div>


        </div>
    );
}

export default Footer;