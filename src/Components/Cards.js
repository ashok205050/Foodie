import React from 'react';
import './Cards.css';

export default function Cards() {
  return (
    <div className='Cards'>
      <section className="orderNow-card">
        <div className="card-content">
          <h2>Order Now</h2>
          <p>Enjoy our organic and delicious fast food, delivered fresh and fast.</p>
          <button className="orderNow-btn">Order Now</button>
        </div>
      </section>

      <section className="Restaurant">
        <div className="card-content">
          <h2>Reserve Your Table</h2>
          <p>Experience the best. Book your table now for an unforgettable dining experience!</p>
          <button className="orderNow-btn">Reserve Now</button>
        </div>
      </section>
    </div>
  );
}
