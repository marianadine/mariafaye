import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBarStyles.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-links'>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/works" className={({ isActive }) => isActive ? "active" : ""}>Works</NavLink>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/marianadine0912"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="mailto:nadinerufo7@gmail.com" className="nav-item">Email</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
