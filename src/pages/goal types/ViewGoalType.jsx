
import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
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
function ViewGoalType() {
    const navigate = useNavigate();
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data, setData } = useUserData();


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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userDetails) {
    return <div>User not found</div>;
  }

  return (
    <div className="App">
      <TopBar />
      
      <div className='main-container'>

      <h2 className='details_heading'>Goal Type Details</h2>
      <div className='client-view-list-container'>
      <div className='heading-edit-button'>
      <h2 className='details-heading-main'>Goal Details</h2>
      <button onClick={() => navigate(`/edit/goals/${userId}`)}>Edit</button>
      </div>

      <div className='details form-container'>
      <div className='column'>
      <div className='form-group'>
        <span className='details-goals-heading'>Goal Type :</span> 
        <span className='details-value'>{userDetails.Goal_Type||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Goal Category :</span> 
        <span className='details-value'>{userDetails.Goal_Category||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Cohort : </span> 
        <span className='details-value'>{userDetails.Cohort||"-"}</span>
      </div>
     
     
      <div className='form-group'>
        <span className='details-goals-heading'>Start Date :</span> 
        <span className='details-value'>{userDetails.Start_Date||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Rolling Target End Date :</span> 
        <span className='details-value'>{userDetails.Rolling_Target_End_Date||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>3 Month Rolling Target End Date :</span> 
        <span className='details-value'>{userDetails._3Month_Rolling_Target_End_Date||"-"}</span>
      </div>
      </div >
      <div className='column2'>
      <div className='form-group'>
        <span className='details-goals-heading'>6 Month Rolling Target End Date :</span>
        <span className='details-value'> {userDetails._6Month_Rolling_Target_End_Date ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>12 Month Rolling End Date :</span>
        <span className='details-value'> {userDetails._12Month_Rolling_End_Date || '-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Contest End Date:</span> 
        <span className='details-value'>{userDetails.Contest_End_Date || '-'}</span>
      </div>
      
      </div>
      </div>

      <div className='heading-edit-button'>
      <h2 className='details-heading-main'>Personal Details</h2>
      <button onClick={() => navigate(`/edit/goals/${userId}`)}>Edit</button>
      </div>
      <div className='details form-container'>
      <div className='column'>
      <div className='form-group'>
        <span className='details-goals-heading'>Personal Life License Target :</span> 
        <span className='details-value'>{userDetails.Personal_Life_License_Target||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Personal Health License Target :</span> 
        <span className='details-value'>{userDetails.Personal_Health_License_Target||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Personal Recruits Target : </span> 
        <span className='details-value'>{userDetails.Personal_Recruits_Target||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Personal Apps Target :</span> 
        <span className='details-value'>{userDetails.Personal_Apps_Target||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Personal Points Target :</span> 
        <span className='details-value'>{userDetails.Personal_Points_Target||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Personal Field Training Appointments :</span> 
        <span className='details-value'>{userDetails.Personal_Field_Training_Appointments||"-"}</span>
      </div>
      </div >
      </div>

      <div  className='heading-edit-button'>
      <h2 className='details-heading-main'>Base Details</h2>
      <button onClick={() => navigate(`/edit/goals/${userId}`)}>Edit</button>
      </div>
      <div className='details form-container'>
        <div className='column'>
      <div className='form-group'>
        <span className='details-goals-heading'>Base New Recruits Target :</span> 
        <span className='details-value'>{userDetails.Base_New_Recruits_Target ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Base Life Licensed Agents Target :</span> 
        <span className='details-value'>{userDetails.Base_Life_Licensed_Agents_Target ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Base Direct Agents Target:</span> 
        <span className='details-value'>{userDetails.Base_Direct_Agents_Target ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Base Sr Direct Agents Target:</span> 
        <span className='details-value'>{userDetails.Base_Sr_Direct_Agents_Target ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Base Apps Target :</span> 
        <span className='details-value'>{userDetails.Base_Apps_Target ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Base Points Target:</span>
        <span className='details-value'>{userDetails.Base_Points_Target ||'-'}</span> 
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Base to 1st Gen New Recruits Target :</span> 
        <span className='details-value'>{userDetails.Base_to_1st_Gen_New_Recruits_Target ||'-'}</span>
      </div>
      </div>
      <div className='column2'>
      <div className='form-group'>
        <span className='details-goals-heading'>Base to 1st Gen Net Recruits Target :</span> 
        <span className='details-value'>{userDetails.Base_to_1st_Gen_Net_Recruits_Target ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Base to 1st Gen SMDs Target :</span> 
        <span className='details-value'>{userDetails.Base_to_1st_Gen_SMDs_Target ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Base to 1st Gen Net Points Target 6 months :</span> 
        <span className='details-value'>{userDetails.Base_to_1st_Gen_Net_Points_Target_6_months ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Base to 1st Gen Net Points Target 12 months : </span>
        <span className='details-value'> {userDetails.Base_to_1st_Gen_Net_Points_Target_12_months ||'-'}</span>
      </div>
      </div>
      </div>

      <div className='heading-edit-button'>
      <h2 className='details-heading-main'>Cash Flow Details</h2>
      <button onClick={() => navigate(`/edit/goals/${userId}`)}>Edit</button>
      </div>
      <div className='details form-container'>
      <div className='column'>
      <div className='form-group'>
        <span className='details-goals-heading'>Cash Flow 3 Month Target :</span> 
        <span className='details-value'>{userDetails.Cash_Flow_3_Month_Target||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Cash Flow 6 Month Target :</span> 
        <span className='details-value'>{userDetails.Cash_Flow_6_Month_Target||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Cash Flow 12 Month Target : </span> 
        <span className='details-value'>{userDetails.Cash_Flow_12_Month_Target||"-"}</span>
      </div>
      <div className='form-group'>
        <span className='details-goals-heading'>Cash Flow Growth Target :</span> 
        <span className='details-value'>{userDetails.Cash_Flow_Growth_Target||"-"}</span>
      </div>
     
      </div >
      </div>

</div>

      {/* Display other user details as needed */}
      </div>
    </div>
  );
}

export default ViewGoalType;
