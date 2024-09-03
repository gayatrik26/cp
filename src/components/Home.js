import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [userIds, setUserIds] = useState({
    leetcode: '',
    codeforces: '',
    hackerrank: '',
    geeksforgeeks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserIds({ ...userIds, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll use dummy data
    navigate('/dashboard', { state: { userData: userIds } });
  };

  return (
    <div className="home-container">
      <h2>Enter Your User IDs</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label>LeetCode User ID:</label>
          <input
            type="text"
            name="leetcode"
            value={userIds.leetcode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Codeforces User ID:</label>
          <input
            type="text"
            name="codeforces"
            value={userIds.codeforces}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>HackerRank User ID:</label>
          <input
            type="text"
            name="hackerrank"
            value={userIds.hackerrank}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>GeeksforGeeks User ID:</label>
          <input
            type="text"
            name="geeksforgeeks"
            value={userIds.geeksforgeeks}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Go to Dashboard</button>
      </form>
    </div>
  );
};

export default Home;
