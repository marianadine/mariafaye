import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import '../styles/NavBarStyles.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className='navbar'>
            <div className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <CloseOutlined /> : <MenuOutlined />}
            </div>

            <ul className={isMobile ? 'navbar-links-mobile' : 'navbar-links'}
                onClick={() => setIsMobile(false)}>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/works" className={({ isActive }) => isActive ? "active" : ""}>Works</NavLink>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/marianadine0912" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="mailto:nadinerufo7@gmail.com">Email</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;