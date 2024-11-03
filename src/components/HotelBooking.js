import React from 'react';
import './HotelBooking.css';
import MainNavbar from './MainNavbars';
import Hero from './Hero';
import HotelList from './HotelList';
import hotelImage from './images/travel2.webp';

const HotelBooking = () => {
  return (
    <>
      <MainNavbar/>
      <Hero 
      cName="hero-mid"
      heroImg={hotelImage}
      title="Find Your Perfect Stay"
      text="Discover the best hotels at unbeatable prices and start your journey with comfort and style."
      btnClass="hide"
      />
      <HotelList />
    </>
  );
};

export default HotelBooking;
