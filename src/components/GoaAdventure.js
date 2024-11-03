import React from 'react';
import './AdventureDetail.css';
import Goa from './images/goa_water_sports.jpg';

const GoaAdventure = () => {
  return (
    <div className="adventure-detail">
      <img 
        src={Goa}
        alt="Goa Water Sports" 
        className="adventure-image" 
      />
      <h1>Goa Water Sports</h1>
      <p>Dive into the thrilling water sports offered on the beautiful beaches of Goa.</p>
      <h2>Itinerary</h2>
      <ul>
        <li>Day 1: Arrival in Goa</li>
        <li>Day 2: Enjoy parasailing and jet skiing</li>
        <li>Day 3: Explore the beaches and relax</li>
        <li>Day 4: Departure</li>
      </ul>
      <h2>What to Expect</h2>
      <p>Experience thrilling adventures, crystal clear waters, and vibrant nightlife.</p>
    </div>
  );
};

export default GoaAdventure;
