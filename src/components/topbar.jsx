import React from 'react';
import './topbar.css';


const TopBar = ({ username }) => {
  return (
    <div className="topbar">
      {/* <div className="search-box">
        <input type="text" placeholder="Search" />
      </div> */}
    
      <div className="additional-items">
        {/* Add your additional items here */}
        {/* <div className="item"><IoMdNotifications className='icon-profile'/></div> */}
      
        {/* <div className='user'> <CgProfile className='icon-profile' /></div> */}
       
      </div>
    </div>
  );
};

export default TopBar;
