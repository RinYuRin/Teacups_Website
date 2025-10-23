import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    };
    const slides = [
        {
            image: '/images/hero-slide-1.jpg',
            title: 'Sip Happiness. Taste the Difference.',
            subtitle: 'Discover your new favorite milktea at TEACUP—crafted with premium tea, fresh ingredients, and a dash of creativity.'
        },
        {
            image: '/images/hero-slide-2.png',
            title: 'Refresh. Indulge. Repeat.',
            subtitle: 'From classic blends to bold new flavors, every cup is a celebration. Treat yourself to the TEACUP experience today!'
        },
        {
            image: '/images/hero-slide-3.jpg',
            title: 'Chill with Every Sip',
            subtitle: 'Cool down and enjoy our signature iced milktea creations—perfect for any mood, any moment.'
        },
        {
            image: '/images/hero-slide-4.png',
            title: 'Sip, Smile, Repeat!',
            subtitle: 'Show your flavor and dive into our fun, colorful milk tea creations—made to match your mood!'
        }
    ];
    return (
        <section className='hero-slider' id="hero">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div className="slide" style={{ backgroundImage: `url(${slide.image})` }}>
                            <motion.div
                                className="hero-content"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                <h1>{slide.title}</h1>
                                <p>{slide.subtitle}</p>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};
export default Hero;