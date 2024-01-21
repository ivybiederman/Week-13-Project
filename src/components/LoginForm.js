// LoginForm.js
import React from 'react';
import './LoginForm.css'; // Import styles 

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-form">
        {/* Heading for the login form */}
        <h3>Log In</h3>
        {/* Form for entering username and password */}
        <form>
          {/* Username input field */}
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          {/* Password input field */}
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
