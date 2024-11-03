import React from 'react';
import './AdventureDetail.css'; // Create a separate CSS file for styling
import Eve from './images/everest.jpg';

const EverestAdventure = () => {
  return (
    <div className="adventure-detail">
      <img 
        src={Eve}
        alt="Mount Everest Base Camp Trek" 
        className="adventure-image" 
      />
      <h1>Mount Everest Base Camp Trek</h1>
      <p>
        The Mount Everest Base Camp Trek is one of the most iconic treks in the world. 
        This challenging 12-day trek takes you to the base camp of the highest mountain, 
        where you'll experience stunning views, vibrant culture, and the thrill of adventure.
      </p>
      <h2>Itinerary</h2>
      <ul>
        <li>Day 1: Arrival in Kathmandu</li>
        <li>Day 2: Flight to Lukla and trek to Phakding</li>
        <li>Day 3: Trek to Namche Bazaar</li>
        <li>... (more days)</li>
      </ul>
      <h2>What to Expect</h2>
      <p>
        Highlights of the trek include visiting Sherpa villages, exploring the Khumbu region, 
        and experiencing the hospitality of the local communities. Prepare for an unforgettable 
        journey!
      </p>
    </div>
  );
};

export default EverestAdventure;
