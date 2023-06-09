import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Singing from '../Singing/Singing';
import Team from '../Team/Team';
import ToyCard from '../ToyCard/ToyCards';
import ToyCategory from '../ToyCategory/ToyCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Singing></Singing>
            <Team></Team>
            <ToyCard></ToyCard>
            <ToyCategory></ToyCategory>
        </div>
    );
};

export default Home;