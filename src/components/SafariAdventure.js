import React from 'react';
import './AdventureDetail.css';
import safariImage from './images/safari.jpg';

const SafariAdventure = () => {
  return (
    <div className="adventure-detail">
      <img 
        src={safariImage}
        alt="African Safari" 
        className="adventure-image" 
      />
      <h1>African Safari</h1>
      <p>Experience the thrill of a safari across the Serengeti, spotting lions, elephants, and more.</p>
      <h2>Itinerary</h2>
      <ul>
        <li>Day 1: Arrival in Arusha</li>
        <li>Day 2: Safari in Tarangire National Park</li>
        <li>Day 3: Serengeti National Park exploration</li>
        <li>Day 4: Visit to the Arrancar Safari Park</li>
      </ul>
      <h2>What to Expect</h2>
      <p>Witness incredible wildlife and enjoy luxurious lodges in the heart of the African wilderness.</p>
    </div>
  );
};

export default SafariAdventure;
