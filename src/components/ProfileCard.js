import React from 'react';
import '../styles/ProfileCard.css';

const ProfileCard = ({ userData }) => {
  // Handle case where userData might be undefined
  if (!userData) {
    return <div className="profile-card">No user data available</div>;
  }

  return (
    <div className="profile-card">
      <h3>User Profile</h3>
      <p>LeetCode ID: {userData.leetcode || 'Not Provided'}</p>
      <p>Codeforces ID: {userData.codeforces || 'Not Provided'}</p>
      <p>HackerRank ID: {userData.hackerrank || 'Not Provided'}</p>
      <p>GeeksforGeeks ID: {userData.geeksforgeeks || 'Not Provided'}</p>
    </div>
  );
};

export default ProfileCard;
