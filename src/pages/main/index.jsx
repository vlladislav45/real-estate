import React from 'react';
import TopNavBar from "../../modules/navigation/topNavBar";
import MainContent from "../../modules/mainContent";
import Footer from "../../modules/footer";

const MainPage = () => {

    return (
        <div className='main-page'>
            <TopNavBar />

            <MainContent />

            <Footer />
        </div>
    );
}

export default MainPage;