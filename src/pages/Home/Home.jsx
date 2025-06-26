import React, { useContext, useEffect, useMemo, useState } from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import MyPlants from '../MyPlants/MyPlants';
import AuthContext from '../../contexts/AuthContext';
import LoadingPage from '../Loading/LoadingPage';

const Home = () => {
	const { user, authLoading } = useContext(AuthContext);
	const images = useMemo(() => [img1, img2, img3, img4], []);
	const [currentImg, setCurrentImg] = useState(images[0]);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImg((prevImage) => {
				let currentImageIndex = images.indexOf(prevImage);
				let nextIndex;
				let lastIndex = images.length - 1;
				if (currentImageIndex === lastIndex) {
					nextIndex = 0;
				} else {
					nextIndex = currentImageIndex + 1;
				}
				return images[nextIndex];
			});
		}, 3000); // Change every 1 second

		return () => clearInterval(timer); // Cleanup on unmount
	}, [images]);

	return (
		<div className='flex flex-col'>
			<div className='flex justify-start'>
				<label className='swap swap-rotate absolute z-30 p-4'>
					{/* this hidden checkbox controls the state */}
					<input
						type='checkbox'
						className='theme-controller'
						value='synthwave'
					/>

					{/* sun icon */}
					<svg
						className='swap-off h-8 w-8 fill-current'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
					>
						<path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
					</svg>

					{/* moon icon */}
					<svg
						className='swap-on h-8 w-8'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
					>
						<path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
					</svg>
				</label>
			</div>


			<div
				style={{
					width: '100%',
					height: '100vh',
					backgroundImage: `url(${currentImg})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className='py-12 px-32 flex flex-col'>
					<h1 className='text-8xl text-green-700  font-extrabold'>Nature</h1>
					<div className='flex gap-2'>
						<div className='border-r-3  border-green-700 pr-2'>
							<h1 className='text-4xl text-green-700  font-extrabold'>Relax</h1>
							<h1 className='text-4xl text-green-700  font-extrabold'>With</h1>
							<h1 className='text-4xl text-green-700  font-extrabold'>
								Nature
							</h1>
						</div>
						<div className='w-xs flex flex-col gap-4'>
							<p className='text-sm font-semibold text-gray-800'>
								<span className='bg-yellow-300 rounded-full px-2'>Tips:</span>{' '}
								<br />
								1. Water roots, not leaves — growth begins from the ground up
							</p>
							<p className='text-sm font-semibold text-gray-800'>
								2. Water roots, not leaves — growth begins from the ground up
							</p>
							<p className='text-sm font-semibold text-gray-800'>
								3. Each plant grows at its pace — just like dreams, don't rush
								them.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='py-24'>
				<h1 className='text-center text-green-700 py-12 text-5xl font-bold'>
					{' '}
					New Plants{' '}
				</h1>
				{authLoading ? (
					<LoadingPage />
				) : !user ? (
					<p className='text-center'>Login To view</p>
				) : (
					<MyPlants limit={true} />
				)}
			</div>
		</div>
	);
};

export default Home;
