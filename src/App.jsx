import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import PromoBanner from './components/PromoBanner';
import About from './components/About';
import SpecialProduct from './components/SpecialProduct';
import Team from './components/Team';
import Contact from './components/Contact';
import MapPanel from './components/MapPanel';
import Footer from './components/Footer';
import SmartsuppChat from './components/SmartsuppChat';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
  <SpecialProduct />
  <Team />
  <PromoBanner />
  <MapPanel />
  <Contact />
      </main>
      <Footer />
      <SmartsuppChat />
    </>
  );
}

export default App;