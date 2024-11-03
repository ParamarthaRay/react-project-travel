// FlightBooking.js
import React from 'react';

import './FlightBooking.css';
import MainNavbar from './MainNavbars';
import Hero from './Hero';
import FlightList from './FlightList';
import Flight from './images/travel5.webp';

const FlightBooking = () => {
  

  return (
    <>
      <MainNavbar/>
      <Hero 
      cName="hero-mid"
      heroImg={Flight}
      title="Seamless Flight Booking for Your Next Adventure"
      text= "Fly smarter, book faster, and travel with total ease."
      btnClass="hide"
      />        
      <FlightList />
    </>
  );
};

export default FlightBooking;
