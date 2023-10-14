

import axios from 'axios';

import React, { useEffect ,useState} from 'react';
import { useNavigate,} from 'react-router-dom';
import  { useUserData } from '../Context';
import { Link } from 'react-router-dom';
import TopBar from '../../components/topbar';
import '../../components/page.css'
import ReactPaginate from 'react-paginate';
import '../../components/topbar.css'

import { useParams } from 'react-router-dom'; // Import useParams
import BASE_URL from '../../appconfig';



function OrganizationList() {

  const { data, setData ,userid} = useUserData();
  const [selectedColumn, setSelectedColumn] = useState(''); // Initialize to an empty string
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
 
  console.log(userid);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await axios.get(`${BASE_URL}/api/v1/getuserorganization/${userid}`)
        if (response.status === 401) {
          navigate('/');
        }
          // Request data
        
        
        const modifiedData = response.data.map(item => {
          const { id, ...rest } = item;
          return rest;
        });
      

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [setData ,userid]);  

 

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
        <h1 className='main-heading'>Organization Data</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <select
    onChange={e => setSelectedColumn(e.target.value)}
    value={selectedColumn}
    style={{ width: '200px', height: '40px', fontSize: '16px', marginRight: '10px' }}
  >
    <option value="">Select a Column</option>
    {Object.keys(data[0] || {})
      .filter((columnName, index) => index !== 0) // Exclude the first column
      .map(columnName => (
        <option key={columnName} value={columnName}>
          {columnName}
        </option>
      ))}
  </select>
  {selectedColumn && (
    <input
      type="text"
      style={{
        width: '300px',
        height: '40px',
      }}
      placeholder={`Search by ${selectedColumn}`}
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  )}
</div>

      {display && display.length > 0 ? (
          <div className='client-display-big-container'>
            <div className='client-display-container'>
              <div className='client-details-heading'>
      
        <div className='client-details-item-heading fixed-width'>Associate ID</div>
        <div className='client-details-item-heading fixed-width'>Base Shop ID</div>
        <div className='client-details-item-heading fixed-width'>Upline ID</div>

        <div className='client-details-item-heading fixed-width'>First Name</div>
        <div className='client-details-item-heading fixed-width'>Last Name</div>
        <div className='client-details-item-heading fixed-width'>Name Title</div>
        <div className='client-details-item-heading fixed-width'>Title Level</div>
        <div className='client-details-item-heading fixed-width'>Downline %</div>

        <div className='client-details-item-heading fixed-width'>Country</div>
        <div className='client-details-item-heading fixed-width'>License Date</div>
        <div className='client-details-item-heading fixed-width'>A Date</div>
        <div className='client-details-item-heading fixed-width'>SA Date</div>
        <div className='client-details-item-heading fixed-width'>MD Date</div>
        <div className='client-details-item-heading fixed-width'>SMD Date</div>
        <div className='client-details-item-heading fixed-width'>Inactive Date</div>
        <div className='client-details-item-heading fixed-width'>LL Flag</div>
        <div className='client-details-item-heading fixed-width'>Mobile</div>

       





      </div>
      </div>
     
      <div className='client-list-container'>
   <ul className='client-list'>
   {display
  .filter(item => {
    if (selectedColumn && typeof item[selectedColumn] === 'string') {
      return item[selectedColumn].toLowerCase().replace(/\s/g, '').includes(searchTerm.toLowerCase().replace(/\s/g, ''));
    } else if (selectedColumn && typeof item[selectedColumn] === 'number') {
      return item[selectedColumn].toString().toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedColumn && item[selectedColumn] instanceof Date) {
      return item[selectedColumn].toLocaleDateString().toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true; // Show all data when no column or search term is selected
  })
  .map((item,index) => (
              <li key={item.id}>
            <Link to={`/organization/${item.id}`} className={`client-button ${index % 2 === 0 ? 'client-button-even' : 'client-button-odd'}`}>
              <div className='client-details-item fixed-width'>{item.AssociateID}</div>
              <div className='client-details-item fixed-width'>{item.BaseShopID}</div>
              <div className='client-details-item fixed-width'>{item.UplineID}</div>

              <div className='client-details-item fixed-width'>{item.FirstName}</div>
              <div className='client-details-item fixed-width'>{item.LastName}</div>
              <div className='client-details-item fixed-width'>{item.NameTitle}</div>
              <div className='client-details-item fixed-width'>{item.TitleLevel}</div>
              <div className='client-details-item fixed-width'>{item.Downline}</div>

              <div className='client-details-item fixed-width'>{item.Country}</div>
              
              <div className='client-details-item fixed-width'>{item.LicenseDate}</div>
              <div className='client-details-item fixed-width'>{item.ADate}</div>
              <div className='client-details-item fixed-width'>{item.SADate}</div>
              <div className='client-details-item fixed-width'>{item.MDDate}</div>
              <div className='client-details-item fixed-width'>{item.SMDDate}</div>
              <div className='client-details-item fixed-width'>{item.Inactivedate}</div>

              <div className='client-details-item fixed-width'>{item.LLFlag}</div>
              <div className='client-details-item fixed-width'>{item.Mobile}</div>








            </Link>
          </li>
         
        ))}
      </ul>
      </div>
      
      </div>
       ):(<div>No data available</div>
       )}
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




export default OrganizationList;