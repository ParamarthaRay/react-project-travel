import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TravelDeals.css'; // Ensure this contains the appropriate styles
import MainNavbar from './MainNavbars';
import Hero from './Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/autoplay'; // Import autoplay styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import required modules
import deal from './images/travel6.webp';
const travelDeals = [
  {
    destination: 'Hawaii',
    originalPrice: 800,
    discountedPrice: 680,
    image: require('./images/hawaii.jpg'),
  },
  {
    destination: 'Miami',
    originalPrice: 750,
    discountedPrice: 625,
    image: require('./images/miami.jpg'),
  },
  {
    destination: 'Bahamas',
    originalPrice: 900,
    discountedPrice: 765,
    image: require('./images/bahamas.jpg'),
  },
  {
    destination: 'Dubai',
    originalPrice: 850,
    discountedPrice: 665,
    image: require('./images/dubai.jpg'),
  },

  // Add more travel deals as needed
];

const TravelDeals = () => {
  const navigate = useNavigate();

  const handleBooking = (originalPrice, discountedPrice) => {
    navigate('/booking-form', {
      state: { originalPrice, discountedPrice },
    });
  };

  return (
    <>
      <MainNavbar />
      <Hero
        cName="hero-mid"
        heroImg={deal}
        title="Unbeatable Travel Deals Await!"
        text="Discover exclusive offers for your next unforgettable adventure today."
        btnClass="hide"
      />
      <div className="travel-deals">
        <h2>Travel Deals</h2>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Updated modules
            spaceBetween={10} // Space between slides
            navigation // Enable navigation arrows
            pagination={{ clickable: true }} // Enable pagination dots
            autoplay={{
              delay: 2000, // Delay between slides
              disableOnInteraction: false,
            }}
            loop={true} // Enable loop mode
            breakpoints={{
              0: { slidesPerView: 1 },
              700: { slidesPerView: 2 },
              1050: { slidesPerView: 3 },
            }}
          >
            {travelDeals.map((deal, index) => (
              <SwiperSlide key={index}>
                <div className="deal-card">
                  <img src={deal.image} alt={deal.destination} />
                  <h3>{deal.destination}</h3>
                  <p>Original Price: ${deal.originalPrice}</p>
                  <p>Discounted Price: ${deal.discountedPrice}</p>
                  <button onClick={() => handleBooking(deal.originalPrice, deal.discountedPrice)}>
                    Book Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TravelDeals;
