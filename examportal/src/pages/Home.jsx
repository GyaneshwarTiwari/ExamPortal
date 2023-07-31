import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Live from '../components/Live.jsx';
import Archive from '../components/Archive.jsx';
import Applied from '../components/Applied.jsx';
import '../styles/Home.css';
import Footer from '../components/Footer.jsx';

const Home = () => {
    const [selectedTab, setSelectedTab] = useState('live');

    const isAuth = false; // This is a placeholder and will be completed after the backend is implemented.

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const renderComponent = () => {
        switch (selectedTab) {
            case 'live':
                return <Live />;
            case 'archived':
                return <Archive />;
            case 'applied':
                return <Applied />;
            default:
                return <Live />;
        }
    };

    return (
        <div className='outer'>
            <Header head1={'Login'} head2={'Register'} />
            <div className="mid">
                <nav>
                    <ul className='flex'>
                        <li className='mr-6'>
                            <Link to="/" className={`${selectedTab === 'live' ? ' active-tab' : ' inactive-tab'}`} onClick={() => handleTabClick('live')}>
                                Live
                            </Link>
                        </li>
                        <li className='mr-6'>
                            <Link to="/" className={`${selectedTab === 'archived' ? ' active-tab' : ' inactive-tab'}`} onClick={() => handleTabClick('archived')}>
                                Archived
                            </Link>
                        </li>
                        <li className='mr-6'>
                            <Link to={`${isAuth === true ? '/' : '/Login'}`} className={`${selectedTab === 'applied' ? ' active-tab' : ' inactive-tab'}`} onClick={() => handleTabClick('applied')}>
                                Applied
                            </Link>
                        </li>
                    </ul>
                </nav>

                {renderComponent()}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
