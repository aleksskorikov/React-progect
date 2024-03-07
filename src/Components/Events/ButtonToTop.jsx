import React from 'react';
import Elipse from '../../imeges/logo/Ellipse 3.svg';
import ArrowTop from '../../imeges/logo/arrowTop.svg';
import '../../styles/scss/events/_buttonToTop.scss';
import { animateScroll as scroll } from "react-scroll";

const ButtonToTop = () => {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: "easeInOutQuart"
        });
    }
    return (
        <button className='arrow__top-btn' onClick={scrollToTop}>
            <img src={Elipse} alt="elipse" className='top__btn-elipse'/>
            <img src={ArrowTop} alt="ArrowTop" className='top__btn-arrow'/>
            <p className='top__btn-name'>нагору</p>
        </button>
    )
}

export default ButtonToTop;