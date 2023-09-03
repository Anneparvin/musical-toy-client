import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Singing from '../Singing/Singing';
import Team from '../Team/Team';
import ToyCard from '../ToyCard/ToyCards';
import CourseTitle from '../../../CourseTitle/CourseTitle';
import MusicCollection from '../MusicCollection/MusicCollection';
import PopularToy from '../PopularToy/PopularToy';
import FeaturedVedio from '../FeaturedVedio/FeaturedVedio';
import UserChart from '../UserReview/UserReview';
import UserReview from '../UserReview/UserReview';



const Home = () => {
    CourseTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Singing></Singing>
            <Team></Team>
            <PopularToy></PopularToy>
            <FeaturedVedio></FeaturedVedio>
            
            <ToyCard></ToyCard>
         <MusicCollection></MusicCollection>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;