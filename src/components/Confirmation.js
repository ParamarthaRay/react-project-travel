// Confirmation.js
import React from 'react';
import './Confirmation.css'; // Import the CSS file for styling

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <h2>Trip Booking Confirmed!</h2>
        <p>Thank you for booking your trip with us!</p>
        <p>A confirmation email has been sent to your registered email address.</p>
        <button onClick={() => window.location.href = '/'}>Go to Home</button>
      </div>
    </div>
  );
};

export default Confirmation;
