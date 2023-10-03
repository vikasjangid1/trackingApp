import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Dashboard() {
    useEffect(() => {
      const fetchData = async () => {
        const apiUrl = 'http://vehicletrack.biz/api/companyvehiclelatestinfo?token=C_3BD0B0A02B'; // Replace with the external API URL
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Use a CORS proxy service
  
        try {
          const response = await axios.get(`${proxyUrl}${apiUrl}`); // If using Axios
          // Or use fetch: const response = await fetch(`${proxyUrl}${apiUrl}`);
          const data = response.data;
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array ensures this runs only once when the component mounts
  
    return (
      <div>
        {/* Your JSX content */}
      </div>
    );
  }
  
export default Dashboard;





// function Dashboard() {
//     const [data ,setData]=useState([])
// useEffect(()=>{
//     fetch("http://vehicletrack.biz/api/companyvehiclelatestinfo?token=C_3BD0B0A02B" )
//     .then(res => res.json())
//     .then(console.log);
// },[])


//   return (
//     <div>


//     </div>
//   )
// }