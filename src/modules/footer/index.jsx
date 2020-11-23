import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';

import './style.css';

const Footer = () => {

    return(
        <footer>
            <div className='main-footer-area'>
                <div className='about-us-section'>
                    <h2>About us</h2>

                    <div className='footer-image'></div>

                    <p>
                        Integer nec bibendum lacus. Suspen disse dictum enim sit amet
                        libero males uada feugiat. Praesent malesuada.
                    </p>
                </div>

                <div className='hours-section'>
                    <h2>Hours</h2>

                    <div className='hours-days'>
                        <div className='days'>Monday - Friday</div>

                        <div className='hours'>09 AM - 19 PM</div>
                    </div>

                    <div className='hours-days'>
                        <div className='days'>Saturday</div>

                        <div className='hours'>09 AM - 14 PM</div>
                    </div>

                    <div className='hours-days'>
                        <div className='days'>Sunday</div>

                        <div className='hours'>Closed</div>
                    </div>


                    <div className='phone'>
                        <PhoneIcon /> +45 677 8993000 223
                    </div>
                    <div className='email'>
                        <EmailIcon /> office@template.com
                    </div>
                    <div className='location'>
                        <RoomIcon /> Main Str. no 45-46, b3, 56832, Los Angeles, CA
                    </div>
                </div>
            </div>

            <div className='copyright-text'>Copyright ©2020 All rights reserved | This template is made by Vladislav Enev(vlladislav45)</div>
        </footer>
    );
}

export default Footer;