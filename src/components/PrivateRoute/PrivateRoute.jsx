import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
	const { user, authLoading } = useContext(AuthContext);
	const { pathname } = useLocation();

	if (user) {
		return children;
	} else {
		return !authLoading && <Navigate to='/login' state={{ from: pathname }} />;
	}
};

export default PrivateRoute;
