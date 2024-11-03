import React from 'react';
import './CruiseBooking.css';
import MainNavbar from './MainNavbars';
import Hero from './Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles and required modules
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Cru from './images/travel10.webp';
const cruises = [
  {
    destination: 'Caribbean',
    duration: '7 Days',
    image: require('./images/caribbean.jpg'),
    ship: 'Royal Caribbean',
    price:'₹69,450'
  },
  {
    destination: 'Mediterranean',
    duration: '10 Days',
    image: require('./images/mediterranean.jpg'),
    ship: 'Carnival Cruise Line',
    price:'₹90,000',
  },
  {
    destination: 'Alaskan',
    duration: '8 Days',
    image: require('./images/alaskan.jpg'),
    ship: 'Norwegian Cruise Line',
    price:'₹77,000',
  },
  {
    destination: 'Hawaiian',
    duration: '7 Days',
    image: require('./images/hawaiian.jpg'),
    ship: 'Princess Cruises',
    price:'₹82,880',
  },
  {
    destination: 'European',
    duration: '14 Days',
    image: require('./images/european.jpg'),
    ship: 'MSC Cruises',
    price:'₹88,000',
  },
  {
    destination: 'Asian',
    duration: '10 Days',
    image: require('./images/asian.jpg'),
    ship: 'Costa Cruises',
    price:'₹70,400',
  },
];

const CruiseBooking = () => {
  return (
    <>
      <MainNavbar />
      <Hero 
        cName="hero-mid"
        heroImg={Cru}
        title="Set Sail on Your Dream Cruise!"
        text="Book now for unforgettable journeys across the seas."
        btnClass="hide"
      />
      <div className="cruise-booking">
        <h2>Cruise Booking</h2>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Updated modules
            spaceBetween={10} // Adjust space between slides
            navigation // Enable navigation arrows
            pagination={{ clickable: true }} // Enable pagination dots
            autoplay={{
              delay: 2000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Continue autoplay after interactions
            }}
            loop={true} // Enable loop mode
            breakpoints={{
              0: { slidesPerView: 1 },
              700: { slidesPerView: 2 },
              1050: { slidesPerView: 3 },
            }}
          >
            {cruises.map((cruise, index) => (
              <SwiperSlide key={index}>
                <div className="cruise-card">
                  <img src={cruise.image} alt={cruise.destination} />
                  <h3>{cruise.destination}</h3>
                  <p>Duration: {cruise.duration}</p>
                  <p>Ship: {cruise.ship}</p>
                  <p>Price:{cruise.price}</p>
                  <Link to="/book" className="book-cruise-button">Book Cruise</Link>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CruiseBooking;
