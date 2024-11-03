import React from 'react';
import './AdventureDetail.css';
import rajiImage from './images/rajasthan_desert.jpg';

const RajasthanAdventure = () => {
  return (
    <div className="adventure-detail">
      <img 
        src={rajiImage} 
        alt="Rajasthan Desert Safari" 
        className="adventure-image" 
      />
      <h1>Rajasthan Desert Safari</h1>
      <p>Experience the vibrant culture and thrilling adventures in the deserts of Rajasthan.</p>
      <h2>Itinerary</h2>
      <ul>
        <li>Day 1: Arrival in Jaisalmer</li>
        <li>Day 2: Camel safari and desert camping</li>
        <li>Day 3: Visit Jaisalmer Fort and local markets</li>
        <li>Day 4: Departure</li>
      </ul>
      <h2>What to Expect</h2>
      <p>Explore the golden sands, witness stunning sunsets, and enjoy traditional Rajasthani cuisine.</p>
    </div>
  );
};

export default RajasthanAdventure;
