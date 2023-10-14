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
function EditOrganization() {
  const { userId } = useParams();
  const { data, setData } = useUserData;

  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/Organization/${userId}`);
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
      await axios.put(`${BASE_URL}/api/v1/Organization/update/${userId}`, userDetails);

      // Redirect back to the user details page after updating
      navigate(`/organization/${userId}`);
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
      <h2 className='details_heading'>Edit Organization Details</h2>
      <div className='client-edit-list-container'>
      <form onSubmit={handleFormSubmit} className='form-container'>
        <div className='column'>
        <div className='form-group'> 
          <label>Associate ID:</label>
          <input type="text" name="AssociateID" value={userDetails.AssociateID || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Base Shop ID:</label>
          <input type="text" name="BaseShopID" value={userDetails.BaseShopID || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Upline ID:</label>
          <input type="text" name="UplineID" value={userDetails.UplineID || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>First Name :</label>
          <input type="text" name="FirstName" value={userDetails.FirstName || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Last Name :</label>
          <input type="text" name="LastName" value={userDetails.LastName || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Name Title :</label>
          <input type="text" name="NameTitle" value={userDetails.NameTitle || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Title Level :</label>
          <input type="text" name="TitleLevel" value={userDetails.TitleLevel || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Downline :</label>
          <input type="text" name="Downline" value={userDetails.Downline || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>License Date :</label>
          <input type="text" name="LicenseDate" value={userDetails.LicenseDate ? formatDatetime(userDetails.LicenseDate) : 'N/A' || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>A Date :</label>
          <input type="text" name="ADate" value={userDetails.ADate ? formatDatetime(userDetails.ADate) : 'N/A'|| ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>SA Date :</label>
          <input type="text" name="SADate" value={userDetails.SADate ? formatDatetime(userDetails.SADate) : 'N/A'|| ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>MD DAte :</label>
          <input type="text" name="MDDate" value={userDetails.MDDate ? formatDatetime(userDetails.MDDate) : 'N/A'|| ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>SMD Date :</label>
          <input type="text" name="SMDDate" value={userDetails.SMDDate ? formatDatetime(userDetails.SMDDate) : 'N/A'|| ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Inactive Date :</label>
          <input type="text" name="Inactivedate" value={userDetails.Inactivedate ? formatDatetime(userDetails.Inactivedate) : 'N/A' || ''} onChange={handleInputChange} />
        </div>
        </div>
        <div className='column2'>
        <div className='form-group'>
          <label>Home Street 1 :</label>
          <input type="text" name="HomeStreet1" value={userDetails.HomeStreet1 || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Home Street 2 :</label>
          <input type="text" name="HomeStreet2" value={userDetails.HomeStreet2 || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Home City :</label>
          <input type="text" name="HomeCity" value={userDetails.HomeCity || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Home State :</label>
          <input type="text" name="HomeState" value={userDetails.HomeState || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Home Postal :</label>
          <input type="text" name="HomePostal" value={userDetails.HomePostal || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Country :</label>
          <input type="text" name="Country" value={userDetails.Country || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Country 2 :</label>
          <input type="text" name="Country2" value={userDetails.Country_2 || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>LL FLag :</label>
          <input type="text" name="LLFLag" value={userDetails.LLFlag || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Work Email :</label>
          <input type="text" name="WorkEmail" value={userDetails.WorkEmail || ''} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Mobile :</label>
          <input type="text" name="Mobile" value={userDetails.Mobile || ''} onChange={handleInputChange} />
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

export default EditOrganization;
