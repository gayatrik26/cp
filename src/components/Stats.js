import React from 'react';
import '../styles/Stats.css';


function Stats() {
  const stats = {
    easy: 45,
    medium: 75,
    hard: 30,
  };

  return (
    <div className="community-stats">
      <h2>Problem Solving Stats</h2>
      <p>Easy: {stats.easy}</p>
      <p>Medium: {stats.medium}</p>
      <p>Hard: {stats.hard}</p>
    </div>
  );
}

export default Stats;
