import React from 'react';
import img1 from '../../../../assets/images/banner/bright-1866717_640.jpg';
import img2 from '../../../../assets/images/banner/flute-3817976_640.jpg';
import img3 from '../../../../assets/images/banner/play-3304309_640.jpg';
import img4 from '../../../../assets/images/banner/toys-2161403_640.jpg';

const Banner = () => {
    return (
        <div>
          <div className="carousel w-full h-[500px] rounded-xl">
  <div id="item1" className="carousel-item w-full">
    <img src={img1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={img2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={img3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={img4} className="w-full" />
  </div>
</div> 
<div>
    <p className='text-6xl font-bold text-rose-600'>Musical Instruments</p><br></br>
    <p className='text-2xl font-bold text-green-800'>adapted to make musical sounds.</p>
</div>
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>  
        </div>
    );
};

export default Banner;