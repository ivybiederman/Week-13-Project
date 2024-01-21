// Navigation.js
import React from 'react';
import './Navigation.css'; // Import styles

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar">
        {/* Navbar links */}
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </nav>
    );
  }
}
