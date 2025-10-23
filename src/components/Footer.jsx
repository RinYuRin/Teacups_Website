import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-top-border"></div>
                <div className="container">
                    <div className="footer-grid">
                        
                        <div className="footer-column about-column">
                            <img src="/images/logo.png" alt="Teacups POS Logo" className="footer-logo" />
                            <p className="tagline">The Best is yet to come</p>
                            <p>Enjoy it with A Cup Of Tea</p>
                        </div>
                        
                        <div className="footer-column links-column">
                            <h3 className="footer-title">Quick Links</h3>
                            <ul>
                                <li><ScrollLink to="products" smooth={true} duration={500} offset={-80}>Features</ScrollLink></li>
                                <li><ScrollLink to="promo-banner" smooth={true} duration={500} offset={-80}>Offers</ScrollLink></li>
                                <li><ScrollLink to="about" smooth={true} duration={500} offset={-80}>About</ScrollLink></li>
                                <li><ScrollLink to="special-product" smooth={true} duration={500} offset={-80}>Specials</ScrollLink></li>
                                <li><ScrollLink to="team" smooth={true} duration={500} offset={-80}>The Team</ScrollLink></li>
                            </ul>
                        </div>
                        
                        <div className="footer-column contact-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 className="footer-title" style={{ marginBottom: 0 }}>Contact Information</h3>
                                <a href="https://www.facebook.com/people/Tea-Cups-Dela-Costa/61560832521811/#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{color: '#4267B2', fontSize: '1.8rem', marginLeft: '12px'}}>
                                    <FaFacebook />
                                </a>
                            </div>
                            <ul style={{ marginTop: '10px' }}>
                                <li>
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>
                                        Dela Costa V, Rodriguez, Rizal, Philippines
                                    </span>
                                </li>
                                <li>
                                    <FaPhone className="contact-icon" />
                                    <span>0919 480 0113</span>
                                </li>
                                <li>
                                    <FaEnvelope className="contact-icon" />
                                    <span><a href="mailto:teacupdelacosta@gmail.com">teacupdelacosta@gmail.com</a></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-footer">
                <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                    <p>© 2025 - Teacups POS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;