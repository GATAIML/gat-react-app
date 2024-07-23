// src/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [portalOpen, setPortalOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    const togglePortal = () => {
        setPortalOpen(!portalOpen);
    };

    return (
        <nav className="navbar">
            <div className="brand">GAT AIML.</div>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <li className="navbar-item"><a href="#home"><i className="bx bx-home"></i>Home</a></li>
                    <li className="navbar-item"><a href="#recent-activities"><i className="bx bx-history"></i>Recent Activities</a></li>
                    <li className="navbar-item"><a href="#semester-01"><i className="bx bx-book"></i>Semester-01</a></li>
                    <li className="navbar-item"><a href="#semester-02"><i className="bx bx-book"></i>Semester-02</a></li>
                    <li className={`navbar-item dropdown ${portalOpen ? 'open' : ''}`}>
                        <a href="#portal" onClick={togglePortal}><i className="bx bx-user-circle"></i>Portal <i className={`bx ${portalOpen ? 'bx-caret-up' : 'bx-caret-down'}`}></i></a>
                        <ul className={`dropdown-menu ${portalOpen ? 'open' : ''}`}>
                            <li className="dropdown-item"><a href="#results-portal"><i className="bx bx-clipboard"></i>Results-Portal</a></li>
                            <li className="dropdown-item"><a href="#students-portal"><i className="bx bx-user"></i>Students-Portal</a></li>
                            <li className="dropdown-item"><a href="#parents-portal"><i className="bx bx-group"></i>Parents-Portal</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="theme-toggle" onClick={toggleTheme}>
                    <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
                </div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
            </div>
        </nav>
    );
};

export default Navbar;
