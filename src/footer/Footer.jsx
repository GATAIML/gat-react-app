import React from 'react';
import './Footer.css';
import Logo from '../assets/Gat-Fav.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={Logo} alt="Logo" className="footer-logo" />
                <span className="footer-text">GAT AIML</span>
            </div>
            <div className="footer-table">
                <table>
                    <tbody>
                        <tr>
                            <td className="footer-column">
                                <ul className="footer-nav-links">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#recent-activities">Recent Activities</a></li>
                                    <li><a href="#semester-01">Semester-01</a></li>
                                    <li><a href="#semester-02">Semester-02</a></li>
                                </ul>
                            </td>
                            <td className="footer-column">
                                <div className="footer-social-icons">
                                    <a href="#"><i className="bx bxl-facebook"></i> /GATAIML</a>
                                    <a href="#"><i className="bx bxl-twitter"></i> /GATAIML</a>
                                    <a href="#"><i className="bx bxl-instagram"></i> /GATAIML</a>
                                    <a href="#"><i className="bx bxl-linkedin"></i> /GATAIML</a>
                                </div>
                            </td>
                            <td className="footer-column">
                                <address>
                                    1234 Street Name, City, Country
                                </address>
                                <div className="footer-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7188632363036!2d77.52406007411959!3d12.92578221588306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e51e9d44b57%3A0x7306c680a9673b5a!2sGlobal%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1706455310529!5m2!1sen!2sin"></iframe>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="footer-bottom">
                <p>©GAT AIML 2024, Copyrights Reserved 
                    <br></br> 
                    <br></br> 
                    <a href="#terms">Terms</a> | 
                    <a href="#privacy">Privacy Policy</a></p>
            </div>
        </footer>
    );
};

export default Footer;