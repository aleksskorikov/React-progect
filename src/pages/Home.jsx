import React from 'react';
import Header from '../Components/header/';
import Footer from '../Components/footer/';
import SectionOne from '../Components/Home main/sectionOne';
import PopularModels from '../Components/Home main/PopularModels';

const Navbar = () => {
    return (
        <>
        <div className="header">
            <Header />
        </div>
        <div className="main">
            <div className="section-one">
                <SectionOne />
            </div>
            <div className="section-popularModels">
                <PopularModels />   
            </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
        </>
    );
};

export default Navbar;