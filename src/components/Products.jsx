import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';

// --- DATA FOR OUR FEATURES (PRODUCTS) ---
// This acts as a database for all your product categories
const priceDetails = [
    { label: "Regular", value: "₱20" },
    { label: "Medium", value: "₱30" },
    { label: "Large", value: "₱40" },
    { label: "Buy one take one", value: "₱40" }
];

const allProducts = {
    featured: [
        { id: 1, image: "/images/product-1.png", title: "Matcha", priceDetails },
        { id: 2, image: "/images/product-2.png", title: "Strawberry", priceDetails },
        { id: 3, image: "/images/product-3.png", title: "Dark Chocolate", priceDetails },
        { id: 4, image: "/images/product-4.png", title: "Okinawa", priceDetails },
    ],
    bestSellers: [
        { id: 2, image: "/images/product-2.png", title: "Strawberry", priceDetails },
        { id: 3, image: "/images/product-3.png", title: "Dark Chocolate", priceDetails },
        { id: 5, image: "/images/product-5.png", title: "Cookies and Cream", priceDetails },
    ],
    newProducts: [
        { id: 4, image: "/images/product-4.png", title: "Okinawa", priceDetails },
        { id: 1, image: "/images/product-1.png", title: "Matcha", priceDetails },
    ]
};

const Products = () => {
    const [activeFilter, setActiveFilter] = useState('featured');
    const [filteredItems, setFilteredItems] = useState(allProducts.featured);
    const sliderRef = useRef(null); // Reference to control the slider

    // When the filter changes, update the items and reset the slider to the first slide
    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        setFilteredItems(allProducts[filter]);
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0);
        }
    };

    // Settings for the react-slick slider component
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Changes slide every 3 seconds
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <section id="products" className="section">
            <div className="container">
                <h2 className="section-title">Trending Features</h2>
                <div className="title-decorator">
                    <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10 C 10 0, 50 0, 60 10" stroke="#6b8e3c" strokeWidth="2" fill="transparent"/>
                    </svg>
                </div>

                <div className="filter-buttons">
                    <button onClick={() => handleFilterClick('featured')} className={`filter-button ${activeFilter === 'featured' ? 'active' : ''}`}>Featured</button>
                    <button onClick={() => handleFilterClick('bestSellers')} className={`filter-button ${activeFilter === 'bestSellers' ? 'active' : ''}`}>Best Sellers</button>
                    <button onClick={() => handleFilterClick('newProducts')} className={`filter-button ${activeFilter === 'newProducts' ? 'active' : ''}`}>New Products</button>
                </div>

                <div className="product-slider-container">
                    <Slider ref={sliderRef} {...settings}>
                        {filteredItems.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-hover-overlay">
                                        <div className="hover-icons">
                                            <a href="#" className="hover-icon"><FaEye /></a>
                                            <a href="#" className="hover-icon"><FaHeart /></a>
                                            <a href="#" className="hover-icon"><FaShoppingCart /></a>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="product-title">{product.title}</h4>
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 6 }}>Price:</div>
                                        {product.priceDetails ? (
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                {product.priceDetails.map((p, idx) => (
                                                    <li key={idx} style={{ fontWeight: 700, fontSize: '12px', marginBottom: 2, letterSpacing: '0.01em' }}>{p.label}= <span style={{ fontWeight: 700 }}>{p.value}</span></li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div style={{ color: '#816356', fontSize: '1.1rem', margin: '0 0 10px 0', fontWeight: 500, textAlign: 'left' }}>
                                                {product.status === 'Out of Stock' ? (
                                                    <span style={{ color: '#ff4c4c', fontWeight: 600 }}>Out of Stock</span>
                                                ) : (
                                                    <span>{product.price}</span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Products;