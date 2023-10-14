import React, { useState } from 'react';

import axios from 'axios';
import BASE_URL from './appconfig';
import { useParams ,useNavigate,} from 'react-router-dom';
import './login.css'; // Import your CSS file
import logo2 from './assets/logo2.png';

import App from './App';

//import { useUserData } from '.pages/Context.js';

const Login = () => {
  const [email, setEmail] = useState('');
  //const { data,setData,setRoleid ,setUserid} = useUserData();
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
  
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        // Store the token in local storage
        localStorage.setItem('token', response.data.token);
     
        // Redirect to a different route (e.g., dashboard)
        navigate('/dashboard');
      } else {
        // Handle login failure
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error(error);
      // Display a generic error message
      setErrorMessage(error.message+'An error occurred while logging in.');
    }
  };
 
  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div>
       <div className='login-page'>
      <div className='background-overlay'></div>
      <div className='background-image'></div>
      <div className='login-form'>
        <div className='logo-container'>
        <img src={logo2} className='logo2'></img>
        </div>
        <hr className='line-below-logo' /> 
      <h2 className='login-heading'>Login</h2>
      <p className='login-para'>Welcome back, Please enter your details</p>
      <div>
      <input
       className='login-input '
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        </div>
       <div>
      <input
        className='login-input password'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       </div>
       <button  className="login-button" onClick={handleLogin}>Login</button>
      
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <p className="login-para para" onClick={handleSignupClick}>
            Don't have an account? <strong className='create'>Create Now</strong>
          </p>
      {/* <p className='login-para create'>Don’t have an account? <a href="#" onClick={()=>navigate('/signup')}>Create now</a></p> */}
      </div>
    </div>
    </div>
  );
};

export default Login;
