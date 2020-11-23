import React, {useEffect, useRef} from 'react';
import SearchBar from '../../../components/searchBar/index';
import 'react-animated-slider/build/horizontal.css';

import './style.css';

const TopNavBar = React.forwardRef((props, ref) => {
    const searchBar = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
             let stickyNavBar = document.getElementsByClassName('top-sticky-nav')[0];

            if(window.pageYOffset > 100) {
                stickyNavBar.style.position = 'fixed';
                stickyNavBar.style.zIndex = 1;
                searchBar.current.style.display = 'none'; // Hide search bar
            }else {
                stickyNavBar.style.position = 'relative';
                stickyNavBar.style.top = 0;
                stickyNavBar.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                searchBar.current.style.display = 'flex';
            }

        });
    })

    return(
        <div className='wrapper'>
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
    );
});

export default TopNavBar;