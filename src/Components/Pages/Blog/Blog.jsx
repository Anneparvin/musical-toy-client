

import React from 'react';
import CourseTitle from '../../CourseTitle/CourseTitle';




const Blog = () => {
  CourseTitle('Blog') 


    return (
      <div className='rounded-lg p-4 mb-4'>
    
          <section>
          <h1 class="text-4xl text-center font-bold underline mt-4 p-4">Blog Question</h1>
        <div className='"grid grid-cols-1 lg:grid-cols-1 gap-4 mt-12 p-4"'>


        {/* question 1 */}
        <div className="card w-full  h-auto bg-lime-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-4xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
    <p className='text-xl justify-start'>
    a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in
    <br></br>
    You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code. This is also known as the backend for frontend (BFF) proxy.</p>
    
  </div>
</div>
        {/* question 2 */}
        <div className="card w-full  h-auto bg-lime-100 shadow-xl mt-4">
  <div className="card-body">
    <h2 className="text-4xl font-bold">Compare SQL and NoSQL databases?</h2>
    <p className='text-xl justify-start'>
    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br></br> SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br></br> SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
    </p>
    
  </div>
</div>
        {/* question 3 */}
        <div className="card w-full h-auto bg-lime-100 shadow-xl mt-4">
  <div className="card-body">
    <h2 className="text-4xl font-bold">What is express js? What is Nest JS ?</h2>
    <p className='text-xl justify-start'>
    Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
    <br></br>
    Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript..</p>
    
  </div>
</div>

{/* {/* question 4 */}
        <div className="card w-full h-auto bg-lime-100 shadow-xl mt-4">
  <div className="card-body">
    <h2 className="text-4xl font-bold">What is MongoDB aggregate and how does it work?
</h2>
    <p className='text-xl justify-start'>
    Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.<br></br>Aggregation is the process of combining things. That is, putting those things together so that we can refer to them collectively. As an example, think about the phone numbers on your cell phone. You can refer to them individually (your mother's number, your best</p>
    
  </div>
</div>
       
        
          </div>
            </section>  
            
        </div>
        
    );
};

export default Blog;