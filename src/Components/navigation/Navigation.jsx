import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import "../../styles/scss/_navigation.scss"


const Navigation = ({style}) => {
    const location = useLocation();

    const activeStyle = {
        fontWeight: 'bold',
        color: 'gray'
    };

    return (
        <nav className={`${style}__nav`}>
            <ul className={`${style}__nav-lists`}>
                <li className={`${style}__nav-list`}><NavLink to="/" style={location.pathname === '/' ? activeStyle : null} className={`${style}__nav-linck`}>Головна</NavLink></li>
                <li className={`${style}__nav-list`}><NavLink to="/about" style={location.pathname === '/about' ? activeStyle : null} className={`${style}__nav-linck`}>Про нас</NavLink></li>
                <li className={`${style}__nav-list`}><NavLink to="/shipping" style={location.pathname === '/shipping' ? activeStyle : null} className={`${style}__nav-linck`}>Доставка і оплата</NavLink></li>
                <li className={`${style}__nav-list`}><NavLink to="/catalog" style={location.pathname === '/catalog' ? activeStyle : null} className={`${style}__nav-linck`}>Каталог</NavLink></li>
                <li className={`${style}__nav-list`}><NavLink to="/contact" style={location.pathname === '/contact' ? activeStyle : null} className={`${style}__nav-linck`}>Контакти</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation