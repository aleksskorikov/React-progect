import React from 'react';
import SectionOne from '../Components/Home main/sectionOne';
import PopularModels from '../Components/Home main/PopularModels';
import MadeFurniture from '../Components/Home main/MadeFurniture';
import SliderSlic from '../Components/Events/SliderSlic';

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
            <div className="slider">
                <SliderSlic />
            </div>
        </div>
        </>
    );
};

export default Navbar;