import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import api from '../../api/api';
import LoadingPage from '../Loading/LoadingPage';
import { useNavigate } from 'react-router';
import { ErrorAlert } from '../../utils/Alerts';

const MyPlants = ({ limit }) => {
	const { user } = useContext(AuthContext);
	const [plants, setPlants] = useState([]);
	const [loading, setLoading] = useState('false');

	useEffect(() => {
		setLoading(true);
		const loadData = () => {
			fetch(`${api}/my_plants/${user?.email}`)
				.then((res) => res.json())
				.then(({ myPlants }) => {
					setPlants(myPlants);
					setLoading(false);
				})
				.catch((err) => {
					setLoading(false);
					ErrorAlert(err.message);
				});
		};

		const loadDataWithLimit = () => {
			fetch(`${api}/last_plants/${user?.email}`)
				.then((res) => res.json())
				.then(({ myPlants }) => {
					setPlants(myPlants);
					setLoading(false);
				})
				.catch((err) => {
					setLoading(false);
					ErrorAlert(err.message);
				});
		};
		if (limit) {
			loadDataWithLimit();
		} else {
			loadData();
		}
	}, []);

	const navigate = useNavigate();

	return (
		<div>
			{loading ? (
				<LoadingPage />
			) : (
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-8'>
					{plants.length ? (
						plants.map(
							({
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
								_id,
							}) => (
								<div
									key={_id}
									className='hero-content flex-col lg:flex-row-reverse border border-gray-200 rounded-lg shadow'
								>
									<img src={image} className='max-w-sm rounded-lg shadow-2xl' />
									<div>
										<h1 className='text-2xl font-bold text-green-800 capitalize'>
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
															: health === 'bad'
															? 'yellowgreen'
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
												onClick={() =>
													navigate(`/update_plant/${_id}`, {
														state: {
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
															_id,
														},
													})
												}
												to={`/update_plant/${_id}`}
												className='btn btn-sm btn-primary btn-soft'
											>
												Update Plant
											</button>
										</div>

										<div className='text-xs text-gray-500 mt-4 '>
											<p>
												Added by {username} Email: {email}
											</p>
										</div>
									</div>
								</div>
							)
						)
					) : (
						<div className='col-span-3  text-center'>
							<p className='text-3xl'>No Data Yet!</p>
							<p>Add a plant to view</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default MyPlants;
