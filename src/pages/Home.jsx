import React from 'react';
import SectionOne from '../Components/Home main/sectionOne';
import PopularModels from '../Components/Home main/PopularModels';
import MadeFurniture from '../Components/Home main/MadeFurniture';

const Navbar = () => {
    return (
        <>
        <div className="main">
            <div className="section-one">
                <SectionOne />
            </div>
            <div className="section-popularModels">
                <PopularModels />   
            </div>
            <div className="section-madeFurniture">
            <MadeFurniture />
            </div>
        </div>
        </>
    );
};

export default Navbar;