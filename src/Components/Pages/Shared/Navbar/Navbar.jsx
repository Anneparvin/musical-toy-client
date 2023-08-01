import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo/bird-3971751_640.png';
import CourseTitle from '../../../CourseTitle/CourseTitle';
import { AuthContext } from '../../Providers/AuthProviders';

const Navbar = () => {
  const  {user, logOut}  = useContext(AuthContext);
  console.log(user)
    CourseTitle('Login');

    const handleLogOut = () => {
      logOut()
      .then(() => {})
      .catch(error => console.log(error));
    }
    

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        
        {
      user ? <>
      <li><Link to='/alltoys'>AllToys</Link></li>


      <div className="w-10 rounded-full mx-2 hover:tooltip hover:tooltip-open hover:tooltip-bottom" 
      data-tip={user?.displayName || 'Forida Parvin '}>
      <img className="h-10 rounded-full" src={user?.photoURL ? user.photoURL : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt='picture' /></div>

      <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
      </> : <>
      
      <li><Link to='/login'>Login</Link></li>
    </>
    }
    
                    </>
    return (
        <div className="navbar bg-black text-white p-8 rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <div className='flex lg:flex-col'>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img className='w-24 rounded-xl' src={logo} alt='pic'/>
    </Link>
    <p className='text-2xl font-bold flex'><span className='text-green-400 text-4xl font-bold'>Musical</span><span className='text-amber-400 font-bold text-5xl'>Toy</span> </p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {menuItems}
    </ul>
  </div>
  <div className="navbar-end lg:visible">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;