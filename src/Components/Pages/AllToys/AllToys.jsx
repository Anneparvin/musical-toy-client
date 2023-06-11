import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(()=> {

    },[])


    return (
        <div>
            <h2 className='text-4xl font-bold'>All Toys</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>SellerName</th>
        <th>Toy Name</th>
        <th>Price</th>
        <th>Sub-category</th>
        <th>Available Quantity</th>
        
      </tr>
    </thead>
    <tbody>
     
      
    </tbody>
    {/* foot */}
 
    
  </table>
</div>  
        </div>
    );
};

export default AllToys;