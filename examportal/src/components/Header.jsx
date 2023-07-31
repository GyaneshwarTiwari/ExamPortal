import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../Images/logow.png';

const Header = ({ head1, head2 }) => {
    return (
        <div className='header'>
            <div className="container mx-auto flex justify-between items-center mainhead">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="links">
                    <Link to={`/${head1}`} className="text-white px-4">
                        {head1}
                    </Link>
                    <Link to={`/${head2}`} className="text-white px-4">
                        {head2}
                    </Link>
                </div>
            </div>
            <div className="container mx-auto flex justify-start text-center subhead">
                <Link to="/" className="text-white px-4">
                    Home
                </Link>
                <Link to="/about" className="text-white px-4">
                    About Us
                </Link>
                <Link to="/faq" className="text-white px-4">
                    FAQ
                </Link>
                <Link to="/contact" className="text-white px-4">
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default Header;
