import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './IdeaForm.scss';

const IdeaForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const validateEmail = (email) => {
    const efficientRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return efficientRe.test(String(email).toLowerCase());
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
      console.log('Form submitted:', { email, idea });
      if (onSubmit) {
        onSubmit();
      }
      setTimeout(() => {
        setShowThankYou(true);
      }, 300);
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
      {showThankYou && isSubmitted && <p className="thank-you">Thank you, this was sent somewhere.</p>}
    </div>
  );
};

IdeaForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default IdeaForm;