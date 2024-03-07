import React from 'react';
import SectionOne from '../Components/Home main/sectionOne';
import PopularModels from '../Components/Home main/PopularModels';
import MadeFurniture from '../Components/Home main/MadeFurniture';
import SliderSlic from '../Components/Events/SliderSlic';
import ButtonToTop from '../Components/Events/ButtonToTop';
import DiscountedModels from '../Components/DiscountedModels';
import Advantages from '../Components/Home main/Advantages';

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
            <div className="section-dvantages">
                <Advantages />    
            </div>
            <div className="discount-models">
                <DiscountedModels />   
            </div>    
            <div className="slider">
                <SliderSlic />
            </div>
            <div className="button__to-top">
                <ButtonToTop />    
            </div>
        </div>
        </>
    );
};

export default Navbar;