import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import MyBookingRaw from "./MyBookingRaw";
import { Navigate } from "react-router-dom";


const MyToys = () => {
  const {user} =useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  
  useEffect(()=>{
      fetch(`http://localhost:5000/bookingToys`,{
        method:'GET',
        headers:{
         
          'content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        if(!data.error){
          setBookings(data)
        }
        else{
          Navigate('home')
        }
      })
  },[])

  const handleDelete = id => {
      const proceed = confirm('are you sure, you want to delete');
      if(proceed){
        fetch(`http://localhost:5000/bookingToys/${id}`,{
         method:'DELETE' 
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.deletedCount > 0){
            alert('deleted Successfully');
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining);
          }
        })
      }
    }

    const handleBookingUpdate = id => {
     fetch(`http://localhost:5000/bookingToys/${id}`,{
      method:'PATCH',
      headers:{
          'content-type' : 'application/json'
      },
      body:JSON.stringify({status:'confirm'})
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data);
      if(data.modifiedCount > 0){
          // update state
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
      }
     })
    }

  return (
      <div>
         <h2>Your Bookings: {bookings.length}</h2> 
         <div className="overflow-x-auto">
<table className="table">
  {/* head */}
  <thead>
    <tr>
     
      <th>Delete</th>
      <th>Image</th>
      <th>toyName</th>
      <th>price</th>
      <th>Quantity</th>
      <th>description</th>
      <th>Update</th>
      
    </tr>
  </thead>
  <tbody>
 {
  bookings.map(booking => <MyBookingRaw
  key={booking._id}
  booking={booking}
  handleDelete = {handleDelete}
  handleBookingUpdate = {handleBookingUpdate}
  ></MyBookingRaw>)
 }
  </tbody>
  
</table>
</div>
      </div>
    );
};

export default MyToys;