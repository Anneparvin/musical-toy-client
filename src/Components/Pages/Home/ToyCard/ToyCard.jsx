
import { Link,useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { useContext} from 'react';


const ToyCard = ({toyCard}) => {
    const {user} = useContext(AuthContext);
    


    const navigate = useNavigate();
    const location = useLocation();
     const from = location.state?.from?.pathname || '/';


    const {Name, subject, Picture, rating, _id} = toyCard;
     
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={Picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Name: {Name}</h2>
			<p className="dark:text-gray-100">subject: {subject}</p>
			<p className="dark:text-gray-100">rating: {rating}</p>
		</div>
        <Link to={`/toys/${_id}`}>
       
        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">View Details</button>
        
        </Link>
		
	</div>
</div>
        </div>
    );
};

export default ToyCard;