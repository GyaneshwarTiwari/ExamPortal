import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>© 2023 Copyright: Exam Portal</div>
            <div className='socials'>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-telegram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;
