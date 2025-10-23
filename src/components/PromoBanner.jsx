import React from 'react';
// using a normal anchor because menu is a separate page (menu.html)
import { motion } from 'framer-motion';

const PromoBanner = () => {
    const backgroundStyle = {
        backgroundImage: "url('/images/backgoundcon.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section id="promo-banner" className="section promo-section" style={backgroundStyle}>
            <div className="container">
                <motion.div 
                    className="promo-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="promo-subtitle">TEACUP</h3>
                    <h2 className="promo-title">Sip the Difference.</h2>
                    <p className="promo-copy">Where every cup is crafted with passion, freshness, and a whole lot of love. From classic milk tea to bold new blends, TeaCUP is your spot for comfort, flavor, and happiness — all in one cup.</p>
                    <a href="/menu.html" className="promo-cta">MENU</a>
                </motion.div>
            </div>
        </section>
    );
};

export default PromoBanner;