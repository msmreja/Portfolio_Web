import React from 'react';
import "./Header.css"




const Header = () =>{
    return(
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>@msmreja</a>

                <div className='nav__menu'>
                    <ul className='nav__list grig'>
                        <li className='nav__item'>
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#about" className="nav__link">
                                <i className="uil uil-info-circle nav__icon"></i>About
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-award nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-suitcase nav__icon"></i>Projects
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-at nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className='uil uil-times nav__close'></i>
                </div>
                <div className="nav__toggle">
                    <i className="uil uil-apps"></i>
                </div>
              { /* <div className="toggle-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
    */}
            </nav>
        </header>
    )
}

export default Header