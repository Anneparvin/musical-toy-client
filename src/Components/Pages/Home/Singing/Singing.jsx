import React from 'react';
import phn1 from '../../../../assets/images/musical notes/images.jpg'
import phn2 from '../../../../assets/images/musical notes/hand-drawn-christmas-toys-collection_23-2148762105.avif'
import phn3 from '../../../../assets/images/musical notes/font-design-word-toy-shop-with-many-toys-white-background_1308-42186.avif'
import pic1 from '../../../../assets/images/musical notes/images.png'

const Singing = () => {
    return (
      <div>
          <hr className='w-full bg-black h-1 mt-4'/>
        <h1 className='text-2xl text-green-800 font-bold'>Songs you love</h1>
        <h1 className='text-xl font-thin text-slate'>millions of songs, artists you know and love plus new ones to discover.</h1>
        <h2 className='text-xl font-thin text-slate'>All your favorite music - Free! Streaming music stations that you can personalize. Radio Gratuita.</h2>
        {/* kbd */}
        <div className="stats shadow grid grid-cols-1 md:grid-cols-3 w-full">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>
{/* mobile mockup */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-2 bg-red-800 rounded-xl mt-4 p-4 md:p-4'>
         <div className="mockup-phone">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">
        <img src={phn1} alt='pic'/>
        <p className='text-red-700 font-bold'>Singing is the act of creating musical sounds with the voice. A person whose profession is singing is called a singer, artist or vocalist (in jazz and/or popular music). Singers perform music (arias, recitatives, songs, etc.) that can be sung with or without accompaniment by musical instruments.</p>
    </div>
  </div>
</div>
         <div className="mockup-phone">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">
       
        <img src={phn2} alt='pic'/>
        <p className='text-green-700 font-bold'>Singing is the act of creating musical sounds with the voice. A person whose profession is singing is called a singer, artist or vocalist (in jazz and/or popular music). Singers perform music (arias, recitatives, songs, etc.) that can be sung with or without accompaniment by musical instruments.</p>
    </div>
  </div>
</div>
         <div className="mockup-phone">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">
       
        <img className='w-full' src={phn3} alt='pic'/>
        <p className='text-goldenrod-700 font-bold'>Singing is the act of creating musical sounds with the voice. A person whose profession is singing is called a singer, artist or vocalist (in jazz and/or popular music). Singers perform music (arias, recitatives, songs, etc.) that can be sung with or without accompaniment by musical instruments.</p>
    </div>
  </div>
</div>
        </div>
      </div>
    );
};

export default Singing;