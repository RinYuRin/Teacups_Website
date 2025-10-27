import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
    <motion.div
      className="about-grid"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.3 }}
        >
          <motion.div className="about-image" variants={{ offscreen: { x: -100, opacity: 0 }, onscreen: { x: 0, opacity: 1, transition: { duration: 0.8 } } }}>
            <img src="/images/About.png" alt="POS system in a cafe" />
          </motion.div>
          <motion.div className="about-content" variants={{ offscreen: { x: 100, opacity: 0 }, onscreen: { x: 0, opacity: 1, transition: { duration: 0.8 } } }}>
            <h2 className="section-title">TEACUP</h2>
            <p>Welcome to TEACUP—where milktea meets modern indulgence. We blend premium tea leaves, the freshest ingredients, and a spark of creativity to craft drinks that are as unique as you are.</p>
            <p>From iconic classics to bold new flavors, every cup is a celebration of taste and style. Whether you’re a seasoned milktea enthusiast or just starting your journey, TEACUP is your invitation to sip, savor, and discover your next obsession.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;