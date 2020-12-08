import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const TopNavBar = () => {
    useEffect(() => {
        let lastScrollTop = 0;
        let stickyNavBar = document.getElementsByClassName('top-sticky-nav')[0];

        console.log(stickyNavBar)
        if(stickyNavBar !== undefined && stickyNavBar !== null) {
            window.addEventListener('scroll', () => {
                let scrollTop = window.pageYOffset;

                //If scroll top
                if (scrollTop < lastScrollTop) { //Scrolling to up
                    stickyNavBar.style.position = 'fixed';
                    stickyNavBar.style.zIndex = 1;
                } else { //Scrolling to down
                    stickyNavBar.style.position = 'relative';
                    stickyNavBar.style.top = 0;
                }

                //If the user scrolling to top and the offsetY is less than 100y display the search bar
                if (scrollTop < lastScrollTop && scrollTop <= 100) {
                    stickyNavBar.style.position = 'relative';
                    stickyNavBar.style.top = 0;
                }

                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
            });
        }
    });

    return(
        <div className='wrapper'>
            <div className='shell'>
                <div className='top-nav'>
                    <div className='top-sticky-nav'>
                        <nav>
                            <Link to={'/'} className='logo-container'>
                                <div className='logo'></div>
                            </Link>

                            <ul>
                                <Link to={'/'}>
                                    <li className='nav-btn'>
                                        Home
                                    </li>
                                </Link>

                                <Link to={'/about-us'}>
                                    <li className='nav-btn'>
                                        About us
                                    </li>
                                </Link>

                                <Link to={'/contact'}>
                                    <li className='nav-btn'>
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default TopNavBar;