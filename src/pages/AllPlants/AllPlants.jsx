import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { format } from 'date-fns';

const AllPlants = () => {
	const { result: data } = useLoaderData();
	const [result, setResult] = useState(data);
	const navigate = useNavigate();

	const sortByWateringDate = () => {
		setResult((prev) => {
			return [...prev].sort(
				(a, b) => new Date(b.lastWateringDate) - new Date(a.lastWateringDate)
			);
		});
	};

	const sortByCareLevel = () => {
		let careLevel = {
			easy: 0,
			moderate: 1,
			difficult: 2,
		};
		setResult((prev) => {
			return [...prev].sort(
				(a, b) => careLevel[a.careLevel] - careLevel[b.careLevel]
			);
		});
	};

	return (
		<div className='flex justify-center flex-col items-center'>
			<div className='flex justify-center py-8 flex-col items-center gap-2'>
				<h1 className='text-2xl'>Sort by</h1>
				<div className='flex gap-4'>
					<button className='btn btn-sm btn-soft' onClick={sortByWateringDate}>
						{' '}
						Next Watering Date
					</button>
					<button className='btn btn-sm btn-soft' onClick={sortByCareLevel}>
						{' '}
						Care Level
					</button>
				</div>
			</div>

			<div className='w-8/12 mb-12 overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
				<table className='table table-zebra'>
					{/* head */}
					<thead className='bg-green-700 text-white'>
						<tr>
							<th>Serial No.</th>
							<th>Photo</th>
							<th>Plant Name</th>
							<th>Plant Type</th>
							<th>Care level</th>
							<th>Last Watering Date</th>
						</tr>
					</thead>
					<tbody>
						{/* body */}
						{result.map(
							(
								{ _id, name, image, category, lastWateringDate, careLevel },
								index
							) => (
								<tr
									key={_id}
									className='hover:bg-base-300 cursor-pointer'
									onClick={() => navigate(`/plant/${_id}`)}
								>
									<th>{index + 1}</th>
									<th>
										<div className='avatar'>
											<div className='mask mask-squircle h-12 w-12'>
												<img src={image} alt='img' />
											</div>
										</div>
									</th>
									<td className='capitalize'>{name} </td>
									<td className='capitalize'>{category}</td>
									<td
										className='capitalize font-bold'
										style={{
											color:
												careLevel === 'easy'
													? 'green'
													: careLevel === 'moderate'
													? 'yellowgreen'
													: 'tomato',
										}}
									>
										{careLevel}
									</td>
									<td className='text-xs text-gray-600 font-semibold'>
										{format(new Date(lastWateringDate), 'dd/MMMM/yyyy')}
									</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllPlants;
