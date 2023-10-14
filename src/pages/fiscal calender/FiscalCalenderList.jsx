

import axios from 'axios';

import ReactPaginate from 'react-paginate';
import '../../components/page.css'

import React, { useEffect ,useState} from 'react';
import  { useUserData } from '../Context';
import { Link } from 'react-router-dom';
import TopBar from '../../components/topbar';
import '../../components/topbar.css'
import BASE_URL from '../../appconfig';





function FiscalCalenderList() {
  const { data, setData} = useUserData();
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/Fiscal`);
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

      <h1 className='main-heading'>Fiscal Calender Data</h1>
      <div className='search-box details-search-box'>
      <input type="text" placeholder="Search" />
      </div>
      <div className='client-display-big-container'>
        <div className='client-display-container'>
        <div className='client-details-heading'>
        <div className='client-details-item-heading fixed-width'>Calendar date</div>
        <div className='client-details-item-heading fixed-width'>Day</div>
        <div className='client-details-item-heading fixed-width'>Week</div>
        <div className='client-details-item-heading fixed-width'>Month</div>
        <div className='client-details-item-heading fixed-width'>Quarter</div>
        <div className='client-details-item-heading fixed-width'>Month Name</div>
        <div className='client-details-item-heading fixed-width'>Year</div>
        <div className='client-details-item-heading fixed-width'>Month Year</div>
        <div className='client-details-item-heading fixed-width'>Quarter Year</div>
        <div className='client-details-item-heading fixed-width'>Pay Cycle</div>

        <div className='client-details-item-heading fixed-width'>Fiscal Month</div>
        <div className='client-details-item-heading fixed-width'>Fiscal Quarter</div>
        <div className='client-details-item-heading fixed-width'>Fiscal Year</div>
        <div className='client-details-item-heading fixed-width'>Hl Qual Period</div>
        <div className='client-details-item-heading fixed-width'>NLA GA Qual Period</div>
        <div className='client-details-item-heading fixed-width'>Tiger Qual Period</div>







      </div>
      </div>
      <div className='client-list-container'>

   <ul className='client-list'>
        {display.map((item,index) => (
          <li key={item.id}>
            <Link to={`/fiscalCalendar/${item.id}`} className={`client-button ${index % 2 === 0 ? 'client-button-even' : 'client-button-odd'}`}>
              <div className='client-details-item fixed-width'>{item.Calendar_Date}</div>
              <div className='client-details-item fixed-width'>{item.Day_Num}</div>
              <div className='client-details-item fixed-width'>{item.Week_Num}</div>
              <div className='client-details-item fixed-width'>{item.Month_Num}</div>

              <div className='client-details-item fixed-width'>{item.Quarter_Num}</div>
              <div className='client-details-item fixed-width'>{item.Month_Name}</div>
              <div className='client-details-item fixed-width'>{item.Year}</div>
              <div className='client-details-item fixed-width'>{item.Month_Year}</div>
              <div className='client-details-item fixed-width'>{item.Quarter_Year}</div>
              <div className='client-details-item fixed-width'>{item.Pay_Cycle}</div>

              <div className='client-details-item fixed-width'>{item.Fiscal_Month}</div>
              <div className='client-details-item fixed-width'>{item.Fiscal_Quarter}</div>
              <div className='client-details-item fixed-width'>{item.Fiscal_Year}</div>
              <div className='client-details-item fixed-width'>{item.Hl_QUal_Period}</div>
              <div className='client-details-item fixed-width'>{item.NLA_GA_Qual_Period}</div>
              <div className='client-details-item fixed-width'>{item.Tiger_Qual_Period}</div>




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





export default FiscalCalenderList;