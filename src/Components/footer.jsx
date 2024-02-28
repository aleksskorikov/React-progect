import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/scss/_footer.scss';
import HeaderLogo from '../imeges/logo/header logo.svg';
import BtnRequestCall from './Events/BtnRequestCall';


const footer = () => {
    return (
        <>
        <div className="conteiner">
            <div className="footer-block">
                <div className="footer__block-logo">
                    <img src={HeaderLogo} alt="logo" className='footer-logo' />
                    <p className='footer__logo-discription'>Все права защищены 2020</p>
                </div>    
                <nav className='footer-nav'>
                    <ul className='footer__nav-lists'>
                        <li className='footer__nav-list' ><NavLink to="/" activeClassName="active " className='footer__nav-linck'>Головна</NavLink></li>
                        <li className='footer__nav-list' ><NavLink to="/catalog" activeClassName="active " className='footer__nav-linck'>Каталог</NavLink></li>
                        <li className='footer__nav-list' ><NavLink to="/shipping" activeClassName="active " className='footer__nav-linck'>Доставка і оплата</NavLink></li>
                        <li className='footer__nav-list' ><NavLink to="/about" activeClassName="active " className='footer__nav-linck'>Про нас</NavLink></li>
                        <li className='footer__nav-list' ><NavLink to="/contact" activeClassName="active " className='footer__nav-linck'>Контакти</NavLink></li>
                    </ul>
                    <button className='footer__nav-btn'>Все права защищены 2020</button>
                </nav>
                <div className="footer__block-contacts">
                    <p className="footer__contacts-tel">8 055 555 55 55</p>
                    <BtnRequestCall children={"Замовити дзвінок"} style={'header-btn'}/> 
                </div>
            </div>
        </div>
        </>

    )
}

export default footer