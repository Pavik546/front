
import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import TopBar from '../../components/topbar';
import BASE_URL from '../../appconfig';

function formatDatetime(datetimeString) {
    const date = new Date(datetimeString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
function ProductDetails() {
    const navigate = useNavigate();

  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <h2  className='details_heading'>Provider Product Details</h2>
      <div className='client-view-list-container'>
      <div className='heading-edit-button'>
      <h2 className='details-heading-main'>Product Details</h2>
      <button onClick={() => navigate(`/edit/product/${userId}`)}>Edit</button>
      </div>
      <div className='productdetails form-container'>
      <div className='column'>
      <div className='form-group'>
        <span className='details-heading'>Provider Name :</span> 
        <span className='details-value'>{userDetails.Provider_Name}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Commission Rate Matrix :</span>
        <span className='details-value'>{userDetails.Commission_Rate_Matrix}</span> 
      </div>
      <div className='form-group'>
        <span className='details-heading'>Support Name : </span> 
        <span className='details-value'>{userDetails.Support_Name}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Product Type :</span> 
        <span className='details-value'>{userDetails.Product_Type}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Product :</span> 
        <span className='details-value'>{userDetails.Product}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Commission Rate 1 :</span> 
        <span className='details-value'>{userDetails.Commission_Rate_1}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Effective Date 1 :</span> 
        <span className='details-value'>{userDetails.Effective_Date_1 ? formatDatetime(userDetails.Effective_Date_1) : 'N/A'}</span>
      </div>
      </div>
      <div className='column2'>
      <div className='form-group'>
        <span className='details-heading'>Commission Rate 2 :</span> 
        <span className='details-value'>{userDetails.Commission_Rate_2}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Effective Date 2 :</span> 
        <span className='details-value'>{userDetails.Effective_date_2 ? formatDatetime(userDetails.Effective_date_2) : 'N/A'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Commission Rate 3 :</span> 
        <span className='details-value'>{userDetails.Commission_Rate_3}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Effective Date 3 :</span> 
        <span className='details-value'>{userDetails.Effective_Date_3 ? formatDatetime(userDetails.Effective_Date_3) : 'N/A'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Commission Rate 4</span> 
        <span className='details-value'>{userDetails.Commission_Rate_4}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Effective Date 4  :</span> 
        <span className='details-value'>{userDetails.Effective_Date_4 ? formatDatetime(userDetails.Effective_Date_4) : 'N/A'}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Commission Rate 5 :</span> 
        <span className='details-value'>{userDetails.Commission_Rate5}</span>
      </div>
      <div className='form-group'>
        <span className='details-heading'>Effective Date 5 :</span> 
        <span className='details-value'>{userDetails.Effective_Date_5 ? formatDatetime(userDetails.Effective_Date_5) : 'N/A'}</span>
      </div>
      </div>
      </div>

      {/* Display other user details as needed */}
      </div>
      </div>
    </div>
  );
}

export default ProductDetails;
