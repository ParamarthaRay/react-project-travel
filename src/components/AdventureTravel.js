import React from 'react';
import './AdventureTravel.css';
import MainNavbar from './MainNavbars';
import Hero from './Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles and modules
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/autoplay'; // Import autoplay styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import required modules
import { Link } from 'react-router-dom'; // Import Link for navigation
import Adv from './images/travel8.webp';
const adventures = [
  {
    name: 'Mount Everest Camp Trek',
    description: 'A challenging 12-day trek to the base camp of the highest mountain in the world.',
    image: require('./images/everest.jpg'),
    path: '/adventures/everest', // Link to the specific adventure page
  },
  {
    name: 'African Safari',
    description: 'Experience the thrill of a safari across the Serengeti, lions, elephants, and more.',
    image: require('./images/safari.jpg'),
    path: '/adventures/safari', // Link to the specific adventure page
  },
  {
    name: 'Himalayan Trekking',
    description: 'Embark on an unforgettable trekking experience through the majestic Himalayas.',
    image: require('./images/himalayan_trekking.jpg'),
    path: '/adventures/himalayan', // Link to the specific adventure page
  },
  {
    name: 'Rajasthan Desert Safari',
    description: 'Experience the vibrant culture and thrilling adventures in the deserts of Rajasthan.',
    image: require('./images/rajasthan_desert.jpg'),
    path: '/adventures/rajasthan', // Link to the specific adventure page
  },
  {
    name: 'Goa Water Sports',
    description: 'Dive into thrilling water sports offered on the beautiful beaches of Goa.',
    image: require('./images/goa_water_sports.jpg'),
    path: '/adventures/goa', // Link to the specific adventure page
  },
];

const AdventureTravel = () => {
  return (
    <>
      <MainNavbar />
      <Hero
        cName="hero-mid"
        heroImg={Adv}
        title="Adventure Travel Like Never Before!"
        text= "Embark on thrilling journeys and create lifelong memories."
        btnClass="hide"
      />
      <div className="adventure-travel">
        <h2>Adventure Travel Experiences</h2>
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
            {adventures.map((adventure, index) => (
              <SwiperSlide key={index}>
                <div className="adventure-card">
                  <img src={adventure.image} alt={adventure.name} />
                  <h3>{adventure.name}</h3>
                  <p>{adventure.description}</p>
                  <Link to={adventure.path}>
                    <button>Explore Now</button>
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

export default AdventureTravel;
