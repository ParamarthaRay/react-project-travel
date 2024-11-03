import React from 'react';
import './Home.css';
import MainNavbar from './MainNavbars';
import Hero from './Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import A from './images/adventure.jpg';
import B from './images/kyoto.jpg';
import C from './images/resort-abc.jpg';
import E from './images/caribbean.jpg';
import D from './images/himalayan_trekking.jpg';
import F from './images/safari.jpg';
import G from './images/goa_water_sports.jpg';
import heroImage from './images/travel.webp';

const Home = () => {
  return (
    <>
      <MainNavbar />
      <Hero 
        cName="hero"
        heroImg={heroImage}
        title="Your Journey Your Story"
        text="Welcome to Your Dream Travel Website!"
        buttonText="Start Your Planning!"
        url="/"
        btnClass="show"
      />
      <div className="homemain">
        <p>
          Whether you're planning your next vacation, seeking budget travel tips, or ready to book an adventure,
          we’ve got it all covered. Explore hotels, flights, itineraries, and much more.
        </p>
        <div className="home-carousel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 3 },
              700: { slidesPerView: 4 },
              14000: { slidesPerView: 5 },
            }}
          >
            <SwiperSlide>
              <img src={A} alt="Adventure" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={B} alt="Cruise" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={C} alt="Safari" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={D} alt="Beach" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={E} alt="Mountain" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={F} alt="Mountain" className="carousel-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={G} alt="Mountain" className="carousel-image" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Customer Reviews Section */}
        <div className="customer-reviews">
          <h2>What Our Customers Say</h2>
          <div className="reviews-container">
            <div className="review-box">
              <blockquote>
                "Our trip was unforgettable! The planning was seamless, and every detail was taken care of."
                <cite>- Sarah J.</cite>
              </blockquote>
            </div>
            <div className="review-box">
              <blockquote>
                "Absolutely loved the personalized itineraries! Highly recommend."
                <cite>- Mark T.</cite>
              </blockquote>
            </div>
            <div className="review-box">
              <blockquote>
                "The experience was exceptional! I can't wait for my next adventure."
                <cite>- Priya S.</cite>
              </blockquote>
            </div>
            <div className="review-box">
              <blockquote>
                "Amazing service! Everything was well organized and exceeded my expectations."
                <cite>- Rahul M.</cite>
              </blockquote>
            </div>
            <div className="review-box">
              <blockquote>
                "The trip was perfectly organized. I had an amazing time exploring new places!"
                <cite>- Neha R.</cite>
              </blockquote>
            </div>
            <div className="review-box">
              <blockquote>
                "A fantastic journey! The guides were knowledgeable and friendly."
                <cite>- Vikram S.</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
