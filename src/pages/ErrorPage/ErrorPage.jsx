import React from 'react';
import errorImage from '../../assets/error.jpg';
const ErrorPage = () => {
	return (
		<div className='h-screen flex justify-center py-16'>
			<div>
				<img className='w-60' src={errorImage} alt='' />
			</div>
		</div>
	);
};

export default ErrorPage;
