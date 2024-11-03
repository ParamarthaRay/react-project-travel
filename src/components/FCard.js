import React from 'react';
import './FCard.css';
import { Link } from 'react-router-dom';
import FlightIcon from '@mui/icons-material/Flight';

function FCard({
  filteredflights,
}) {
  return (
    <div className='card__container'>
      {filteredflights &&
        filteredflights.map((flight, index) => (
          <div className='card' key={index}>
            <div className='card__info'>
              <div className='row1'>
                <FlightIcon style={{ marginRight: '5px' }} />
                <div>Airline: <span>{flight?.airlineName || ''}</span></div>
              </div>
              <div className='row1'>
                <p>From: <span>{flight?.from || ''}</span></p>
                <p>Via: <span>{flight?.via?.[0] || ''}</span></p>
                <p>To: <span>{flight?.to || ''}</span></p>
              </div>
              <div className='row2'>
                <p>Departure: <span>{flight?.departure?.departureTime || ''} | {flight?.departure?.departureDate || ''}</span></p>
                <p>Return: <span>{flight?.return?.returnTime || ''} | {flight?.return?.returnDate || ''}</span></p>
              </div>
              <div className='row3'>
                <p>Duration: <span>{flight?.duration || ''}</span></p>
                <p>Price: <span>{flight?.price || ''}</span></p>
              </div>
            </div>
            <div className='card__btn'>
              <Link to='/book'>Book</Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default FCard;
