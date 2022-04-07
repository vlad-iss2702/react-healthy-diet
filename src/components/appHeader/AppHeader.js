import React from 'react';
import { NavLink } from 'react-router-dom';

import './appHeader.scss';

import headerLogo from '../../resources/img/logo-3.png';


const AppHeader = () => {
    return (
        <>
            <header>
                <div className="header-main">
                    <div className="container flex-standart">
                    <ul className="header-menu">
                            <li><NavLink to="/" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")}>Главная</NavLink></li>
                            <li><NavLink to="/menu" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")}>Меню</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")}>О нас</NavLink></li>
                            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")}>Блог</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active-class" : "not-active-class")}>Контакты</NavLink></li>
                        </ul>
                        <a className="header-logo" href><img src={headerLogo} alt="" /></a>
                        <ul className="header-social">
                            <li><a href><i className="icon-instagram"></i></a></li>
                            <li><a href><i className="icon-twitter"></i></a></li>
                            <li><a href><i className="icon-google-plus"></i></a></li>
                            <li><a href><i className="icon-facebook"></i></a></li>
                        </ul>
                        <a className="header-subscribe">Связаться с нами</a>
                    </div>
                </div>
            </header>
        
        </>
    )
}

export default AppHeader;