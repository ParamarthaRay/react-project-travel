import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetail.css';

const blogData = {
  'exploring-the-alps': {
    title: 'Exploring the Alps',
    content: (
      <>
        <p>
          The Swiss Alps are a mountain range that separates Switzerland from Italy, renowned for their breathtaking scenery and outdoor activities. Visitors flock to the Alps for skiing, snowboarding, hiking, and climbing, making it a year-round destination for adventure enthusiasts.
        </p>
        <h3>Highlights of the Swiss Alps:</h3>
        <ul>
          <li>Majestic peaks and stunning vistas</li>
          <li>Charming alpine villages</li>
          <li>World-class ski resorts</li>
          <li>Rich cultural experiences</li>
        </ul>
        <p>
          Whether you’re exploring the quaint streets of Zermatt or taking in the views from Jungfraujoch, the Swiss Alps offer something for everyone. Don’t forget to try traditional Swiss cuisine, including fondue and raclette!
        </p>
      </>
    ),
    image: require('./images/alps.jpg'),
  },
  'beaches-of-bali': {
    title: 'Beaches of Bali',
    content: (
      <>
        <p>
          Bali is known for its stunning beaches and vibrant culture. This Indonesian paradise is famous for its lush landscapes, rich traditions, and warm hospitality. From tranquil retreats to lively beach clubs, Bali has it all.
        </p>
        <h3>Must-Visit Beaches in Bali:</h3>
        <ul>
          <li>Seminyak Beach - Great for sunsets and nightlife</li>
          <li>Uluwatu Beach - Known for its surf breaks</li>
          <li>Nusa Dua - Family-friendly with calm waters</li>
          <li>Padang Padang - Famous for its beauty and surf culture</li>
        </ul>
        <p>
          Enjoy beachside relaxation, indulge in spa treatments, and explore local markets for unique crafts and souvenirs. Bali truly is a tropical paradise!
        </p>
      </>
    ),
    image: require('./images/bali.jpg'),
  },
  'safari-adventure-in-africa': {
    title: 'Safari Adventure in Africa',
    content: (
      <>
        <p>
          Experience the wild side of Africa on a thrilling safari tour. The African savanna is home to incredible wildlife, breathtaking landscapes, and unique cultures. From the Big Five to spectacular sunsets, a safari offers memories to last a lifetime.
        </p>
        <h3>Top Safari Destinations:</h3>
        <ul>
          <li>Serengeti National Park, Tanzania</li>
          <li>Masai Mara National Reserve, Kenya</li>
          <li>Kruger National Park, South Africa</li>
          <li>Chobe National Park, Botswana</li>
        </ul>
        <p>
          Whether you choose to travel by jeep or on foot, every safari offers an opportunity to connect with nature and witness the beauty of wildlife in their natural habitat.
        </p>
      </>
    ),
    image: require('./images/safari.jpg'),
  },
  'cultural-journey-through-japan': {
    title: 'Cultural Journey Through Japan',
    content: (
      <>
        <p>
          Discover the rich history and culture of Japan, from ancient temples to modern cities. Japan offers a unique blend of traditional and contemporary experiences that captivate every traveler.
        </p>
        <h3>Highlights of Japan:</h3>
        <ul>
          <li>Tokyo - A bustling metropolis with cutting-edge technology</li>
          <li>Kyoto - Home to historic temples and traditional tea houses</li>
          <li>Osaka - Known for its delicious street food and vibrant nightlife</li>
          <li>Hiroshima - A city with a profound historical significance</li>
        </ul>
        <p>
          Don't miss out on experiencing a traditional tea ceremony or enjoying a kaiseki meal, which showcases seasonal ingredients and artful presentation.
        </p>
      </>
    ),
    image: require('./images/japan.jpg'),
  },
  'road-trip-across-america': {
    title: 'Road Trip Across America',
    content: (
      <>
        <p>
          Join us on an unforgettable road trip across the USA, exploring iconic landmarks and hidden gems. From coast to coast, the American landscape offers diverse terrains, cultures, and experiences.
        </p>
        <h3>Key Stops on the Journey:</h3>
        <ul>
          <li>New York City - The city that never sleeps</li>
          <li>Grand Canyon - A breathtaking natural wonder</li>
          <li>Yellowstone National Park - Home to stunning geysers and wildlife</li>
          <li>San Francisco - Iconic Golden Gate Bridge and vibrant neighborhoods</li>
        </ul>
        <p>
          This journey allows you to create lasting memories, meet incredible people, and enjoy the freedom of the open road!
        </p>
      </>
    ),
    image: require('./images/america.jpg'),
  },
  'trekking-the-himalayas': {
    title: 'Trekking the Himalayas',
    content: (
      <>
        <p>
          Experience breathtaking views and diverse cultures while trekking through the Himalayas. The highest mountain range in the world offers various trekking routes suitable for all levels of adventurers.
        </p>
        <h3>Popular Trekking Routes:</h3>
        <ul>
          <li>Everest Base Camp Trek - A once-in-a-lifetime experience</li>
          <li>Annapurna Circuit - Diverse landscapes and rich cultural experiences</li>
          <li>Langtang Valley Trek - Stunning views and fewer crowds</li>
          <li>Gokyo Lakes Trek - Picturesque lakes and Himalayan scenery</li>
        </ul>
        <p>
          Engage with local communities, taste authentic Himalayan cuisine, and enjoy the tranquility of nature as you embark on this incredible journey.
        </p>
      </>
    ),
    image: require('./images/himalayan_trekking.jpg'),
  },
};

const BlogDetail = () => {
  const { blogSlug } = useParams();
  const blog = blogData[blogSlug];

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <div className="blog-content">{blog.content}</div>
    </div>
  );
};

export default BlogDetail;
