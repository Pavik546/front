import React, { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import './login.css'; // Import your CSS file
import logo2 from '../assets/logo2.png';
import axios from 'axios'; // Import Axios
import BASE_URL from '../appconfig';
function Signup() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:'',
    First_name:'',
    Last_name:'',
    password: '',
    Mobileno:'',
    BaseShopID:'',
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name === 'repassword') {
      setPasswordConfirmation(value);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSignupClick = () => {
    navigate('/');
  };

  useEffect(() => {
    // Add any side effects here
  }, []);
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formData.password !== passwordConfirmation) {
      alert('Password and password confirmation do not match');
      return;
    }
    
      try {
        const response = await axios.post(`${BASE_URL}/api/User`, formData);
  
        if (response.data && response.data.success) {
          navigate('/');
        } else {
          
          console.error(response.data.message);
        }
      } catch (error) {
        console.error('Error while signing up:', error);
      }
    

    
  };

  return (
    <div className='login-page'>
      <div className='background-overlay'></div>
      <div className='background-image signup-image'></div>
      <div className='login-form signup'>
        <div className='logo-container'>
        <img src={logo2} className='logo2'></img>
        </div>
        <hr className='line-below-logo' /> 
      <h2 className='login-heading'>Create an account</h2>
      <p className='login-para'>We’re excited to have you on board, Please fill the details below </p>
      <form onSubmit={handleSubmit}>
      
        <div className=''>
          <input
          className='login-input '
            type="text"
            id="First_name"
            name="First_name"
            value={formData.First_name}
            placeholder='First Name'
            onChange={handleChange}
            required
          />
        </div>
        <div className=''>
          <input
          className='login-input '
            type="text"
            id="Last_name"
            name="Last_name"
            value={formData.Last_name}
            placeholder='Last Name'
            onChange={handleChange}
            required
          />
        </div>
      
        
        <div className=''>
          <input
          className='login-input'
            type="text"
            id="email"
            name="email"
            value={formData.email}
            placeholder='Email'
            onChange={handleChange}
            required
          />
        </div>
        <div className=''>
          <input
          className='login-input signup-inpu '
            type="text"
            id="Mobileno"
            name="Mobileno"
            value={formData.Mobileno}
            placeholder='Mobile Number'
            onChange={handleChange}
            required
          />
        </div>
        <div className=''>
          <input
          className='login-input '
            type="text"
            id="BaseShopID"
            name="BaseShopID"
            value={formData.BaseShopID}
            placeholder='Base Shop ID'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
          className='login-input password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
            required
          />
        </div>
        <div>
          <input
          className='login-input password'
            type="password"
            id="repassword"
            name="repassword"
            value={formData.repassword}
            onChange={handleChange}
            placeholder='Re-enter your Password'
            required
          />
        </div>
       
        <button className="login-button"type="submit">Signup</button>
      </form>
      <p className='login-para create' onClick={handleSignupClick}>Already have an account? <strong className='create'>Login</strong></p>
      </div>
    </div>
  );
}

export default Signup;
