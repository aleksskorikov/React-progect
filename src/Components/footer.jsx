import React from 'react';
import '../styles/scss/_footer.scss';
import HeaderLogo from '../imeges/logo/header logo.svg';
import BtnRequestCall from './Events/BtnRequestCall';
import Navigation from './navigation/Navigation';


const footer = () => {
    return (
        <>
        <div className="conteiner">
            <div className="footer-block">
                <div className="footer__block-logo">
                    <img src={HeaderLogo} alt="logo" className='footer-logo' />
                    <p className='footer__logo-discription'>Все права защищены 2020</p>
                    </div> 
                    <div className="footer__nav-block">
                        <Navigation style={"footer"}/> 
                        <button className='footer__nav-btn'>Все права защищены 2020</button> 
                    </div>
                <div className="footer__block-contacts">
                    <p className="footer__contacts-tel">8 055 555 55 55</p>
                    <BtnRequestCall children={"Замовити дзвінок"} style={'header-btn'} /> 
                </div>
                
            </div>
        </div>
        </>

    )
}

export default footer