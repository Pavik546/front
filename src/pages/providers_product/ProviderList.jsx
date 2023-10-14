

import axios from 'axios';

import React, { useEffect ,useState} from 'react';
import  { useUserData } from '../Context';
import { Link } from 'react-router-dom';
import TopBar from '../../components/topbar';

import ReactPaginate from 'react-paginate';
import '../../components/topbar.css'
import '../../components/page.css'
import BASE_URL from '../../appconfig';





function ProviderList() {
  const { data, setData } = useUserData();
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/Product`);
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
      <h1 className='main-heading'>Providers Product Data</h1>
      <div className='search-box details-search-box'>
      <input type="text" placeholder="Search" />
      </div>
      <div className='client-display-big-container'>
        <div className='client-display-container'>
        <div className='client-details-heading'>
      
        <div className='client-details-item-heading fixed-width'>Provider Name</div>
        <div className='client-details-item-heading fixed-width'>Commission Rate Matrix</div>
        <div className='client-details-item-heading fixed-width'>Support Name</div>
        <div className='client-details-item-heading fixed-width'>Support Phone Number</div>
        <div className='client-details-item-heading fixed-width'>Product Type</div>
        <div className='client-details-item-heading fixed-width'>Product</div>
        
        <div className='client-details-item-heading fixed-width'>Commission Rate 1</div>
        <div className='client-details-item-heading fixed-width'>Effective Date 1</div>
        <div className='client-details-item-heading fixed-width'>Commission Rate 2</div>
        <div className='client-details-item-heading fixed-width'>Effective Date 2</div>

        <div className='client-details-item-heading fixed-width'>Commission Rate 3</div>
        <div className='client-details-item-heading fixed-width'>Effective Date 3</div>





      
      </div>
      </div>
     <div className='client-list-container'>
   <ul className='client-list'>
        {display.map((item,index) => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`} className={`client-button ${index % 2 === 0 ? 'client-button-even' : 'client-button-odd'}`}>
              <div className='client-details-item fixed-width'>{item.Provider_Name}</div>
              {/* <div>{item.BaseShopID}</div>
              <div>{item.UplineID}</div> */}
              <div className='client-details-item fixed-width'>{item.Commission_Rate_Matrix}</div>
              <div className='client-details-item fixed-width'>{item.Support_Name}</div>
              <div className='client-details-item fixed-width'>{item.Support_Phone}</div>
              <div className='client-details-item fixed-width'>{item.Product_Type}</div>
              <div className='client-details-item fixed-width'>{item.Product}</div>
              
              <div className='client-details-item fixed-width'>{item.Commission_Rate_1}</div>
              <div className='client-details-item fixed-width'>{item.Effective_Date_1}</div>
              <div className='client-details-item fixed-width'>{item.Commission_Rate_2}</div>
              <div className='client-details-item fixed-width'>{item.Effective_date_2}</div>
              <div className='client-details-item fixed-width'>{item.Commission_Rate_3}</div>
              <div className='client-details-item fixed-width'>{item.Effective_Date_3}</div>
             




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





export default ProviderList;