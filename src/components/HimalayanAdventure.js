import React from 'react';
import './AdventureDetail.css';
import Himalayan from './images/himalayan_trekking.jpg';

const HimalayanAdventure = () => {
  return (
    <div className="adventure-detail">
      <img 
        src={Himalayan} 
        alt="Himalayan Trekking" 
        className="adventure-image" 
      />
      <h1>Himalayan Trekking</h1>
      <h3>Embark on an unforgettable trekking experience through the majestic Himalayas.</h3>
      <h2>Itinerary</h2>
      <ul>
        <li>Day 1: Arrival in Dharamshala</li>
        <li>Day 2: Trek to Triund</li>
        <li>Day 3: Explore the snow-capped peaks</li>
        <li>Day 4: Return to Dharamshala and departure</li>
      </ul>
      <h2>What to Expect</h2>
      <h3>Experience breathtaking views, serene landscapes, and the chance to immerse yourself in local culture.</h3>
    </div>
  );
};

export default HimalayanAdventure;
