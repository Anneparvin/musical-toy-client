import React from 'react';
import login from '../../../../assets/images/toyPlay/ai-portrait.jpg'

const Login = () => {
	const handleLogin = (event)=> {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const Password = form.Password.value;
		const user = {email, Password}
		console.log(user);
		
	}
    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row justify-evenly">
    <div className="justify-center p-3">
     <img className='w-4/5 h-2/5 rounded-lg' src={login} alt='pic'/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
	<h1 className="text-3xl font-bold text-center">Login now!</h1>
     <form onSubmit={handleLogin}>
	 <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
      </div>
	 </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;