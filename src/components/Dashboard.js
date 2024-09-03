import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import Graphs from './Graphs';
import Table from './Table';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const userData = location.state?.userData || {};

  return (
    <div className="dashboard-container">
      <div className="profile-card">
        <ProfileCard userData={userData} />
      </div>
      <div className="graphs-container">
        <Graphs />
      </div>
      <div className="table-container">
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
