import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import ProviderProductList from './pages/providers_product/ProviderList.jsx';
import CommissionRatesList from './pages/commission rates/CommissionList..jsx';
// import Product from './pages/Product.jsx';
import ViewPage from './pages/ViewPage.jsx';
import { Navigate } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';

import { UserProvider } from './pages/Context';

import EditOrganization from './pages/organization/EditOrganization';
import ViewProduct from './pages/providers_product/ViewProvider';
import Login from './Login';
import OrganizationList from './pages/organization/OrganizationList.jsx';
import ViewOrganization from './pages/organization/ViewOrganization';
import EditProvider from './pages/providers_product/EditProvider';
import ViewCommissionRates from './pages/commission rates/ViewCommissionRates';
import EditCommissionRates from './pages/commission rates/EditCommissionRates';
import FiscalCalenderList from './pages/fiscal calender/FiscalCalenderList';
import ViewFiscalCalender from './pages/fiscal calender/ViewFiscalCalender';
import EditFiscalCalendar from './pages/fiscal calender/EditFiscalCalender';
import Signup from './pages/signup';
import GoalTypeList from './pages/goal types/GoalTypeList';
import ViewGoalType from './pages/goal types/ViewGoalType';
import EditGoalType from './pages/goal types/EditGoalType';
const App = () => {
  const isAuthenticated = () => {
 
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists
  };

  return (
    <BrowserRouter>
         <UserProvider>
      <Sidebar>
 
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/dashboard"  element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />}/>
            <Route path="/commissionRates"
          element={isAuthenticated() ? <CommissionRatesList /> : <Navigate to="/" />} />
            
           
            <Route path="/commissionRates/:userId"  element={isAuthenticated() ? <ViewCommissionRates /> : <Navigate to="/" />} />
            <Route path="/edit/commissionRates/:userId"  element={isAuthenticated() ? <EditCommissionRates /> : <Navigate to="/" />}/>

            <Route path="/view-page" element={isAuthenticated() ? <ViewPage />: <Navigate to="/" />}/>
            
            <Route path="/organization"  element={isAuthenticated() ? <OrganizationList /> : <Navigate to="/" />}/>
            <Route path="/organization/:userId" element={isAuthenticated() ? <ViewOrganization /> : <Navigate to="/" />}/>
            <Route path="/edit/organization/:userId"  element={isAuthenticated() ? <EditOrganization /> : <Navigate to="/" />}/>

            <Route path="/providerProduct"  element={isAuthenticated() ? <ProviderProductList /> : <Navigate to="/" />}/>
            <Route path="/product/:userId" element={isAuthenticated() ? <ViewProduct />: <Navigate to="/" />}/>
            <Route path="/edit/product/:userId" element={isAuthenticated() ? <EditProvider /> : <Navigate to="/" />}/>

            <Route path="/fiscalCalendar" element={isAuthenticated() ? <FiscalCalenderList /> : <Navigate to="/" />}/>
            <Route path="/fiscalCalendar/:userId" element={isAuthenticated() ? <ViewFiscalCalender /> : <Navigate to="/" />}/>
            <Route path="/edit/fiscalCalendar/:userId" element={isAuthenticated() ?<EditFiscalCalendar /> : <Navigate to="/" />}/>
            <Route path="/goals" element={isAuthenticated() ? <GoalTypeList /> : <Navigate to="/" />}/>
            <Route path="/goals/:userId" element={isAuthenticated() ? <ViewGoalType /> : <Navigate to="/" />}/>
            <Route path="/edit/goals/:userId" element={isAuthenticated() ? <EditGoalType /> : <Navigate to="/" />}/>



          </Routes>
      
      </Sidebar>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;