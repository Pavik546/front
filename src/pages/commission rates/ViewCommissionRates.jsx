
import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import TopBar from '../../components/topbar';
import { useUserData } from '../Context';
import BASE_URL from '../../appconfig';

function ViewCommissionRates() {
    const navigate = useNavigate();
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const { data, setData} = useUserData;

  const [loading, setLoading] = useState(true);

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
      <h2 className='details_heading'>Commission Rates Details</h2>
      <div className='client-view-list-container'>
      <div className='heading-edit-button'>
      <h2 className='details-heading-main'>Rates Details</h2>
      <button onClick={() => navigate(`/edit/commissionRates/${userId}`)}>Edit</button>
      </div>
      <div className='productdetails form-container'>
        <div className='column'>
      <div className='form-group'>
        <span className='details-heading'>Commission rate ID :</span>
        <span className='details-value'> {userDetails.Commission_Rate_ID}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Level :</span>
        <span className='details-value'> {userDetails.Level}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Level Abbr : </span> 
        <span className='details-value'>{userDetails.Level_Abbr}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Level Description :</span> 
        <span className='details-value'>{userDetails.Level_Description}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Contract Rate Matrix :</span> 
        <span className='details-value'>{userDetails.Contract_Rate_Matrix}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Contract Rate :</span> 
        <span className='details-value'>{userDetails.Contract_Rate}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Contract Level :</span> 
        <span className='details-value'>{userDetails.Contract_Level}</span>
      </div>
      </div>
      <div className='column2'>
      <div className='form-group'>
        <span className='details-heading'>T Override Rate :</span> 
        <span className='details-value'>{userDetails.T_Override_Rate}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>TA Override Rate :</span> 
        <span className='details-value'>{userDetails.TA_Override_Rate}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>A Override Rate :</span> 
        <span className='details-value'>{userDetails.A_Override_Rate }</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>SA Override Rate :</span>
        <span className='details-value'>{userDetails.SA_Override_Rate}</span> 
      </div>
      <div className='form-group'>
        <span className='details-heading'>MD Override Rate :</span> 
        <span className='details-value'>{userDetails.MD_Override_Rate}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>SMD Override Rate :</span> 
        <span className='details-value'>{userDetails.SMD_Override_Rate}</span>
      </div>
      </div>
      </div>
      {/* Display other user details as needed */}
      </div>
    </div>
    </div>
  );
}

export default ViewCommissionRates;
