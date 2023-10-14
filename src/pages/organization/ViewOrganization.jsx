
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
function ViewOrganization() {
    const navigate = useNavigate();
    const { data, setData } = useUserData;

  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/Organization/${userId}`);
        setUserDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching organization details:', error);
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

      <h2 className='details_heading'>User Details</h2>
      <div className='client-view-list-container'>
      <div className='heading-edit-button'>
      <h2 className='details-heading-main'>Organization Details</h2>
      <button onClick={() => navigate(`/edit/organization/${userId}`)}>Edit</button>
      </div>

      <div className='details form-container'>
      <div className='column'>
      <div className='form-group'>
        <span className='details-heading'>Associate ID :</span> 
        <span className='details-value'>{userDetails.AssociateID}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Base Shop ID :</span> 
        <span className='details-value'>{userDetails.BaseShopID}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'> Upline ID : </span> 
        <span className='details-value'>{userDetails.UplineID}</span>
      </div>
     
     
      <div className='form-group'>
        <span className='details-heading'>Name Title :</span> 
        <span className='details-value'>{userDetails.NameTitle}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Title Level :</span> 
        <span className='details-value'>{userDetails.TitleLevel}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Downline :</span> 
        <span className='details-value'>{userDetails.Downline}</span>
      </div>
      </div >
      <div className='column2'>
      <div className='form-group'>
        <span className='details-heading'>License Date :</span>
        <span className='details-value'> {userDetails.LicenseDate ? formatDatetime(userDetails.LicenseDate) : '-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>A Date :</span>
        <span className='details-value'> {userDetails.ADate ? formatDatetime(userDetails.ADate) : '-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>SA Date :</span> 
        <span className='details-value'>{userDetails.SADate ? formatDatetime(userDetails.SADate) : '-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>MD DAte :</span> 
        <span className='details-value'>{userDetails.MDDate ? formatDatetime(userDetails.MDDate) : '-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>SMD Date :</span> 
        <span className='details-value'>{userDetails.SMDDate ? formatDatetime(userDetails.SMDDate) : '-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Inactive Date :</span> 
        <span className='details-value'>{userDetails.Inactivedate ? formatDatetime(userDetails.Inactivedate) : '-'}</span>
      </div>
      
      <div className='form-group'>
        <span className='details-heading'>LL FLag :</span> 
        <span className='details-value'>{userDetails.LLFlag ||'-'}</span>
      </div>
      </div>
      </div>
      <div  className='heading-edit-button'>
      <h2 className='details-heading-main'>Basic Details</h2>
      <button onClick={() => navigate(`/edit/organization/${userId}`)}>Edit</button>
      </div>
      <div className='details form-container'>
        <div className='column'>
      <div className='form-group'>
        <span className='details-heading'>First Name :</span> 
        <span className='details-value'>{userDetails.FirstName ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Last Name :</span> 
        <span className='details-value'>{userDetails.LastName ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Home Street 1:</span> 
        <span className='details-value'>{userDetails.HomeStreet1 ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Home Street 2:</span> 
        <span className='details-value'>{userDetails.HomeStreet2 ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Home City :</span> 
        <span className='details-value'>{userDetails.HomeCity ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Home State :</span>
        <span className='details-value'>{userDetails.HomeState ||'-'}</span> 
      </div>
      <div className='form-group'>
        <span className='details-heading'>Home Postal :</span> 
        <span className='details-value'>{userDetails.HomePostal ||'-'}</span>
      </div>
      </div>
      <div className='column2'>
      <div className='form-group'>
        <span className='details-heading'>Country :</span> 
        <span className='details-value'>{userDetails.Country ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Country 2:</span> 
        <span className='details-value'>{userDetails.Country_2 ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Work Email :</span> 
        <span className='details-value'>{userDetails.WorkEmail ||'-'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Mobile : </span>
        <span className='details-value'> {userDetails.Mobile ||'-'}</span>
      </div>
      </div>
      </div>
</div>

      {/* Display other user details as needed */}
      </div>
    </div>
  );
}

export default ViewOrganization;
