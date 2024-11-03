import React from 'react';
import './TCard.css';
import { Link } from 'react-router-dom';

const cruises = [
  {
    destination: 'Caribbean',
    duration: '7 Days',
    image: '/images/caribbean.jpg',
    ship: 'Royal Caribbean',
  },
  {
    destination: 'Mediterranean',
    duration: '10 Days',
    image: '/images/mediterranean.jpg',
    ship: 'Carnival Cruise Line',
  },
  // Add more cruises here
];

function TCard() {
  return (
    <div className='card__container'>
      {cruises.map((cruise, index) => (
        <div className='card' key={index}>
          <img src={cruise.image} alt={cruise.destination} className="card__image" />
          <div className='card__info'>
            <div className='row1'>
              <p>Destination: <span>{cruise.destination}</span></p>
            </div>
            <div className='row2'>
              <p>Duration: <span>{cruise.duration}</span></p>
              <p>Ship: <span>{cruise.ship}</span></p>
            </div>
          </div>
          <div className='card__btn'>
            <Link to="/book">Book Cruise</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TCard;
