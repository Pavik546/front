

import axios from 'axios';

import React, { useEffect ,useState} from 'react';
import  { useUserData } from '../Context';
import { Link } from 'react-router-dom';
import TopBar from '../../components/topbar';
import '../../components/topbar.css'
import BASE_URL from '../../appconfig';
import ReactPaginate from 'react-paginate';
import '../../components/page.css'



function GoalTypeList() {
  const { data, setData } = useUserData();

  const [loading,setLoading]=useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/Goal`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [setData]);  

  
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(6); 
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const display = data.slice(startIndex, endIndex);


  // Handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
  };

 



 
  return (
    <div className="App">
      <TopBar />
      <div className='main-container'>
      <h1 className='main-heading'>Goal Types Data</h1>
      <div className='search-box details-search-box'>
      <input type="text" placeholder="Search" />
      </div>
      <div className='client-display-big-container'>
        <div className='client-display-container'>
        <div className='client-details-heading'>
      
        <div className='client-details-item-heading fixed-width'>Goal Type</div>
        <div className='client-details-item-heading fixed-width'>Goal Category</div>
        <div className='client-details-item-heading fixed-width'>Cohort</div>

        <div className='client-details-item-heading fixed-width'>Start Date</div>
        <div className='client-details-item-heading fixed-width'>Rolling Target End Date</div>
        <div className='client-details-item-heading fixed-width'>3 Month Rolling Target End Date</div>
        <div className='client-details-item-heading fixed-width'>6 Month Rolling Target End Date</div>
        <div className='client-details-item-heading fixed-width'>12 Month Rolling Target End Date</div>

        <div className='client-details-item-heading fixed-width'>Contest End Date</div>
        <div className='client-details-item-heading fixed-width'>Personal Life License Target</div>
        <div className='client-details-item-heading fixed-width'>Personal Health License Target</div>
        <div className='client-details-item-heading fixed-width'>Personal Recruits Target</div>
        <div className='client-details-item-heading fixed-width'>Personal Apps Target</div>
        <div className='client-details-item-heading fixed-width'>Personal Points Target</div>
        <div className='client-details-item-heading fixed-width'>Personal Field Training Appointments</div>


       





      </div>
      </div>
     
      <div className='client-list-container'>
   <ul className='client-list'>
        {display.map((item,index) => (
          <li key={item.id}>
            <Link to={`/goals/${item.id}`} className={`client-button ${index % 2 === 0 ? 'client-button-even' : 'client-button-odd'}`}>
              <div className='client-details-item fixed-width'>{item.Goal_Type || '-'}</div>
              <div className='client-details-item fixed-width'>{item.Goal_Category || '-'}</div>
              <div className='client-details-item fixed-width'>{item.Cohort || '-'}</div>

              <div className='client-details-item fixed-width'>{item.Start_Date || '-'}</div>
              <div className='client-details-item fixed-width'>{item.Rolling_Target_End_Date || '-'}</div>
              <div className='client-details-item fixed-width'>{item._3Month_Rolling_Target_End_Date || '-'}</div>
              <div className='client-details-item fixed-width'>{item._6Month_Rolling_Target_End_Date || '-'}</div>
              <div className='client-details-item fixed-width'>{item._12Month_Rolling_Target_End_Date || '-'}</div>

              <div className='client-details-item fixed-width'>{item.Contest_End_Date || '-'}</div>
              
              <div className='client-details-item fixed-width'>{item.Personal_Life_License_Target || '-'}</div>
              <div className='client-details-item fixed-width'>{item.Personal_Health_License_Target || '-'}</div>
              <div className='client-details-item fixed-width'>{item.Personal_Recruits_Target || '-'}</div>
              <div className='client-details-item fixed-width'>{item.Personal_Apps_Target || '-'}</div>
              <div className='client-details-item fixed-width'>{item.Personal_Points_Target || '-'}</div>
              <div className='client-details-item fixed-width'>{item.Personal_Field_Training_Appointments || '-'}</div>









            </Link>
          </li>
         
        ))}
      </ul>
      </div>
      
      </div>
      <div>
      <label className='label-with-select'>
  Show</label>
      <select
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
      >
        <option value="6">6</option>
        <option value="10">10</option>
        <option value="15">15</option>
        </select>
        </div> 
        <ReactPaginate
      pageCount={Math.ceil(data.length / itemsPerPage)}
      pageRangeDisplayed={2}
      marginPagesDisplayed={0}
      onPageChange={handlePageChange}
      containerClassName="pagination"
      pageLinkClassName="page-link" 
      previousLabel="<<" // Set the "Previous" label to "<"
      nextLabel=">>" // Apply the 'page-link' class to the page numbers
    />
  
      </div>
    </div>
  );
}





export default GoalTypeList;