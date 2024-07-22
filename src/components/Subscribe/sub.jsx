import React, { useState, useEffect } from 'react';
import './sub.css'; // Import the CSS file

const SubscribePage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    subscribeToNewsletter(email);
  };

  const subscribeToNewsletter = (email) => {
    // Placeholder for subscription logic
    // You can replace this with an API call or other logic
    console.log(`Subscribing with email: ${email}`);
    
    // Set the submission state
    setIsSubmitted(true);
    
    // Optionally, reset the email field
    setEmail('');

    // Set a timer to reset the isSubmitted state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000); // 5000 milliseconds = 5 seconds
  };

  return (
    <div className="subscribe-container">
      <h1>Subscribe to Our Newsletter</h1>
      <form onSubmit={handleSubscribe} className="subscribe-form">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email address"
          required
          className="subscribe-input"
        />
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
      {isSubmitted && <p className="success-message" style={{fontSize:'1.3rem'}}>Thank you for subscribing!</p>}
    </div>
  );
};

export default SubscribePage;
