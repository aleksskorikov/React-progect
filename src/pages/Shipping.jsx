import React from 'react';
import Header from '../Components/header/';
import Footer from '../Components/footer/';

const Navbar = () => {
    return (
        <>
        <div className="header">
            <Header />
        </div>
            
        <div className="footer">
            <Footer />
        </div>
        </>
    );
};

export default Navbar;