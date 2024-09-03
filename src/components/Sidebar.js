import React from 'react';
import '../styles/Sidebar.css';
// import React from 'react';
import ProfileCard from './ProfileCard';
import Stats from './Stats';
// import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ProfileCard />
      <Stats />
    </div>
  );
}

export default Sidebar;
