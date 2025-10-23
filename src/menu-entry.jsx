import React from 'react';
import { createRoot } from 'react-dom/client';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import './index.css';

createRoot(document.getElementById('menu-root')).render(
  <React.StrictMode>
    <div>
      <Navbar />
      <Menu />
    </div>
  </React.StrictMode>
);
