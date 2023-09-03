import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const ToyCards = () => {
    const {user} = useContext(AuthContext);
  const [toyCards, setToyCards] = useState([]);

 useEffect (()=>{
    fetch('http://localhost:5000/toys')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    const toysData = data.filter(toy => toy.toyId == 11)
    
    setToyCards(toysData)
    console.log(toysData)
    })
 },[])

    const handlePuzzel = ()=> {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
            const toysData = data.filter(toy => toy.toyId == 11)
            setToyCards(toysData)
            console.log(toysData)
            })
    }

    const handleMusic = ()=> {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
            const toysData = data.filter(toy => toy.toyId == 12)
            setToyCards(toysData)
            console.log(toysData)
            })
    }
    const handleBoard = ()=> {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
            const toysData = data.filter(toy => toy.toyId == 13)
            setToyCards(toysData)
            console.log(toysData)
            })
    }

    return (
        <div>
            {/* heading */}
            <hr className='w-full bg-black h-1 mt-4'/>
            <h1 className='text-6xl font-bold text-green-800 underline mt-8'>ToyCard</h1>
            <p className='text-green-600 font-bold mt-4'>MKTOYS Has Been Focusing On Quality Service For More Than <br></br> 20 Years! Over 460,000 toys, high quality, low price. Chinese toy supplier. Toys made in China. </p>
            <div>

            <Tabs>
                <TabList>
                <Tab onClick={handlePuzzel}>Puzzel Board</Tab>
                <Tab onClick={handleMusic}>Musical Instruments</Tab>
                <Tab onClick={handleBoard}>Board Games</Tab>
                </TabList>

                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-4'>
                    {
                      toyCards.map(toyCard => <ToyCard
                      key={toyCard._id}
                      toyCard = {toyCard}
                      ></ToyCard>)  
                    }
                </div>
                </TabPanel>

                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-4'>
                    {
                      toyCards.map(toyCard => <ToyCard
                      key={toyCard._id}
                      toyCard = {toyCard}
                      ></ToyCard>)  
                    }
                </div>
                </TabPanel>

                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-4'>
                    {
                      toyCards.map(toyCard => <ToyCard
                      key={toyCard._id}
                      toyCard = {toyCard}
                      ></ToyCard>)  
                    }
                </div>
                </TabPanel>
            </Tabs>
           
            </div>
       
        </div>
    );
};

export default ToyCards;