import React from 'react';
import './TravelBlog.css';
import MainNavbar from './MainNavbars';
import Hero from './Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Blog from './images/travel4.webp';
const blogs = [
  {
    title: 'Exploring the Alps',
    excerpt: 'Discover the beauty of the Swiss Alps in this immersive travel guide.',
    image: require('./images/alps.jpg'),
    author: 'John Traveler',
    detailsPath: '/blogs/exploring-the-alps',
  },
  {
    title: 'Beaches of Bali',
    excerpt: 'Unwind on the serene beaches of Bali and soak in the sun.',
    image: require('./images/bali.jpg'),
    author: 'Sarah Wanderlust',
    detailsPath: '/blogs/beaches-of-bali',
  },
  {
    title: 'Safari Adventure in Africa',
    excerpt: 'Experience the wild side of Africa on a thrilling safari tour.',
    image: require('./images/safari.jpg'),
    author: 'Alex Explorer',
    detailsPath: '/blogs/safari-adventure-in-africa',
  },
  {
    title: 'Cultural Journey Through Japan',
    excerpt: 'Immerse yourself in the rich culture and traditions of Japan.',
    image: require('./images/japan.jpg'),
    author: 'Hiro Tanaka',
    detailsPath: '/blogs/cultural-journey-through-japan',
  },
  {
    title: 'Road Trip Across America',
    excerpt: 'Embark on a classic road trip adventure across the USA.',
    image: require('./images/america.jpg'),
    author: 'Emily Traveler',
    detailsPath: '/blogs/road-trip-across-america',
  },
  {
    title: 'Trekking the Himalayas',
    excerpt: 'Join us for an unforgettable trekking experience in the Himalayas.',
    image: require('./images/himalayan_trekking.jpg'),
    author: 'Raj Kumar',
    detailsPath: '/blogs/trekking-the-himalayas',
  },
];

const TravelBlog = () => {
  return (
    <>
      <MainNavbar />
      <Hero 
        cName="hero-mid"
        heroImg={Blog}
        title="Discover the World Through Stories"
        text="Journey through experiences, tips, and tales for every traveler."
        btnClass="hide"
      />
      <div className="travel-blog">
        <h2>Travel Blogs</h2>
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
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="blog-card">
                  <img src={blog.image} alt={blog.title} />
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <p>Author: {blog.author}</p>
                  <Link to={blog.detailsPath}>
                    <button>Read More</button>
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

export default TravelBlog;
