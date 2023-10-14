// EditUser.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopBar from '../../components/topbar';
import { useUserData } from '../Context';
import BASE_URL from '../../appconfig';

function EditFiscalCalendar() {
  const { userId } = useParams();
  const { data, setData} = useUserData();

  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/Fiscal/${userId}`);
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
      await axios.put(`${BASE_URL}/api/v1/Fiscal/update/${userId}`, userDetails);

      // Redirect back to the user details page after updating
      navigate(`/fiscalCalendar/${userId}`);
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
      <h2 className='details_heading'>Edit Fiscal Calendar Details</h2>
      <div className='client-edit-list-container'>
      <form onSubmit={handleFormSubmit} className='form-container'>
      <div className='column'>
        <div className='form-group'>
          <label>Calendar date :</label>
          <input type="text" name="Calendar_Date" value={userDetails.Calendar_Date || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Day :</label>
          <input type="text" name="Day_Num" value={userDetails.Day_Num || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Week :</label>
          <input type="text" name="Week_Num" value={userDetails.Week_Num || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Month :</label>
          <input type="text" name="Month_Num" value={userDetails.Month_Num || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Quarter :</label>
          <input type="text" name="Quarter_Num" value={userDetails.Quarter_Num || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Year :</label>
          <input type="text" name="Year" value={userDetails.Year || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Month Name :</label>
          <input type="text" name="Month_Name" value={userDetails.Month_Name || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Month Year :</label>
          <input type="text" name="Month_Year" value={userDetails.Month_Year || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Quarter Year :</label>
          <input type="text" name="Quarter_Year" value={userDetails.Quarter_Year  || ''} onChange={handleInputChange} />
        </div>
        </div>
        <div className='column2'>
        <div className='form-group'>
          <label>Pay Cycle :</label>
          <input type="text" name="Pay_Cycle" value={userDetails.Pay_Cycle || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Fiscal Month :</label>
          <input type="text" name="Fiscal_Month" value={userDetails.Fiscal_Month || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Fiscal Quarter :</label>
          <input type="text" name="Fiscal_Quarter" value={userDetails.Fiscal_Quarter || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Fiscal Year :</label>
          <input type="text" name="Fiscal_Year" value={userDetails.Fiscal_Year || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>HI Qual Period :</label>
          <input type="text" name="HI_Qual_Period" value={userDetails.HI_Qual_Period || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>NLA GA Qual Period :</label>
          <input type="text" name="NLA_GA_Qual_Period" value={userDetails.NLA_GA_Qual_Period || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Tiger Qual Period :</label>
          <input type="text" name="Tiger_Qual_Period" value={userDetails.Tiger_Qual_Period || ''} onChange={handleInputChange} />
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

export default EditFiscalCalendar;
