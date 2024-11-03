// TicketBooking.js
import React from 'react';
import './TicketBooking.css'; // Assuming you will create a CSS file for styling
import MainNavbar from './MainNavbars';
import Hero from './Hero';
const TicketBooking = () => {
  return (
    <div className="ticket-booking">
      <MainNavbar/>
      <Hero />
      <h2>Your Ticket has been Booked!</h2>
      <p>Thank you for booking your ticket with us!</p>
      <p>We have sent a confirmation email to your registered email address.</p>
      <p>Details of your booking:</p>
      <ul>
        <li><strong>Destination:</strong> New York</li>
        <li><strong>Price:</strong> $450</li>
        <li><strong>Airline:</strong> Delta</li>
        {/* Add more booking details as needed */}
      </ul>
      <button onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );
};

export default TicketBooking;
