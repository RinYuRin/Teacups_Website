import React from 'react';
import { motion } from 'framer-motion';
import { FaCashRegister, FaReceipt, FaChartPie } from 'react-icons/fa';

const stepsData = [
    { icon: <FaCashRegister />, title: "Take an Order", description: "A simple, touch-friendly interface makes taking orders fast and error-free." },
    { icon: <FaReceipt />, title: "Process Payment", description: "Securely accept cash, card, and mobile payments with integrated hardware." },
    { icon: <FaChartPie />, title: "Track Everything", description: "Every sale automatically updates your inventory and sales reports in real-time." }
];

const HowItWorks = () => {
    const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: (i) => ({
          y: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: i * 0.2 }
        })
    };

    return (
        <section id="how-it-works" className="section">
            <div className="container">
                <h2 className="section-title">How It Works</h2>
                <div className="how-it-works-grid">
                    {stepsData.map((step, index) => (
                         <motion.div 
                            className="step-card" 
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.5 }}
                            custom={index}
                            variants={cardVariants}
                         >
                            <div className="step-number">0{index + 1}</div>
                            <div className="feature-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;