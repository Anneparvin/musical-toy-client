import React, { useEffect } from 'react';

const CourseTitle = (title) => {
    useEffect(()=>{
        document.title = `${title}-Musical-Toy`;
    },[title])
};

export default CourseTitle;