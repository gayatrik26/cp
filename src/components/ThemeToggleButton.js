import React from 'react';
import '../styles/ThemeToggleButton.css'; // Create this CSS file for styling

const ThemeToggleButton = ({ toggleTheme }) => {
  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
