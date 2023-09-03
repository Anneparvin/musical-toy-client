import React from 'react';
import popular1 from '../../../../assets/images/musical notes/istockphoto-146816210-612x612.jpg'
import popular2 from '../../../../assets/images/musical notes/istockphoto-1472892309-612x612.jpg'
import popular3 from '../../../../assets/images/musical notes/istockphoto-1567307575-612x612.jpg'
import popular4 from '../../../../assets/images/musical notes/istockphoto-1576632074-612x612.jpg'
import popular5 from '../../../../assets/images/musical notes/istockphoto-1601659339-612x612.jpg'

const PopularToy = () => {
    return (
        <div>
             <h1 className='text-4xl font-serif font-bold text-center mt-8'>Our Popular Toy</h1>
          <div className="relative flex items-center justify-center w-full dark:text-gray-50">
	<button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri">
		<svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
	<div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={popular1} alt="Image 1" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={popular2}alt="Image 2" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={popular3} alt="Image 3" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={popular4} alt="Image 4" />
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={popular5}alt="Image 5" />
		</div>
	</div>
	<button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ri focus:ri focus:ri">
		<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
</div>  
        </div>
    );
};

export default PopularToy;