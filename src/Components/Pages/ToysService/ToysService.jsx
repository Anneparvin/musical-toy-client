import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const ToysService = () => {
    const {user} = useContext(AuthContext);


    return (
        <div>
            <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Name</span>
                  </label>
                  <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Toy Name</span>
                  </label>
                  <input type="date" name="toyName" className="input input-bordered" />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Due amount</span>
                  </label>
                  <input type="text" defaultValue={'$'+ price} className="input input-bordered" />
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
              <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
          </div>
      </form>  
        </div>
    );
};

export default ToysService;