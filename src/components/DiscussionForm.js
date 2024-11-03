import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import './DiscussionForm.css';
import Footer from './Footer';

const DiscussionForm = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/'); // Redirect to home page after submit
  };

  return (
    <div className="discussion-form-page">
      <div className="discussion-form-container">
        <form className="discussion-form" onSubmit={handleSubmit}>
        <h1>Discussion on {slug.replace(/-/g, ' ')}</h1>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />
          
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer /> {/* Footer positioned directly below the form */}
    </div>
  );
};

export default DiscussionForm;
