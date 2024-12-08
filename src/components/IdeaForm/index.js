import React, { useState, useEffect } from 'react';
import './IdeaForm.scss';

const IdeaForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setEmailError('Email is required.');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    if (idea.trim()) {
      setIsSubmitted(true);
      // Handle form submission logic here
      console.log('Form submitted:', { email, idea });
      if (onSubmit) {
        onSubmit();
      }
      setTimeout(() => {
        setShowThankYou(true);
      }, 1000); // Show thank you message after form submission
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  return (
    <div>
      <form className="idea-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="idea">Idea:</label>
          <textarea
            id="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your idea"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" disabled={!idea.trim() || !email || !validateEmail(email)}>
            Submit
          </button>
        </div>
      </form>
      {showThankYou && <p className="thank-you">Thank you, this was sent somewhere.</p>}
    </div>
  );
};

export default IdeaForm;