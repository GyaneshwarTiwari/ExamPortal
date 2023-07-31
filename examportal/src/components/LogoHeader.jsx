import React from 'react';
import '../styles/Header.css';
import logo from '../Images/logow.png';

const LogoHeader = ({ head1, head2 }) => {
    return (
        <div className='header'>
            <div className="container mx-auto flex justify-between items-center mainhead">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LogoHeader;
