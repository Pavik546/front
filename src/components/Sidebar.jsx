import React, { useState } from 'react';
import { RiOrganizationChart ,RiLogoutBoxRLine} from "react-icons/ri"

import {GrServerCluster} from "react-icons/gr"
import {FaRegNewspaper} from "react-icons/fa"
import {SlCalender} from "react-icons/sl"
import logo from '../../src/assets/logo.png';
import logo2 from '../../src/assets/logo2.png';
import axios from 'axios';  // Import Axios or use 'fetch'

import {FaTh} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useUserData } from '../pages/Context';
const Sidebar = ({children}) => {
    const {roleid} = useUserData();
    console.log(roleid);
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const togglelogo = () => setIsOpen (!isOpen);

    const handleLogout = async () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            try {
                // Send a request to the /logout API endpoint
                await axios.post('http://localhost:5000/logout', {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` // Include the user's token
                    }
                });

                // Clear the user's token and any other necessary data
                localStorage.removeItem('token');
                
                // Redirect the user to the login page or perform any other required action
                window.location.replace('/'); // You may navigate to a login page or perform any other action
            } catch (error) {
                console.error('Error during logout:', error);
            }
        }
    };

    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh className='icon-img'/>
            //icon:<img src={s1} alt="s1" className="icon-img"/>
        },
        {
            path:"/organization",
            name:"Organization",
            //icon:<img src={s2} alt="s2" className="icon-img"/>
            icon:<RiOrganizationChart className='icon-img'/> 
        },
        {
            path:"/providerProduct",
            name:"Providers Product",
            icon:<GrServerCluster/>
        },
        {
            path:"/commissionRates",
            name:"Commission Rates",
            icon:<FaRegNewspaper className='icon-img'/>
        },
        {
            path:"/fiscalCalendar",
            name:"Fiscal Calendar",
            icon:<SlCalender className='icon-img'/>
        },
        {
            path:"/goals",
            name:"Goal Types",
            icon:<SlCalender className='icon-img'/>
        },
       
        
    ]
    return (
        <div className="container">
            <div className='sidebar-container'>
           <div style={{width: isOpen ? "300px" : "70px"}} className="sidebar">
               <div className="top_section">
                   <p style={{display: isOpen ? "block" : "none"}} className="logo"> <img src={logo2} alt="Logo" style={{ width: '200px',
                    height: '50.943px'}}  onClick={togglelogo}/></p>
                  <p style={{ marginLeft: isOpen ? "100px" : "0px" }} className="bars">
                    <img src={logo}  style={{width :isOpen ? "0px" :"42px"}} alt="Menu Icon" onClick={toggle} />
                </p>
               </div>
               {menuItem.map((item, index) => (
                        (roleid === 1 || (roleid === 2 && (item.path === "/organization" ))) ? (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                    {item.name}
                                </div>
                            </NavLink>
                        ) : null
                    ))}
                    {roleid === 1 || roleid === 2 ? (
                        <div className="link" onClick={handleLogout}>
                            <div className="icon"><RiLogoutBoxRLine className='icon-img' /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Log Out</div>
                        </div>
                    ) : null}
           </div>

           <main>{children}</main>
          
           </div>
            </div>
        
    );
};

export default Sidebar;