import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useLoaderData } from 'react-router-dom';

const ToysService = () => {
    const {user} = useContext(AuthContext);
    const allToys = useLoaderData();
    // const {toyId,rating,quantity,subject,Name} =allToys;

    const handleToyService =(event) => {
        event.preDefault();

        const form = event.target;
       const name = form.name.value;
       const email = user?.email;
    //    const toyName =form.toyName.value;
    //    const addToy = {
    //             customerName: name, 
    //             email, 
    //             quantity,
    //             toyName, 
    //             subject,
    //             rating,
    //             toyId,
    //             price
    //         }
    //         console.log(addToy);

    // fetch('http://localhost:5000/allToys', {
    //     method: 'POST', 
    //     headers: {
    //         'content-type': 'application/json'
    //     }, 
    //     body: JSON.stringify(addToy)
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     if(data.insertedId){
    //         alert('addToy successfully')
    //     }
    // })

    }


    return (
        <div>
            <h1 className='text-4xl font-bold underline mt-8 mb-4'>{allToys.Name}</h1>
            <form onSubmit={handleToyService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Name</span>
                  </label>
                  <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">ToyName</span>
                  </label>
                  <input type="text" name="toyName" className="input input-bordered" />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">price</span>
                  </label>
                  <input type="text" className="input input-bordered" />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Sub-category</span>
                  </label>
                  <input type="text"  className="input input-bordered" />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Available Quantity</span>
                  </label>
                  <input type="text"  className="input input-bordered" />
              </div>
          </div>
          <div className="form-control mt-6">
              <input className="btn btn-primary btn-block" type="submit" value="Add a Toy" />
          </div>
      </form>  
        </div>
    );
};

export default ToysService;