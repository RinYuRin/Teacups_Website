import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// 1. Import FaDownload here
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const handleNav = () => setNav(!nav);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: "about", name: "About" },
        { to: "products", name: "Features" },
        { to: "special-product", name: "Specials" },
        { to: "team", name: "The Team" },
        { to: "promo-banner", name: "Offers" }, 
        { to: "contact", name: "Contact" }
    ];

    return (
        <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container nav-container">
                <a href="#" className="nav-logo">
                    <img src="/images/logo.png" alt="Teacups POS Logo" />
                </a>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    {navLinks.map((link) => (
                        <li className="nav-item" key={link.to}>
                            <a href={`/#${link.to}`} className="nav-link" onClick={() => setNav(false)}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="nav-item">
                        <a href="/menu.html" className="nav-link" onClick={() => setNav(false)}>Menu</a>
                    </li>
                    
                    
                    {/* 2. New Download Link Section */}
                    <li className="nav-item">
                        <a 
                            href="https://github.com/RinYuRin/TeacupsMobile/releases/tag/v1.1" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="nav-link" 
                            onClick={() => setNav(false)}
                            title="Download App"
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                justifyContent: 'center', 
                                fontSize: '1.2rem', 
                                transform: 'translateY(2px)' 
                            }}
                        >
                            <FaDownload /> 
                        </a>
                    </li>

                </ul>
                <div onClick={handleNav} className="nav-icon">
                    {nav ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;