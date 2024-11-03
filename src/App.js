import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainNavbar from './components/MainNavbars';
import Home from './components/Home';
import HotelBooking from './components/HotelBooking';
import TravelBlog from './components/TravelBlog';
import BlogDetail from './components/BlogDetail';
import ItineraryPlanning from './components/ItineraryPlanning';
import ItineraryDetails from './components/ItineraryDetails';
import FlightBooking from './components/FlightBooking';
import TravelDeals from './components/TravelDeals';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import AdventureTravel from './components/AdventureTravel';
import EverestAdventure from './components/EverestAdventure';
import SafariAdventure from './components/SafariAdventure';
import HimalayanAdventure from './components/HimalayanAdventure';
import RajasthanAdventure from './components/RajasthanAdventure';
import GoaAdventure from './components/GoaAdventure';
import LocalGuides from './components/LocalGuides';
import DestinationDetails from './components/DestinationDetails';
import CruiseBooking from './components/CruiseBooking';
import TravelForum from './components/TravelForum';
import DiscussionForm from './components/DiscussionForm';
import ReviewRatings from './components/ReviewRatings';
import TicketBooking from './components/TicketBooking';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import DataAppProvider from './components/DataApp';
import Login from './components/Login';
import Register from './components/Register';
import Book from './components/Book';

import './App.css';

function App() {
  const location = useLocation();

  // Hide the Navbar on specific routes, including destination itinerary pages
  const hideNavbar = 
    location.pathname === '/book' || 
    location.pathname === '/booking-form' || 
    location.pathname.startsWith('/local-guides/') || 
    location.pathname.startsWith('/adventures/') || 
    location.pathname.startsWith('/itinerary/') || 
    location.pathname.startsWith('/discussion/') ||
    location.pathname.startsWith('/blogs/'); // Added blogs routes to hide navbar

  const showFooter = 
    location.pathname !== '/book' && 
    location.pathname !== '/booking-form';

  const handleBuyClick = () => {
    // Logic for handling buy click, if necessary
  };

  return (
    <DataAppProvider>
      <div className="App">
        {!hideNavbar && <MainNavbar />} {/* Hide navbar conditionally */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/travel-blog" element={<TravelBlog />} />
          <Route path="/blogs/:blogSlug" element={<BlogDetail />} />
          <Route path="/itinerary-planning" element={<ItineraryPlanning />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/travel-deals" element={<TravelDeals />} />
          <Route path="/booking-form" element={<BookingForm />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/adventure-travel" element={<AdventureTravel />} />
          <Route path="/local-guides" element={<LocalGuides />} />
          <Route path="/local-guides/:id" element={<DestinationDetails />} />
          <Route path="/cruise-booking" element={<CruiseBooking />} />
          <Route path="/travel-forum" element={<TravelForum />} />
          <Route path="/discussion/:slug" element={<DiscussionForm />} />
          <Route path="/review-ratings" element={<ReviewRatings />} />
          <Route path="/ticket-booking" element={<TicketBooking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book" element={<Book onBuyClick={handleBuyClick} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/itinerary/:destination" element={<ItineraryDetails />} />
          <Route path="/adventures/everest" element={<EverestAdventure />} />
          <Route path="/adventures/safari" element={<SafariAdventure />} />
          <Route path="/adventures/himalayan" element={<HimalayanAdventure />} />
          <Route path="/adventures/rajasthan" element={<RajasthanAdventure />} />
          <Route path="/adventures/goa" element={<GoaAdventure />} />
        </Routes>
        {showFooter && <Footer />} {/* Show footer conditionally */}
      </div>
    </DataAppProvider>
  );
}

export default App;
