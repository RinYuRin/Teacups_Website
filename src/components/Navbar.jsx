import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

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

    // We'll render a separate Menu link (opens /menu.html) alongside the scroll links

    return (
        <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container nav-container">
                <a href="#" className="nav-logo">
                    <img src="/images/logo.png" alt="Teacups POS Logo" />
                </a>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    {navLinks.map((link) => (
                        <li className="nav-item" key={link.to}>
                            {/* Use absolute anchor so link works from any page (e.g., /menu.html -> /#about) */}
                            <a href={`/#${link.to}`} className="nav-link" onClick={() => setNav(false)}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="nav-item">
                        <a href="/menu.html" className="nav-link" onClick={() => setNav(false)}>Menu</a>
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