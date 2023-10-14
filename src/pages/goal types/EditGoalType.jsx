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
function EditGoalType() {
  const { userId } = useParams();
  const { data, setData } = useUserData();

  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/Goal/${userId}`);
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
      await axios.put(`${BASE_URL}/api/v1/Goal/update/${userId}`, userDetails);

      // Redirect back to the user details page after updating
      navigate(`/goals/${userId}`);
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
      <h2 className='details_heading'>Edit Goal Details</h2>
      <div className='client-edit-list-container'>
      <form onSubmit={handleFormSubmit} className='form-container'>
        <div className='column'>
        <div className='form-goals-group'> 
          <label >Goal Type :</label>
          <input type="text" name="AssociateID" value={userDetails.Goal_Type || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Goal Category :</label>
          <input type="text" name="BaseShopID" value={userDetails.Goal_Category || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Cohort :</label>
          <input type="text" name="UplineID" value={userDetails.Cohort || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Start  Date :</label>
          <input type="text" name="FirstName" value={userDetails.Start_Date || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Rolling  Target  End  Date :</label>
          <input type="text" name="LastName" value={userDetails.Rolling_Target_End_Date || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label> 3Month Rolling Target End Date :</label>
          <input type="text" name="NameTitle" value={userDetails._3Month_Rolling_Target_End_Date || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label> 6Month Rolling Target End Date :</label>
          <input type="text" name="TitleLevel" value={userDetails._6Month_Rolling_Target_End_Date || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label> 12Month Rolling End Date :</label>
          <input type="text" name="Downline" value={userDetails._12Month_Rolling_End_Date || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Contest End Date :</label>
          <input type="text" name="LicenseDate" value={userDetails.Contest_End_Date  || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Personal Life License Target :</label>
          <input type="text" name="ADate" value={userDetails.Personal_Life_License_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Personal Health License Target :</label>
          <input type="text" name="SADate" value={userDetails.Personal_Health_License_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Personal Recruits Target :</label>
          <input type="text" name="MDDate" value={userDetails.Personal_Recruits_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Personal Apps Target :</label>
          <input type="text" name="SMDDate" value={userDetails.Personal_Apps_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Personal Points Target :</label>
          <input type="text" name="Inactivedate" value={userDetails.Personal_Points_Target  || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Personal Field Training Appointments :</label>
          <input type="text" name="HomeStreet1" value={userDetails.Personal_Field_Training_Appointments || '-'} onChange={handleInputChange} />
        </div>
        
        </div>
        <div className='column2'>
        
        <div className='form-goals-group'>
          <label>Base New Recruits Target :</label>
          <input type="text" name="HomeStreet2" value={userDetails.Base_New_Recruits_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Base Life Licensed Agents Target :</label>
          <input type="text" name="HomeCity" value={userDetails.Base_Life_Licensed_Agents_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Base Direct Agents Target :</label>
          <input type="text" name="HomeState" value={userDetails.Base_Direct_Agents_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Base Sr Direct Agents Target :</label>
          <input type="text" name="HomePostal" value={userDetails.Base_Sr_Direct_Agents_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Base Apps Target :</label>
          <input type="text" name="Country" value={userDetails.Base_Apps_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Base Points Target :</label>
          <input type="text" name="Country2" value={userDetails.Base_Points_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Base to 1st Gen New Recruits Target :</label>
          <input type="text" name="LLFLag" value={userDetails.Base_to_1st_Gen_New_Recruits_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Base to 1st Gen Net Recruits Target :</label>
          <input type="text" name="WorkEmail" value={userDetails.Base_to_1st_Gen_Net_Recruits_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Base to 1st Gen SMDs Target :</label>
          <input type="text" name="Mobile" value={userDetails.Base_to_1st_Gen_SMDs_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Base to 1st Gen Net Points Target 6 months :</label>
          <input type="text" name="Mobile" value={userDetails.Base_to_1st_Gen_Net_Points_Target_6_months || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Base to 1st Gen Net Points Target 12 months :</label>
          <input type="text" name="Mobile" value={userDetails.Base_to_1st_Gen_Net_Points_Target_12_months || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Cash Flow 3 Month Target :</label>
          <input type="text" name="Mobile" value={userDetails.Cash_Flow_3_Month_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Cash Flow 6 Month Target :</label>
          <input type="text" name="Mobile" value={userDetails.Cash_Flow_6_Month_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Cash Flow 12 Month Target :</label>
          <input type="text" name="Mobile" value={userDetails.Cash_Flow_12_Month_Target || '-'} onChange={handleInputChange} />
        </div>
        <div className='form-goals-group'>
          <label>Cash Flow Growth Target :</label>
          <input type="text" name="Mobile" value={userDetails.Cash_Flow_Growth_Target || '-'} onChange={handleInputChange} />
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

export default EditGoalType;
