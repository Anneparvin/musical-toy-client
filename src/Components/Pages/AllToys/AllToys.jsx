import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    

    useEffect(()=> {
      fetch(`https://musical-toy-server.vercel.app/alltoys`)
      .then(res =>res.json())
      .then(data =>setAllToys(data))
    },[])

   



    return (
        <div>
            <h2 className='text-4xl font-bold underline mt-4 mb-8'>All Toys</h2>
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
        <th>image</th>
        <th>toyName</th>
        <th>sellerName</th>
        <th>sellerEmail</th>
        <th>Price</th>
        <th>Sub-category</th>
        <th>Available Quantity</th>
        <th>Rating</th>
        
      </tr>
    </thead>
  <tbody>
    {
      allToys?.map((allToy, index)=> <tr key={allToy._id}>
      <td>
          {index + 1}
      </td>
      <td>
          <div className="flex items-center space-x-3">
              <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                      <img src={allToy.image} alt="Avatar Tailwind CSS Component" />
                  </div>
              </div>
             
          </div>
      </td>
      
      <td>{allToy.toyName}</td>
      <td>{allToy.sellerName}</td>
      <td>{allToy.sellerEmail}</td>
      <td>{allToy.price}</td>
      <td>{allToy.category}</td>
      <td>{allToy.Quantity}</td>
      <td>{allToy.Rating}</td>
      
  </tr>)
    }
  </tbody>
 
    
  </table>
</div>  
        </div>
    );
};

export default AllToys;