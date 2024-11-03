import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LocalGuides.css';
import MainNavbar from './MainNavbars';
import Hero from './Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination';  // Import pagination styles
import 'swiper/css/autoplay';     // Import autoplay styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import required modules
import Guide from './images/travel9.webp'
// Example data for destinations
const destinations = [
  {
    id: 1,
    name: 'Paris',
    description: 'Explore the city of love with its beautiful landmarks like the Eiffel Tower.',
    image: require('./images/paris.jpg'),
  },
  {
    id: 2,
    name: 'Tokyo',
    description: 'Experience the bustling life of Japan’s capital city.',
    image: require('./images/tokyo.jpg'),
  },
  {
    id: 3,
    name: 'Sydney',
    description: 'Discover the iconic Sydney Opera House and beautiful beaches.',
    image: require('./images/sydney.jpg'),
  },
  {
    id: 4,
    name: 'Rome',
    description: 'Visit the ancient landmarks of Rome like the Colosseum and the Pantheon.',
    image: require('./images/rome.jpg'),
  },
  // Add more destinations as needed
];

const LocalGuides = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/local-guides/${id}`);
  };

  return (
    <>
      <MainNavbar />
      <Hero 
        cName="hero-mid"
        heroImg={Guide}
        title="Discover with Expert Local Guides!"
        text="Experience authentic adventures led by knowledgeable local guides."
        btnClass="hide"
      />
      <div className="local-guides">
        <h2>Local Travel Guides</h2>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Include modules here
            spaceBetween={10} // Space between slides
            navigation // Enable navigation arrows
            pagination={{ clickable: true }} // Enable pagination dots
            autoplay={{
              delay: 2000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Continue autoplay after user interactions
            }}
            loop={true} // Enable loop mode
            breakpoints={{
              0: { slidesPerView: 1 },
              700: { slidesPerView: 2 },
              1050: { slidesPerView: 3 },
            }}
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.id}>
                <div className="destination-card">
                  <img src={destination.image} alt={destination.name} className="destination-image" />
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <button onClick={() => handleReadMore(destination.id)}>Read More</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LocalGuides;
