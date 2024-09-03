import React from 'react';
import '../styles/RecentActivity.css';

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h3>Recent Activity</h3>
      <ul>
        <li>Coin Change - 7 minutes ago</li>
        <li>Palindromic Substrings - a day ago</li>
        <li>Longest Increasing Path in a Matrix - a day ago</li>
        {/* Add more activities as needed */}
      </ul>
    </div>
  );
};

export default RecentActivity;
