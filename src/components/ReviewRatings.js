import React from 'react';
import './ReviewRatings.css';
import MainNavbar from './MainNavbars';
import Hero from './Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination';  // Import pagination styles
import 'swiper/css/autoplay';     // Import autoplay styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import required modules
import Review from './images/travel12.webp';
const reviews = [
  {
    place: 'The Ritz-Carlton, New York',
    rating: 5,
    description: 'Absolutely luxurious stay with excellent service and stunning views of Central Park.',
    image: require('./images/ritz.jpg'),
  },
  {
    place: 'Taj Mahal, Agra',
    rating: 5,
    description: 'A magnificent symbol of love, the Taj Mahal is breathtaking both in architecture and beauty.',
    image: require('./images/taj-mahal.jpg'),
  },
  {
    place: 'Leela Palace, Udaipur',
    rating: 5,
    description: 'A regal experience with stunning views of the Lake Pichola and impeccable service.',
    image: require('./images/leela-palace.jpg'),
  },
  {
    place: 'Kerala Backwaters',
    rating: 4,
    description: 'A serene and picturesque getaway with lush greenery and tranquil waters.',
    image: require('./images/kerala-backwaters.jpg'),
  },
  {
    place: 'Resort ABC, Goa',
    rating: 3,
    description: 'Nice beach access but overcrowded during peak season. Facilities were lacking.',
    image: require('./images/resort-abc.jpg'),
  },
  {
    place: 'Oberoi Udaivilas, Udaipur',
    rating: 3,
    description: 'Beautiful property with amazing views, but the service was slow during our visit.',
    image: require('./images/oberoi-udaivillas.jpg'), // Update with the correct image path
  },
  {
    place: 'JW Marriott, Mumbai',
    rating: 3,
    description: 'Great amenities and food, but check-in was a hassle due to long wait times.',
    image: require('./images/jw-mariott-mumbai.jpg'), // Update with the correct image path
  },
];

const ReviewRatings = () => {
  return (
    <>
      <MainNavbar />
      <Hero 
        cName="hero-mid"
        heroImg={Review}
        title="Hotel Booking"
        text="Hurry! Book your World-Class hotels"
        btnClass="hide"
      />
      <div className="review-ratings">
        <h2>Review & Ratings</h2>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Include modules here
            spaceBetween={30} // Space between slides
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
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="review-card">
                  <img src={review.image} alt={review.place} />
                  <h3>{review.place}</h3>
                  <p>Rating: {review.rating} / 5</p>
                  <p>{review.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ReviewRatings;
