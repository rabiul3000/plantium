import React from 'react';

const LoadingPage = () => {
	return (
		<div className='flex justify-center items-center h-52'>
			<span className='loading loading-bars text-green-700 loading-sm'></span>
			<span className='loading loading-bars text-green-700 loading-sm'></span>
			<span className='loading loading-bars text-green-700 loading-sm'></span>
			<span className='loading loading-bars text-green-700 loading-sm'></span>
		</div>
	);
};

export default LoadingPage;
