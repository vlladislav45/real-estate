import React from 'react';
import TopNavBar from "../../modules/navigation/topNavBar";
import Footer from "../../modules/footer";
import ContactMain from "../../modules/contactMain";
import ArrowCircleUp from "../../components/arrowCircleUp";

const Contact = () => {

    return (
        <div className='contact-container'>
            <TopNavBar />

            <ContactMain />

            <ArrowCircleUp />

            <Footer />
        </div>
    );
}

export default Contact;