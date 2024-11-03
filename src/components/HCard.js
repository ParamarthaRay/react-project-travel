import React from 'react';
import "./HCard.css";
import StarIcon from '@mui/icons-material/Star';
import LuggageIcon from '@mui/icons-material/Luggage';
import { Link } from 'react-router-dom';

function HCard({
  from,
  hotels,
  setHotels,
  filteredHotels,
  setFilteredHotels
}) {
  return (
    <div className='card__container'>
      {filteredHotels &&
        filteredHotels.map((hotel, index) => (
          <div className='card' key={index}>
            <div className='card__info'>
              <div className='row1'>
                <p>City: <span>{hotel ? hotel.city : ""}</span></p>
              </div>
              <div className='row1'>
                <p>Hotel Name: <span>{hotel ? hotel.hotel_name : ""}</span></p>
                <p>Room Type: <span>{hotel ? hotel.room_type : ""}</span></p>
              </div>
              <div className='row2'>
                <p>Check In: <span>{hotel ? hotel.check_in : ""}</span></p>
                <p>Rating: <span>{hotel ? hotel.rating : ""}</span> <StarIcon /></p>
                <p>Check Out: <span>{hotel ? hotel.check_out : ""}</span></p>
              </div>
              <div className='row3'>
                <p>Guests: <span>{hotel ? hotel.guests : ""}</span> <LuggageIcon /></p>
                <p>Price: <span>{hotel ? hotel.price_per_night : ""}</span></p>
              </div>
            </div>
            <div className='card__btn'>
              <Link to="/book">Book</Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default HCard;
