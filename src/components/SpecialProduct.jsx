import React from 'react';
import { motion } from 'framer-motion';

const SpecialProduct = () => {
    return (
        <section id="special-product" className="section">
            <div className="container">
                <h2 className="section-title">Special Product</h2>
                <div className="title-decorator">
                     <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10 C 10 0, 50 0, 60 10" stroke="#6b8e3c" strokeWidth="2" fill="transparent"/>
                    </svg>
                </div>
                <motion.div 
                    className="special-product-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="special-product-image">
                        <img src="/images/product-s.png" alt="Fine Bone China Teapot" />
                    </div>
                    <div className="special-product-info">
                        <h4>Caramel Macchiato</h4>
                        <p className="product-price">₱124/Buy 1 take 1</p>
                        <p className="product-status-tag">-10%</p>
                        <p className="regular-price">₱138</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SpecialProduct;