import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

import './style.css';

const ArrowCircleUp = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <div>
            <FaArrowCircleUp
                className="scrollTop"
                onClick={scrollTop}
                style={{height: 40, display: showScroll ? 'flex' : 'none'}}
            />
        </div>
    );
}

export default ArrowCircleUp;
