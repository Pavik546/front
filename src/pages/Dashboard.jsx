import React from 'react';
import axios from 'axios';
import BASE_URL from '../appconfig';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token'); // Get the user's token from local storage
      if (token) {
        // Send a POST request to the logout endpoint with the token in the headers
        const response = await axios.post(`${BASE_URL}/logout`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          // Clear the token on successful logout
          localStorage.removeItem('token');
          
          navigate('/');// This is a simple example; you can use react-router for better navigation
        }
      }
    } catch (error) {
      // Handle any errors, such as network issues
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Dashboard;
