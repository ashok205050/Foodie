import React from 'react';
import './Home.css';
import headerImage from '../Assets/Background.jpg'; // Correctly import the image

export default function Home() {
  return (
    <div className="home-page">
                  <img
            className="Background-image"
            alt="options"x
            src={headerImage}
          />
      <header className="home-header">
        <h1 className="header-title">
          <strong>Organic Fast Food Made <br /> Easy And Healthy</strong>
        </h1>
        <div className="searchbar">
          <input
            type="text"
            className="search-input-field"
            id="searchText"
            placeholder="Restaurant Name"
          />
          <button
            type="button"
            className="search-btn"
          >
            <b>Search</b>
          </button>
        </div>
      </header>
    </div>
  );
}
