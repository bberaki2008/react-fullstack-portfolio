import { useState } from 'react';
// import './style.css';

// Here we import a helper function that will check if the email is valid
import {validateEmail } from '../utils/helpers';

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName || !message) {
      setErrorMessage('Email is invalid or name and message are required');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }


    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setEmail('');
     setMessage('');
  };

  return (
    <div className="container text-center">
      <h1>Contact</h1>
      {/* <h1>Hello {userName}</h1> */}
      <form className="form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="userName">Name</label>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
          id="userName"
        />
        </div>
        <div className="form-group">
       <label htmlFor="email">Email</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          id="email"
        />
      </div>
      <div className="form-group">
       <label htmlFor="message">Message</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          id="message"
        />
        </div>
      
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

