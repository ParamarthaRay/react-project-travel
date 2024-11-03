import React from 'react';
import { useParams } from 'react-router-dom';
import './DestinationDetails.css';

import Hero from './Hero';

// Example data for destinations (should match LocalGuides data)
const destinations = [
  {
    id: 1,
    name: 'Paris',
    details: 'Paris is known for its cafes, fashion, art, and landmarks like the Eiffel Tower, Notre-Dame, and the Louvre. Perfect for romantic getaways and art lovers.',
    image: require('./images/paris1.jpg'),
    highlightsImage: require('./images/paris2.jpg'), // New image for highlights section
    highlights: [
      'Eiffel Tower',
      'Louvre Museum',
      'Notre-Dame Cathedral',
      'Champs-Élysées'
    ],
  },
  {
    id: 2,
    name: 'Tokyo',
    details: 'Tokyo is a blend of modern skyscrapers and traditional temples. Famous for its food, shopping, and unique culture, Tokyo offers an unforgettable experience.',
    image: require('./images/tokyo1.jpg'),
    highlightsImage: require('./images/tokyo2.jpg'), // New image for highlights section
    highlights: [
      'Shibuya Crossing',
      'Meiji Shrine',
      'Tokyo Skytree',
      'Akihabara District'
    ],
  },
  {
    id: 3,
    name: 'Sydney',
    details: 'Sydney is known for its Opera House, Harbour Bridge, and stunning beaches like Bondi Beach. A great destination for both city exploration and outdoor activities.',
    image: require('./images/sydney1.jpg'),
    highlightsImage: require('./images/sydney2.jpg'), // New image for highlights section
    highlights: [
      'Sydney Opera House',
      'Harbour Bridge',
      'Bondi Beach',
      'Darling Harbour'
    ],
  },
  {
    id: 4,
    name: 'Rome',
    details: 'Rome is an ancient city rich in history. Landmarks like the Colosseum, Roman Forum, and the Vatican make it a perfect destination for history enthusiasts.',
    image: require('./images/rome1.jpg'),
    highlightsImage: require('./images/rome2.jpg'), // New image for highlights section
    highlights: [
      'Colosseum',
      'Roman Forum',
      'Vatican City',
      'Trevi Fountain'
    ],
  },
];

const DestinationDetails = () => {
  const { id } = useParams(); // Get the ID from the URL params
  const destination = destinations.find((dest) => dest.id === parseInt(id));

  if (!destination) {
    return <p>Destination not found</p>;
  }

  return (
    <div className="destination-details">
      <Hero 
      cName="hero-mid"
      heroImg="https://images.unsplash.com/photo-1729366791256-3b27e9c9068e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
      title="Hotel Booking"
      text="Hurry! Book your World-Class hotels"
      btnClass="hide"
      />
      <div className="destination-header">
        <img src={destination.image} alt={destination.name} className="destination-detail-image" />
        <div className="destination-info">
          <h1>{destination.name}</h1>
          <p className="destination-description">{destination.details}</p>
        </div>
      </div>

      <div className="destination-highlights-section">
        <div className="destination-highlights">
          <h2>Highlights</h2>
          <ul>
            {destination.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <img 
          src={destination.highlightsImage} 
          alt={`${destination.name} Highlights`} 
          className="highlights-image"
        />
      </div>

      <div className="call-to-action">
        <button className="cta-button">Book Now</button>
      </div>

    </div>
  );
};

export default DestinationDetails;
