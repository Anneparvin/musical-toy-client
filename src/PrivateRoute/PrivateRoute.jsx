import React, { useContext } from 'react';
import { AuthContext } from '../Components/Pages/Providers/AuthProviders';
import { Navigate, useLocation} from 'react-router-dom';




const PrivateRoute = ({children}) => {
     const {user, loading}= useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);

    
    if(loading){
        return <span><progress className="progress w-56"></progress></span>
    }

    if(user?.email){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;

