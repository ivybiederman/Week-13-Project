// App.js
import React from 'react';
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';
import './App.css'; // Import styles (if available)

function App() {
  return (
    <div className="App">
      {/* Display the Navigation component at the top */}
      <Navigation />
      {/* Display the LoginForm component in the center */}
      <LoginForm />
    </div>
  );
}

export default App;
