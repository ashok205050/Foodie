import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import './Navbar.css';

export default function Navbar({ onLoginClick }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="Navbar">
            <img src={logo} alt="Logo" />
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'} {/* Use "X" when open, "☰" for hamburger icon */}
            </div>
            <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <a href="#">Restaurants</a>
                <a onClick={onLoginClick} style={{ cursor: 'pointer' }}>Login / Register</a> {/* Call the function on click */}
                <a href="#">Register Restaurant</a>
            </div>
        </div>
    );
}
