import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PlantDetail = () => {
	const { plant } = useLoaderData();
    
	const {
		careLevel,
		category,
		description,
		email,
		image,
		lastWateringDate,
		name,
		nextWateringDate,
		username,
		wateringFrequency,
		health,
	} = plant;

	const navigate = useNavigate();

	return (
		<div className='flex justify-center bg-base-200 p-8'>
			<div className='hero bg-base-200 min-h-screen lg:text-left text-center'>
				<div className='hero-content flex-col lg:flex-row-reverse border border-gray-200 rounded-lg shadow'>
					<img src={image} className='max-w-sm rounded-lg shadow-2xl' />
					<div>
						<h1 className='text-5xl font-bold text-green-800 capitalize'>
							{name}
						</h1>
						<p className='pt-6  text-slate-700 '>{description}</p>
						<p className='py-2 text-sm capitalize font-bold text-slate-700'>
							{' '}
							Health:{' '}
							<span
								className='badge'
								style={{
									color:
										health === 'good'
											? 'green'
											: plant.health === 'bad'
											? 'yellow'
											: 'tomato',
								}}
							>
								{health}
							</span>
						</p>

						<div className='text-sm capitalize font-semibold text-slate-700 flex flex-col gap-2'>
							<p> Category: {category} </p>
							<p> CareLevel: {careLevel} </p>
							<p> Last Water: {lastWateringDate} </p>
							<p> Next Water day: {nextWateringDate} </p>
							<p> Watering Frequency: {wateringFrequency} Days</p>
							<button
								className='btn btn-sm btn-primary btn-soft'
								onClick={() => navigate(-1)}
							>
								Go Back
							</button>
						</div>

						<div className='text-xs text-gray-500 mt-4 '>
							<p>
								Added by {username} Email: {email}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlantDetail;
