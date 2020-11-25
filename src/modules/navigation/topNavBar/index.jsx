import React, {useEffect, useRef} from 'react';
import SearchBar from '../../../components/searchBar/index';

import './style.css';

const TopNavBar = React.forwardRef((props, ref) => {
    const searchBar = useRef(null);

    useEffect(() => {
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            let stickyNavBar = document.getElementsByClassName('top-sticky-nav')[0];
            let scrollTop = window.pageYOffset;

            //If scroll top
            if(scrollTop < lastScrollTop) { //Scrolling to up
                stickyNavBar.style.position = 'fixed';
                stickyNavBar.style.zIndex = 1;
            }else{ //Scrolling to down
                stickyNavBar.style.position = 'relative';
                stickyNavBar.style.top = 0;
                searchBar.current.style.display = 'none'; // Hide search bar
            }

            //If the user scrolling to top and the offsetY is less than 100y display the search bar
            if(scrollTop < lastScrollTop && scrollTop <= 100) {
                stickyNavBar.style.position = 'relative';
                stickyNavBar.style.top = 0;
                searchBar.current.style.display = 'flex';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        });
    })

    return(
        <div className='wrapper'>
            <div className='shell'>
                <div className='top-nav'>
                    <div className='top-sticky-nav'>
                        <nav>
                            <div className='logo'><a href='#'></a></div>

                            <ul>
                                <li className='nav-btn'><a href='#'>Home</a></li>

                                <li className='nav-btn'><a href='#'>About us</a></li>

                                <li className='nav-btn'><a href='#'>Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    <SearchBar ref={searchBar} />
                </div>
            </div>
        </div>
    );
});

export default TopNavBar;