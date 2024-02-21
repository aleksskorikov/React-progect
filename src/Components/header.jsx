import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLogo from '../imeges/logo/header logo.svg';
import Clock from '../imeges/logo/clock.svg';
import BurgerMenu from '../imeges/logo/burgerMenu.svg'

const Navbar = () => {
    return (
        <>
        <div className="conteiner">
            <div className="header-block">
                <div className="header__block-logo">
                    <img src={HeaderLogo} alt="logo" className='header-logo' />
                    <p className='header__logo-discription'>Продажа и изготовление мебели</p>
                </div>    
                <nav className='header-nav'>
                    <ul className='header__nav-lists'>
                        <li className='header__nav-list' ><NavLink to="/" activeClassName="active " className='header__nav-linck'>Головна</NavLink></li>
                        <li className='header__nav-list' ><NavLink to="/catalog" activeClassName="active " className='header__nav-linck'>Каталог</NavLink></li>
                        <li className='header__nav-list' ><NavLink to="/shipping" activeClassName="active " className='header__nav-linck'>Доставка і оплата</NavLink></li>
                        <li className='header__nav-list' ><NavLink to="/about" activeClassName="active " className='header__nav-linck'>Про нас</NavLink></li>
                        <li className='header__nav-list' ><NavLink to="/contact" activeClassName="active " className='header__nav-linck'>Контакти</NavLink></li>
                    </ul>
                </nav>
                <div className="header__block-contacts">
                    <img src={Clock} alt="foto clock" className="block__contacts-clock" />
                    <p className="block__contacts-time">Пн - Пт: 10:00-20:00</p>
                    <p className="block__contacts-tel">8055 555 55 55</p>
                </div>
                <button className="header-btn">замовити дзвінок</button>
                <img src={BurgerMenu} alt="logo" className='header-burgermenu'/>
            </div>
        </div>

        </>

    );
};

export default Navbar;