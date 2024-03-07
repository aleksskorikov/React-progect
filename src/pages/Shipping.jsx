import React from 'react';
import MadeFurniture from '../Components/Home main/MadeFurniture';
import ButtonToTop from '../Components/Events/ButtonToTop';


const Navbar = () => {
    return (
        <>
            <div className="section-madeFurniture">
                <MadeFurniture />
            </div>
            <div className="button__to-top">
                <ButtonToTop />    
            </div>
        </>
    );
};

export default Navbar;