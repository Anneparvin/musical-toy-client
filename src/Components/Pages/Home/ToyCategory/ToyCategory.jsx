import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const ToyCategory = () => {
    const categories = useLoaderData();
    console.log(categories);


    return (
        <div>
            {
                categories.length &&
                categories.map(category => <Category
                key={category.toyId}
                category = {category}
                ></Category>)
            }
        </div>
    );
};

export default ToyCategory;