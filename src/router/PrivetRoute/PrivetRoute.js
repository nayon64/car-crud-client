import React, { useContext } from 'react';
import { Navigate,  useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation()
	if (loading) {
		return <p className='text-4xl'>Loading....</p>
	}
	if (user) {
		return children;
	}
	return <Navigate to="/login" state={{form:location}} replace> </Navigate>
};

export default PrivetRoute;