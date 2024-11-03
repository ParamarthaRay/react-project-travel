import React from 'react';
import './ItineraryPlanning.css';
import MainNavbar from './MainNavbars';
import Hero from './Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Itinerary from './images/travel3.webp';
const itineraries = [
  {
    destination: 'Paris',
    duration: '5 Days',
    image: require('./images/paris.jpg'),
    description: 'A 5-day tour of the City of Lights, including the Eiffel Tower, Louvre Museum, and more.',
    itineraryDetails: {
      day1: 'Arrival and settle in, visit the Eiffel Tower.',
      day2: 'Louvre Museum and Seine River cruise.',
      day3: 'Versailles day trip.',
      day4: 'Explore Montmartre and Sacré-Cœur.',
      day5: 'Shopping at Champs-Élysées and departure.'
    }
  },
  {
    destination: 'Tokyo',
    duration: '7 Days',
    image: require('./images/tokyo.jpg'),
    description: 'Experience Tokyo in 7 days with visits to temples, sushi spots, and the bustling Shibuya.',
    itineraryDetails: {
      day1: 'Arrival, visit Senso-ji Temple.',
      day2: 'Explore Asakusa and Akihabara.',
      day3: 'Day trip to Mount Fuji.',
      day4: 'Shopping in Shibuya and Harajuku.',
      day5: 'Visit Tokyo Tower and Ueno Park.',
      day6: 'Explore Odaiba and TeamLab Borderless.',
      day7: 'Departure.'
    }
  },
  {
    destination: 'NewYork',
    duration: '6 Days',
    image: require('./images/nyc.jpg'),
    description: 'A week in NYC visiting Central Park, museums, and iconic landmarks.',
    itineraryDetails: {
      day1: 'Arrival and Times Square visit.',
      day2: 'Central Park and Metropolitan Museum.',
      day3: 'Statue of Liberty and Ellis Island.',
      day4: 'Broadway show and explore neighborhoods.',
      day5: '9/11 Memorial and Museum.',
      day6: 'Shopping in SoHo and departure.'
    }
  },
  {
    destination: 'Sydney',
    duration: '5 Days',
    image: require('./images/sydney.jpg'),
    description: 'Explore Sydney’s beaches, Opera House, and local cuisine.',
    itineraryDetails: {
      day1: 'Arrival and relax at Bondi Beach.',
      day2: 'Sydney Opera House and Harbor Bridge.',
      day3: 'Day trip to the Blue Mountains.',
      day4: 'Explore Darling Harbor and local markets.',
      day5: 'Visit Taronga Zoo and departure.'
    }
  },
  {
    destination: 'Rome',
    duration: '7 Days',
    image: require('./images/rome.jpg'),
    description: 'Discover ancient history and vibrant culture in Rome.',
    itineraryDetails: {
      day1: 'Arrival and visit the Colosseum.',
      day2: 'Explore the Vatican and St. Peter’s Basilica.',
      day3: 'Trevi Fountain and Spanish Steps.',
      day4: 'Day trip to Pompeii.',
      day5: 'Explore Trastevere and local cuisine.',
      day6: 'Shopping and departure.'
    }
  },
  {
    destination: 'CapeTown',
    duration: '6 Days',
    image: require('./images/cape-town.jpg'),
    description: 'Experience the beauty of Cape Town and its surroundings.',
    itineraryDetails: {
      day1: 'Arrival and visit Table Mountain.',
      day2: 'Explore the Cape of Good Hope.',
      day3: 'Visit Robben Island and local wineries.',
      day4: 'Stellenbosch and Franschhoek.',
      day5: 'Explore beaches and local markets.',
      day6: 'Departure.'
    }
  },
];

const ItineraryPlanning = () => {
  return (
    <>
      <MainNavbar />
      <Hero 
        cName="hero-mid"
        heroImg={Itinerary}
        title="Itinerary Planning"
        text="Plan your dream trip with us!"
        btnClass="hide"
      />
      <div className="itinerary-planning">
        <h2>Travel Itineraries</h2>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              700: { slidesPerView: 2 },
              1050: { slidesPerView: 3 },
            }}
          >
            {itineraries.map((itinerary, index) => (
              <SwiperSlide key={index}>
                <div className="itinerary-card">
                  <img src={itinerary.image} alt={itinerary.destination} />
                  <h3>{itinerary.destination}</h3>
                  <p>{itinerary.duration}</p>
                  <p>{itinerary.description}</p>
                  {/* Use Link for redirection */}
                  <Link to={`/itinerary/${itinerary.destination.toLowerCase()}`}>
                    <button>View Itinerary</button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ItineraryPlanning;
