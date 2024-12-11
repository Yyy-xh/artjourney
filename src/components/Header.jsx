import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">ArtJourney</div>
            <nav>
                <ul>
                    <li><Link to="/">画廊</Link></li>
                    <li><Link to="/virtual-tour">虚拟导览</Link></li>
                    <li><Link to="/community">社区</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
