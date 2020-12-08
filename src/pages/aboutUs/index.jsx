import React from 'react';
import TopNavBar from "../../modules/navigation/topNavBar";
import Footer from "../../modules/footer";
import AboutUsMain from "../../modules/aboutUsMain";
import ArrowCircleUp from "../../components/arrowCircleUp";

const AboutUs = () => {

    return(
        <div className='about-us-container'>
            <TopNavBar />

            <AboutUsMain />

            <ArrowCircleUp />

            <Footer />
        </div>
    );
};

export default AboutUs;