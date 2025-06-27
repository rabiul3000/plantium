import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import api from '../../api/api';
import LoadingPage from '../Loading/LoadingPage';
import { ErrorAlert } from '../../utils/Alerts';

const MyPlants = () => {
	const [plants, setPlants] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${api}/plants`)
			.then((res) => {
				const newest = res.data.slice(0, 5); // take first 5 plants
				setPlants(newest);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				ErrorAlert(err.message);
			});
	}, []);

	return (
		<div>
			{loading ? (
				<LoadingPage />
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8'>
					{plants.length ? (
						plants.map(
							({
								_id,
								image,
								name,
								description,
								health,
								category,
								careLevel,
								lastWateringDate,
							}) => (
								<div
									key={_id}
									className='card w-full bg-base-100 shadow-md hover:shadow-xl transition-all'
								>
									<figure className='h-48 overflow-hidden'>
										<img src={image} alt={name} className='w-full h-full object-cover' />
									</figure>
									<div className='card-body'>
										<h2 className='card-title capitalize text-green-700 text-xl'>
											{name}
										</h2>
										<p className='text-sm text-gray-600 line-clamp-2'>
											{description}
										</p>

										<div className='text-sm text-gray-700 mt-2'>
											<p><strong>Category:</strong> {category}</p>
											<p><strong>Care Level:</strong> {careLevel}</p>
											<p><strong>Health:</strong>{' '}
												<span className='badge badge-outline'>{health}</span>
											</p>
											<p><strong>Last Watered:</strong> {lastWateringDate}</p>
										</div>

										<div className='card-actions mt-4 justify-end'>
											<button
												onClick={() => navigate(`/plant/${_id}`)}
												className='btn btn-sm btn-primary'
											>
												See Details
											</button>
										</div>
									</div>
								</div>
							)
						)
					) : (
						<div className='col-span-4 text-center'>
							<p className='text-xl'>No plants found.</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default MyPlants;
