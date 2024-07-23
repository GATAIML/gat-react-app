import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
        setDarkMode(savedDarkMode);
        document.body.classList.toggle('dark-mode', savedDarkMode);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        setDarkMode(prevDarkMode => {
            const newDarkMode = !prevDarkMode;
            document.body.classList.toggle('dark-mode', newDarkMode);
            localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
            return newDarkMode;
        });
    };

    return (
        <nav className="navbar">
            <div className="brand">GAT AIML.</div>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                {/* <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <li className="navbar-item"><a href="#home"><i className="bx bx-home"></i>Home</a></li>
                    <li className="navbar-item"><a href="#recent-activities"><i className="bx bx-history"></i>Recent Activities</a></li>
                    <li className="navbar-item"><a href="#semester-01"><i className="bx bx-book"></i>Semester-01</a></li>
                    <li className="navbar-item"><a href="#semester-02"><i className="bx bx-book"></i>Semester-02</a></li>
                </ul> */}
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
