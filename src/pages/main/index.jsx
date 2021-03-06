import React from 'react';
import TopNavBar from "../../modules/navigation/topNavBar";
import MainContent from "../../modules/mainContent";
import Footer from "../../modules/footer";
import ArrowCircleUp from "../../components/arrowCircleUp";

const MainPage = () => {

    return (
        <div className='main-page'>
            <TopNavBar />

            <MainContent />

            <ArrowCircleUp />

            <Footer />
        </div>
    );
}

export default MainPage;