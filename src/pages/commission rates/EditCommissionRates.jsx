// EditUser.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopBar from '../../components/topbar';
import { useUserData } from '../Context';
import BASE_URL from '../../appconfig';
function EditCommissionRates() {
  const { userId } = useParams();
  const { data, setData} = useUserData;

  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/Commision/${userId}`);
        setUserDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the user details
      await axios.put(`${BASE_URL}/api/v1/Commision/update/${userId}`,userDetails );

      // Redirect back to the user details page after updating
      navigate(`/commissionRates/${userId}`);
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <TopBar />
      <div className='main-container'>
      <h2 className='details_heading'>Edit Commission Rates Details</h2>
      <div className='client-edit-list-container'>
      <form onSubmit={handleFormSubmit} className='form-container'>
        <div className='column'>
        <div className='form-group'>
          <label>Commission rate ID :</label>
          <input type="text" name="Commission_Rate_ID" value={userDetails.Commission_Rate_ID || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Level :</label>
          <input type="text" name="Level" value={userDetails.Level || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Level Abbr : </label>
          <input type="text" name="Level_Abbr" value={userDetails.Level_Abbr || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Level Description :</label>
          <input type="text" name="Level_Description" value={userDetails.Level_Description || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Contract Rate Matrix :</label>
          <input type="text" name="Contract_Rate_Matrix" value={userDetails.Contract_Rate_Matrix || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Contract Rate :</label>
          <input type="text" name="Contract_Rate" value={userDetails.Contract_Rate || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Contract Level :</label>
          <input type="text" name="Contract_Level" value={userDetails.Contract_Level  || ''} onChange={handleInputChange} />
        </div>
        </div>
        <div className='column2'>
        <div className='form-group'>
          <label>T Override Rate :</label>
          <input type="text" name="T_Override_Rate" value={userDetails.T_Override_Rate || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>TA Override Rate :</label>
          <input type="text" name="TA_Override_Rate" value={userDetails.TA_Override_Rate|| ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>A Override Rate :</label>
          <input type="text" name="A_Override_Rate" value={userDetails.A_Override_Rate || ''} onChange={handleInputChange}/>
        </div>
        <div className='form-group'>
          <label>SA Override Rate :</label>
          <input type="text" name="SA_Override_Rate" value={userDetails.SA_Override_Rate|| ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>MD Override Rate :</label>
          <input type="text" name="MD_Override_Rate" value={userDetails.MD_Override_Rate || ''} onChange={handleInputChange}/>
        </div>
        <div className='form-group'>
          <label>SMD Override Rate :</label>
          <input type="text" name="SMD_Override_Rate" value={userDetails.SMD_Override_Rate || ''} onChange={handleInputChange} />
        </div>
        </div>
      
      </form>
      </div>
      <div className='button-container'>
        <button type="submit" onClick={handleFormSubmit}>Cancel</button>
        
        <button type="submit" onClick={handleFormSubmit}>Save</button>
        </div>
    </div>
    </div>
  );
}

export default EditCommissionRates;
