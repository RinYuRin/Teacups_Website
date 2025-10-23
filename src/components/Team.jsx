import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    { name: "Aldrin Sebastian", role: "CO-OWNER", image: "/images/TEAM/CO-OWNER.png" },
    { name: "Rhea Reyno", role: "STORE OWNER", image: "/images/TEAM/STORE%20OWNER.png" },
    { name: "Leonilyn Fajilagot", role: "BARISTA", image: "/images/TEAM/BARISTA.png" }
];

const Team = () => {
    const cardVariants = {
        offscreen: { scale: 0.5, opacity: 0 },
        onscreen: (i) => ({
            scale: 1,
            opacity: 1,
            transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: i * 0.2 }
        })
    };

    return (
        <section id="team" className="section">
            <div className="container">
                <h2 className="section-title">Meet The Team</h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            className="team-member" 
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.5 }}
                            custom={index}
                            variants={cardVariants}
                        >
                            <img src={member.image} alt={member.name} />
                            <h4>{member.name}</h4>
                            <p>{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;