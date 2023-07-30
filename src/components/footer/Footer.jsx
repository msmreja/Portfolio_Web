import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container container">
                <h1 className="footer__title">Masum Reja</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__list">Home</a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/msmreja/" 
                    className="footer__social-link" 
                    target="_blank">
                    <i className="uil uil-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/msmreja/" 
                    className="footer__social-link" 
                    target="_blank">
                    <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/msmreja" 
                    className="footer__social-link" 
                    target="_blank">
                    <i className="uil uil-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/msmreja/" 
                    className="footer__social-link" 
                    target="_blank">
                    <i className="uil uil-instagram"></i>
                    </a>

                    <span className="footer__copy"></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;