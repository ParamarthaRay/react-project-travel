import React from 'react';
import { useParams } from 'react-router-dom';
import './ItineraryDetails.css'; // Create a separate CSS file for this component

const itineraryDetailsData = {
  paris: {
    title: 'Paris Itinerary',
    image: require('./images/paris.jpg'), // Add the image path for Paris
    details: [
      'Day 1: Arrival and settle in, visit the Eiffel Tower.',
      'Day 2: Louvre Museum and Seine River cruise.',
      'Day 3: Versailles day trip.',
      'Day 4: Explore Montmartre and Sacré-Cœur.',
      'Day 5: Shopping at Champs-Élysées and departure.',
    ],
  },
  tokyo: {
    title: 'Tokyo Itinerary',
    image: require('./images/tokyo.jpg'), // Add the image path for Tokyo
    details: [
      'Day 1: Arrival, visit Senso-ji Temple.',
      'Day 2: Explore Asakusa and Akihabara.',
      'Day 3: Day trip to Mount Fuji.',
      'Day 4: Shopping in Shibuya and Harajuku.',
      'Day 5: Visit Tokyo Tower and Ueno Park.',
      'Day 6: Explore Odaiba and TeamLab Borderless.',
      'Day 7: Departure.',
    ],
  },
  newyork: {
    title: 'New York City Itinerary',
    image: require('./images/nyc.jpg'), // Add the image path for New York
    details: [
      'Day 1: Arrival and Times Square visit.',
      'Day 2: Central Park and Metropolitan Museum.',
      'Day 3: Statue of Liberty and Ellis Island.',
      'Day 4: Broadway show and explore neighborhoods.',
      'Day 5: 9/11 Memorial and Museum.',
      'Day 6: Shopping in SoHo and departure.',
    ],
  },
  sydney: {
    title: 'Sydney Itinerary',
    image: require('./images/sydney.jpg'), // Add the image path for Sydney
    details: [
      'Day 1: Arrival and relax at Bondi Beach.',
      'Day 2: Sydney Opera House and Harbor Bridge.',
      'Day 3: Day trip to the Blue Mountains.',
      'Day 4: Explore Darling Harbor and local markets.',
      'Day 5: Visit Taronga Zoo and departure.',
    ],
  },
  rome: {
    title: 'Rome Itinerary',
    image: require('./images/rome.jpg'), // Add the image path for Rome
    details: [
      'Day 1: Arrival and visit the Colosseum.',
      'Day 2: Explore the Vatican and St. Peter’s Basilica.',
      'Day 3: Trevi Fountain and Spanish Steps.',
      'Day 4: Day trip to Pompeii.',
      'Day 5: Explore Trastevere and local cuisine.',
      'Day 6: Shopping and departure.',
    ],
  },
  capetown: {
    title: 'Cape Town Itinerary',
    image: require('./images/cape-town.jpg'), // Add the image path for Cape Town
    details: [
      'Day 1: Arrival and visit Table Mountain.',
      'Day 2: Explore the Cape of Good Hope.',
      'Day 3: Visit Robben Island and local wineries.',
      'Day 4: Stellenbosch and Franschhoek.',
      'Day 5: Explore beaches and local markets.',
      'Day 6: Departure.',
    ],
  },
};

const ItineraryDetails = () => {
  const { destination } = useParams();
  const normalizedDestination = destination.toLowerCase().replace(/ /g, ''); // Handle spaces and make lowercase
  const itinerary = itineraryDetailsData[normalizedDestination];

  return (
    <div className="itinerary-details">
      {itinerary ? (
        <>
          <h1>{itinerary.title}</h1>
          <img src={itinerary.image} alt={`${itinerary.title}`} className="itinerary-image" /> {/* Render the image */}
          <ul>
            {itinerary.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Itinerary not found.</p>
      )}
    </div>
  );
};

export default ItineraryDetails;
