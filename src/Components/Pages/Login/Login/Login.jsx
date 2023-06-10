import React, { useContext, useState } from 'react';
import login from '../../../../assets/images/toyPlay/ai-portrait.jpg'
import CourseTitle from '../../../CourseTitle/CourseTitle';
import { ToastContainer, toast } from 'react-toastify';
import {AuthContext} from '../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
  const {signIn, googleSignIn} = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  CourseTitle('Login');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


	const handleLogin = (event)=> {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		const user = {email, password}
		console.log(user);
    toast('🦄 Successfully Login!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
		
           //Password Error Message
      if(!/(?=.*[A-Z])/.test(password)){
        setPasswordError('Please provide atleast one uppercase.');
        setError(true);
        return;
    }
    if(password.length < 8){
        setPasswordError('Password should be atleast 8 characters.');
        setError(true);
        return;
    }
    if(!/(?=.*[!@#$%*])/.test(password)){
        setPasswordError('Please use atleast 1 special character.');
        setError(true);
        return;
    }

    // user sign in
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      setSuccess(true);
      navigate(from, {replace: true});
    })
    .catch(error => {
      console.error(error.message);
      setPasswordError(error.message)
    })
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
   <ToastContainer></ToastContainer>
   <p className='text-sm text-green-700'>{success}</p>
   <p className='text-sm text-red-700'>{error}</p>

   <div className="justify-center space-x-4">
    <hr  className='w-full bg-black h-2'/>
    <p>Login with social account</p>
                        <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;