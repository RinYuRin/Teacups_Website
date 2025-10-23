import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaBoxOpen, FaChartLine, FaHeart } from 'react-icons/fa';

// Data for our features remains the same
const featuresData = [
    { icon: <FaBoxOpen />, title: "Real-Time Inventory", description: "Keep track of every tea leaf and teacup. Get low-stock alerts so you never run out of a customer favorite." },
    { icon: <FaChartLine />, title: "Sales Analytics", description: "Get powerful insights with easy reports. Understand your best-selling products and busiest hours." },
    { icon: <FaHeart />, title: "Customer Loyalty", description: "Build a loyal customer base with integrated rewards. Keep your regulars coming back for more." }
];

const Features = () => {
    // Settings for the react-slick slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 items on desktop
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Changes slide every 3 seconds
        responsive: [
            {
                breakpoint: 992, // For tablets
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768, // For mobile phones
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section id="features" className="section">
            <div className="container">
                <h2 className="section-title">Everything You Need to Sell</h2>
                <div className="features-slider-container">
                    <Slider {...settings}>
                        {featuresData.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="feature-card">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Features;