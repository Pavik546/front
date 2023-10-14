
import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import TopBar from '../../components/topbar';
import { useUserData } from '../Context';
import BASE_URL from '../../appconfig';

function ViewFiscalCalender() {
    const navigate = useNavigate();
  const { userId } = useParams();
  const { data, setData } = useUserData();

  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <h2 className='details_heading'>Fiscal Calendar Details</h2>
      <div className='client-view-list-container'>

      <div className='heading-edit-button'>
      <h2 className='details-heading-main'>Calendar Details</h2>
      <button onClick={() => navigate(`/edit/fiscalCalendar/${userId}`)}>Edit</button>
      </div>
      <div className='productdetails form-container'>
      <div className='column'>
      <div className='form-group'>
        <span className='details-heading'>Calendar date :</span> 
        <span className='details-value'>{userDetails.Calendar_Date}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Day :</span> 
        <span className='details-value'>{userDetails.Day_Num}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Week : </span> 
        <span className='details-value'>{userDetails.Week_Num}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Month :</span> 
        <span className='details-value'>{userDetails.Month_Num}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Quarter :</span> 
        <span className='details-value'>{userDetails.Quarter_Num}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Year :</span> 
        <span className='details-value'>{userDetails.Year}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Month Name :</span> 
        <span className='details-value'>{userDetails.Month_Name}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Month Year :</span> 
        <span className='details-value'>{userDetails.Month_Year}</span>
      </div>
      </div>
      <div className='column2'>
      <div className='form-group'>
        <span className='details-heading'>Quarter Year :</span> 
        <span className='details-value'>{userDetails.Quarter_Year }</span>
      </div>
      
     
      <div className='form-group'>
        <span className='details-heading'>Pay Cycle :</span> 
        <span className='details-value'>{userDetails.Pay_Cycle}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Fiscal Month :</span> 
        <span className='details-value'>{userDetails.Fiscal_Month }</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Fiscal Quarter :</span> 
        <span className='details-value'>{userDetails.Fiscal_Quarter }</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Fiscal Year :</span> 
        <span className='details-value'>{userDetails.Fiscal_Year }</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>HI Qual Period :</span> 
        <span className='details-value'>{userDetails.HI_Qual_Period}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>NLA GA Qual Period</span>
        <span className='details-value'> {userDetails.NLA_GA_Qual_Period}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Tiger Qual Period :</span>
        <span className='details-value'>{userDetails.Tiger_Qual_Period}</span> 
      </div>
      </div>
      
</div>
      {/* Display other user details as needed */}
    </div>
    </div>
    </div>
  );
}

export default ViewFiscalCalender;
