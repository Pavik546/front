// EditUser.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopBar from '../../components/topbar';
import { useUserData } from '../Context';
import BASE_URL from '../../appconfig';

function formatDatetime(datetimeString) {
  const date = new Date(datetimeString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
function EditProvider() {
  const { data, setData } = useUserData();

  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/Product/${userId}`);
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
      await axios.put(`${BASE_URL}/api/v1/Product/update/${userId}`, userDetails);

      // Redirect back to the user details page after updating
      navigate(`/product/${userId}`);
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
      <h2 className='details_heading'>Edit User Details</h2>
      <div className='client-edit-list-container'>

      <form onSubmit={handleFormSubmit} className='form-container'>
      <div className='column'>
        <div className='form-group'>
          <label>Provider Name :</label>
          <input type="text" name="Provider_Name" value={userDetails.Provider_Name || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Commission Rate Matrix :</label>
          <input type="text" name="Commission_Rate_Matrix" value={userDetails.Commission_Rate_Matrix || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Support Name : </label>
          <input type="text" name="Support_Name" value={userDetails.Support_Name || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Product Type :</label>
          <input type="text" name="Product_Type" value={userDetails.Product_Type || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Product :</label>
          <input type="text" name="Product" value={userDetails.Product || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Commission Rate 1 :</label>
          <input type="text" name="Commission_Rate_1" value={userDetails.Commission_Rate_1 || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Effective Date 1 :</label>
          <input type="text" name="Effective_Date_1" value={userDetails.Effective_Date_1 ? formatDatetime(userDetails.Effective_Date_1) : 'N/A' || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Commission Rate 2 :</label>
          <input type="text" name="Commission_Rate_2" value={userDetails.Commission_Rate_2 || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Effective Date 2 :</label>
          <input type="text" name="Effective_Date_2" value={userDetails.Effective_date_2 ? formatDatetime(userDetails.Effective_date_2) : 'N/A' || ''} onChange={handleInputChange} />
        </div>
        </div>
        <div className='column2'>
        <div className='form-group'>
          <label>Commission Rate 3 :</label>
          <input type="text" name="Commission_Rate_1" value={userDetails.Commission_Rate_3} />
        </div>
        <div className='form-group'>
          <label>Effective Date 3 :</label>
          <input type="text" name="Effective_Date_3" value={userDetails.Effective_Date_3 ? formatDatetime(userDetails.Effective_Date_3) : 'N/A'|| ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Commission Rate 4 :</label>
          <input type="text" name="Commission_Rate_4" value={userDetails.Commission_Rate_4} />
        </div>
        <div className='form-group'>
          <label>Effective Date 4 :</label>
          <input type="text" name="Effective_Date_4" value={userDetails.Effective_Date_4 ? formatDatetime(userDetails.Effective_Date_4) : 'N/A'|| ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Commission Rate 5 :</label>
          <input type="text" name="Commission_Rate_5" value={userDetails.Commission_Rate5 } />
        </div>
        <div className='form-group'>
          <label>Effective Date 5 :</label>
          <input type="text" name="Effective_Date_5" value={userDetails.Effective_Date_5 ? formatDatetime(userDetails.Effective_Date_5) : 'N/A' || ''} onChange={handleInputChange} />
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

export default EditProvider;
