import React from 'react';
import './Best.css';
import { FaHeart } from 'react-icons/fa';

const restaurantData = [
  {
    id: 1,
    name: 'The Gourmet Kitchen',
    logo: 'https://via.placeholder.com/100', // Replace with actual logo URL
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Urban Eatery',
    logo: 'https://via.placeholder.com/100',
    rating: 4.2,
  },
  {
    id: 3,
    name: 'Pasta Palace',
    logo: 'https://via.placeholder.com/100',
    rating: 4.0,
  },
  {
    id: 4,
    name: 'Sushi Central',
    logo: 'https://via.placeholder.com/100',
    rating: 4.8,
  },
  // Add more restaurants as needed
];

export default function Best() {
  return (
    <div className="best-container">
      <h2 className="best-title">Best in City</h2> {/* Title at the top */}
      <div className="restaurant-list">
        {restaurantData.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <img src={restaurant.logo} alt={`${restaurant.name} logo`} className="restaurant-logo" />
            <h3 className="restaurant-name">{restaurant.name}</h3>
            <div className="restaurant-rating">
              {'★'.repeat(Math.floor(restaurant.rating))}{' '}
              {'☆'.repeat(5 - Math.floor(restaurant.rating))}
            </div>
            <button className="favorite-button">
              <FaHeart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
