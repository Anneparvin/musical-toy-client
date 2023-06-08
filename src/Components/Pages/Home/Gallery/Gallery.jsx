import React from 'react';
import gallery1 from '../../../../assets/images/Gallery/ai-generated-7743219_640.jpg';
import gallery2 from '../../../../assets/images/Gallery/christmas-7788286_640.jpg';
import gallery3 from '../../../../assets/images/Gallery/couple-7644640_640.jpg';
import gallery4 from '../../../../assets/images/Gallery/game-clock-989522_640.jpg';
import gallery5 from '../../../../assets/images/Gallery/male-3951486_640.jpg';
import gallery6 from '../../../../assets/images/Gallery/music-5724427_640.jpg';
import gallery7 from '../../../../assets/images/Gallery/puzzle-ball-1729042_640.jpg';
import gallery8 from '../../../../assets/images/Gallery/toy-3567266_640.jpg';

const Gallery = () => {
    return (
        <div>
            <hr className='w-full bg-black h-1 mt-4'/>
            <h1 className='text-6xl font-bold mt-8'>Gallery Side</h1>
            <h3 className='font-bold'>With Little People figures, toddlers can explore how exciting is the world around them!</h3>
        <p className='text-xl bg-red-700 p-8 w-full rounded-xl font-bold mt-8'>Get FREE delivery on orders over R800 or Click & Collect nationwide at Toys R Us</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 bg-black p-8 rounded-xl mt-2'>
                <img className='w-full' src={gallery1} alt='pic'/>
                <img className='w-full' src={gallery2} alt='pic'/>
                <img className='w-full' src={gallery3} alt='pic'/>
                <img className='w-full' src={gallery4} alt='pic'/>
                <img className='w-full' src={gallery5} alt='pic'/>
                <img className='w-full' src={gallery6} alt='pic'/>
                <img className='w-full' src={gallery7} alt='pic'/>
                <img className='w-full' src={gallery8} alt='pic'/>
            </div>
            
        </div>
    );
};

export default Gallery;