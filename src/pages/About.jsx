import React from 'react';
import MadeFurniture from '../Components/Home main/MadeFurniture';
import SliderSlic from '../Components/Events/SliderSlic';
import ButtonToTop from '../Components/Events/ButtonToTop';
import DiscountedModels from '../Components/DiscountedModels';


const Navbar = () => {
    return (
        <>
            <div className="slider">
                <SliderSlic />
            </div>
            <div className="section-madeFurniture">
                <MadeFurniture />
            </div>
            <div className="discount-models">
                <DiscountedModels />   
            </div>
            <div className="button__to-top">
                <ButtonToTop />    
            </div>
        </>
    );
};

export default Navbar;