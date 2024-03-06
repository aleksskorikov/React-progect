import React from 'react';
import MadeFurniture from '../Components/Home main/MadeFurniture';
import SliderSlic from '../Components/Events/SliderSlic';


const Navbar = () => {
    return (
        <>
            <div className="slider">
                <SliderSlic />
            </div>
            <div className="section-madeFurniture">
                <MadeFurniture />
            </div>
        </>
    );
};

export default Navbar;