

const MyBookingRaw = ({booking, handleDelete, handleBookingUpdate}) => {

   const {price,image, _id,toyName,Quantity,description,status} = booking;

  
    return (
        <div>
             {/* row 1 */}
      <tr>
        <td>
<button onClick={()=>handleDelete(_id)}className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </td>
        <td>
         
            <div className="avatar">
              <div className="rounded w-24 h-20">
                {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
         
        </td>
        <td>{toyName}</td>
        <td>{price}</td>
        <td>{Quantity}</td>
        <td>{description}</td>
        
        <td>
          {status === 'confirm' ? <span className='font-bold text-purple-300'>Confirmed</span>
           : <button onClick={()=>handleBookingUpdate(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
        </td>
      </tr>
        </div>
    );
};

export default MyBookingRaw;