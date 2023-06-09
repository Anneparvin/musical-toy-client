import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const ToyCards = () => {
  const [toyCards, setToyCards] = useState([]);

 useEffect (()=>{
    fetch('http://localhost:5000/toys')
    .then(res => res.json())
    .then(data => setToyCards(data))
 },[])


    return (
        <div>
            {/* heading */}
            <hr className='w-full bg-black h-1 mt-4'/>
            <h1 className='text-6xl font-bold text-green-800 underline mt-8'>ToyCard</h1>
            <p className='text-green-600 font-bold mt-4'>MKTOYS Has Been Focusing On Quality Service For More Than <br></br> 20 Years! Over 460,000 toys, high quality, low price. Chinese toy supplier. Toys made in China. </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 p-4'>
            {
                 toyCards.length &&
                 toyCards.slice(0,3).map(toyCard => <ToyCard
                key={toyCard._id}
                toyCard = {toyCard}
                ></ToyCard>)
            }
            </div>
       
        </div>
    );
};

export default ToyCards;