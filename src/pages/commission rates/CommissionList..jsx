

import axios from 'axios';

import React, { useEffect ,useState} from 'react';
import  { useUserData } from '../Context';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import TopBar from '../../components/topbar';
import '../../components/topbar.css'
import '../../components/page.css'

import BASE_URL from '../../appconfig';

function CommissionList() {
  const { data, setData } = useUserData();
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/Commision`);
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
      <h1 className='main-heading'>Commission Rates Data</h1>
      <div className='search-box details-search-box'>
      <input type="text" placeholder="Search" />
      </div>
      <div className='client-display-big-container'>
        <div className='client-display-container'>
        <div className='client-details-heading'>
      
        <div className='client-details-item-heading fixed-width'>Commission Rate ID</div>
        <div className='client-details-item-heading fixed-width'>Level</div>
        <div className='client-details-item-heading fixed-width'>Level Abbr</div>

        <div className='client-details-item-heading fixed-width'>Level Description</div>
        <div className='client-details-item-heading fixed-width'>Contract Rate Matrix</div>
        <div className='client-details-item-heading fixed-width'>Contract Rate</div>
        <div className='client-details-item-heading fixed-width'>Contract Level</div>

        <div className='client-details-item-heading fixed-width'>T Override Rate</div>
        <div className='client-details-item-heading fixed-width'>TA Override Rate</div>

        <div className='client-details-item-heading fixed-width'>A Override Rate</div>
        <div className='client-details-item-heading fixed-width'>SA Override Rate</div>
        <div className='client-details-item-heading fixed-width'>MD Override Rate</div>
        <div className='client-details-item-heading fixed-width'>SMD Override Rate</div>


      </div>
      </div>
      <div className='client-list-container'>
   <ul className='client-list'>
        {display.map((item,index) => (
          <li key={item.id}>
            <Link to={`/commissionRates/${item.id}`} className={`client-button ${index % 2 === 0 ? 'client-button-even' : 'client-button-odd'}`}>
              <div className='client-details-item fixed-width'>{item.Commission_Rate_ID}</div>
              <div className='client-details-item fixed-width'>{item.Level}</div>
              <div className='client-details-item fixed-width'>{item.Level_Abbr}</div>

              <div className='client-details-item fixed-width'>{item.Level_Description}</div>
              <div className='client-details-item fixed-width'>{item.Contract_Rate_Matrix}</div>
              <div className='client-details-item fixed-width'>{item.Contract_Rate}</div>
              <div className='client-details-item fixed-width'>{item.Contract_Level}</div>
              <div className='client-details-item fixed-width'>{item.T_Override_Rate}</div>
              <div className='client-details-item fixed-width'>{item.TA_Override_Rate}</div>
              <div className='client-details-item fixed-width'>{item.A_Override_Rate}</div>
              <div className='client-details-item fixed-width'>{item.SA_Override_Rate}</div>
              <div className='client-details-item fixed-width'>{item.MD_Override_Rate}</div>
              <div className='client-details-item fixed-width'>{item.SMD_Override_Rate}</div>





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





export default CommissionList;