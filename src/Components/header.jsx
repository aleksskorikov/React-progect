import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLogo from '../imeges/logo/header logo.svg';
import Clock from '../imeges/logo/clock.svg';
import BurgerMenu from '../imeges/logo/burgerMenu.svg';
import BtnRequestCall from './Events/BtnRequestCall';


const Navbar = () => {

    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!burgerMenuOpen);
        };

    const closeBurgerMenu = () => {
        setBurgerMenuOpen(false);
        };
    
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
                    <p className="block__contacts-tel">8 055 555 55 55</p>
                </div>
                <BtnRequestCall children={"Замовити дзвінок"}/>
                <img src={BurgerMenu} alt="logo" className='header-burgermenu' onClick={toggleBurgerMenu}/>
                {burgerMenuOpen && (
                    <div className="burgermenu">
                        <button className="burgermenu-cloze" onClick={closeBurgerMenu}>Cloze</button>
                        <ul className="burgermenu-lists">
                            <li className='burgermenu-list' ><NavLink to="/" activeClassName="active " className='burgermenu-linck'>Головна</NavLink></li>
                            <li className='burgermenu-list' ><NavLink to="/catalog" activeClassName="active " className='burgermenu-linck'>Каталог</NavLink></li>
                            <li className='burgermenu-list' ><NavLink to="/shipping" activeClassName="active " className='burgermenu-linck'>Доставка і оплата</NavLink></li>
                            <li className='burgermenu-list' ><NavLink to="/about" activeClassName="active " className='burgermenu-linck'>Про нас</NavLink></li>
                            <li className='burgermenu-list' ><NavLink to="/contact" activeClassName="active " className='burgermenu-linck'>Контакти</NavLink></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </>
    );
};

export default Navbar;