import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingForm.css'; // Ensure this is created with the appropriate styles


const BookingForm = () => {
  const location = useLocation();
  const { originalPrice, discountedPrice } = location.state || { originalPrice: 0, discountedPrice: 0 };

  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [formData, setFormData] = useState([{ name: '', age: '', occupation: '', gender: '' }]);
  const [tripDetails, setTripDetails] = useState({
    tripStartDate: '',
    tripEndDate: '',
    specialRequests: '',
  });

  const handleNumberOfPersonsChange = (e) => {
    const value = Math.max(1, Number(e.target.value)); // Ensure at least 1
    setNumberOfPersons(value);

    // Update formData to match the number of persons
    const newFormData = Array.from({ length: value }, (_, i) => ({
      name: formData[i]?.name || '',
      age: formData[i]?.age || '',
      occupation: formData[i]?.occupation || '',
      gender: formData[i]?.gender || '',
    }));
    setFormData(newFormData);
  };

  const handlePersonChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...formData];
    updatedData[index][name] = value;
    setFormData(updatedData);
  };

  const handleTripDetailsChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({ ...tripDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to confirmation page
    window.location.href = '/confirmation'; // Change this to use a proper routing method if necessary
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Number of Persons:</label>
          <input
            type="number"
            value={numberOfPersons}
            onChange={handleNumberOfPersonsChange}
            min="1"
            required
          />
        </div>
        {Array.from({ length: numberOfPersons }, (_, index) => (
          <div key={index} className="form-section">
            <h3>Traveler {index + 1} Information</h3>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData[index]?.name}
              onChange={(e) => handlePersonChange(index, e)}
              required
            />
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData[index]?.age}
              onChange={(e) => handlePersonChange(index, e)}
              required
            />
            <label>Occupation:</label>
            <input
              type="text"
              name="occupation"
              value={formData[index]?.occupation}
              onChange={(e) => handlePersonChange(index, e)}
              required
            />
            <label>Gender:</label>
            <select
              name="gender"
              value={formData[index]?.gender}
              onChange={(e) => handlePersonChange(index, e)}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        ))}
        <div className="form-section">
          <h3>Trip Details</h3>
          <label>Trip Start Date:</label>
          <input
            type="date"
            name="tripStartDate"
            value={tripDetails.tripStartDate}
            onChange={handleTripDetailsChange}
            required
          />
          <label>Trip End Date:</label>
          <input
            type="date"
            name="tripEndDate"
            value={tripDetails.tripEndDate}
            onChange={handleTripDetailsChange}
            required
          />
          <h3>Price Information</h3>
          <p>Original Price: ${originalPrice}</p>
          <p>Discounted Price: ${discountedPrice}</p>
        </div>
        <div className="form-section">
          <h3>Special Requests</h3>
          <label>Additional Information:</label>
          <textarea
            name="specialRequests"
            value={tripDetails.specialRequests}
            onChange={handleTripDetailsChange}
            rows="4"
            placeholder="Any special requests or additional information..."
          />
        </div>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
