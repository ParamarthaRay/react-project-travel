import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TravelForum.css';
import MainNavbar from './MainNavbars';
import Hero from './Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Forum from './images/travel11.webp';
const threads = [
  {
    title: 'Best places to visit in Japan?',
    author: 'Traveler123',
    replies: 15,
    image: require('./images/japan.jpg'),
    slug: 'japan-places',
  },
  {
    title: 'Hidden gems in Southeast Asia',
    author: 'Explorer88',
    replies: 10,
    image: require('./images/southeast_asia.jpg'),
    slug: 'southeast-asia-gems',
  },
  {
    title: 'Tips for solo travel',
    author: 'Adventurer77',
    replies: 8,
    image: require('./images/solo_travel.jpg'),
    slug: 'solo-travel-tips',
  },
  // New threads
  {
    title: 'Best street food in Thailand',
    author: 'Foodie42',
    replies: 12,
    image: require('./images/thailand_food.jpg'),
    slug: 'thailand-street-food',
  },
  {
    title: 'Exploring the wonders of New Zealand',
    author: 'NatureLover99',
    replies: 18,
    image: require('./images/new_zealand.jpg'),
    slug: 'new-zealand-wonders',
  },
  {
    title: 'Cultural experiences in India',
    author: 'CultureSeeker',
    replies: 20,
    image: require('./images/india_culture.jpg'),
    slug: 'india-cultural-experiences',
  },
  {
    title: 'Adventure sports in Costa Rica',
    author: 'ThrillSeeker',
    replies: 5,
    image: require('./images/costa_rica.jpg'),
    slug: 'costa-rica-adventure',
  },
  {
    title: 'Wildlife safaris in Africa',
    author: 'SafariExpert',
    replies: 14,
    image: require('./images/safari.jpg'),
    slug: 'africa-wildlife-safari',
  },
];

const TravelForum = () => {
  const navigate = useNavigate();

  const handleJoinDiscussion = (slug) => {
    navigate(`/discussion/${slug}`); // Redirect to the discussion form
  };

  return (
    <>
      <MainNavbar />
      <Hero 
        cName="hero-mid"
        heroImg={Forum}
        title="Join the Travel Talk!"
        text="Share stories, tips, and connect with fellow travelers."
        btnClass="hide"
      />
      <div className="travel-forum">
        <h2>Travel Forum Threads</h2>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
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
            {threads.map((thread, index) => (
              <SwiperSlide key={index}>
                <div className="forum-thread">
                  <img src={thread.image} alt={thread.title} />
                  <h3>{thread.title}</h3>
                  <p>Posted by: {thread.author}</p>
                  <p>Replies: {thread.replies}</p>
                  <button onClick={() => handleJoinDiscussion(thread.slug)}>Join Discussion</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TravelForum;
