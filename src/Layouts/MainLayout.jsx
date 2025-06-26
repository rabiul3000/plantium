import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router';
import LoadingPage from '../pages/Loading/LoadingPage';

const MainLayout = () => {
	const [loading, setLoading] = useState(true);

	const { pathname } = useLocation();

	useEffect(() => {
		setLoading(true);
	}, [pathname]);

	useEffect(() => {
		setLoading(false);
	}, [loading]);
	
	return (
		<div>
			<Navbar />
			{loading ? <LoadingPage /> : <Outlet />}
			<Footer />
		</div>
	);
};

export default MainLayout;
