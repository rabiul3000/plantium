import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { RiPlantFill } from 'react-icons/ri';
import api from '../../api/api';
import { successAlert } from '../../utils/Alerts';
import { useNavigate } from 'react-router';

const AddPlant = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const plantInfo = Object.fromEntries(formData);

		fetch(`${api}/plant`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(plantInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.result.insertedId) {
					successAlert('Plant added successfully');
					form.reset();
					navigate('/all_plants');
				}
			});
	};
	return (
		<div className='flex flex-col items-center justify-center mt-4'>
			<form
				onSubmit={handleSubmit}
				className='fieldset grid lg:grid-cols-2 grid-cols-1 lg:w-8/12 w-10/12 gap-4 bg-base-200 border-base-200 rounded-box border p-4'
			>
				<div className='flex flex-col'>
					<label className='label'>Plant Name</label>
					<input
						type='text'
						name='name'
						className='input w-full'
						placeholder='Choose a name'
					/>
				</div>

				<div className='flex flex-col'>
					<label className='label'>Plant Image</label>
					<input
						type='text'
						name='image'
						className='input w-full'
						placeholder='Plant image url'
					/>
				</div>

				<div className='flex flex-col'>
					<label className='label'>Description</label>
					<input
						type='text'
						name='description'
						className='input w-full'
						placeholder='Short description'
					/>
				</div>

				<div className='flex flex-col'>
					<label htmlFor='cars' className='label'>
						Care level
					</label>
					<select
						className='py-2 border outline-none border-gray-200 rounded-md'
						name='careLevel'
						id='careLevel'
						defaultChecked
					>
						<option value='easy'>Easy</option>
						<option value='moderate'>Moderate</option>
						<option value='difficult'>Difficult</option>
					</select>
				</div>
				<div className='flex flex-col '>
					<label htmlFor='watering' className='label'>
						Health Status
					</label>
					<select
						className='py-2 border outline-none border-gray-200 rounded-md'
						name='health'
						id='health'
						defaultChecked
					>
						<option value='good'>Good</option>
						<option value='bad'>Bad</option>
						<option value='worse'>Worse</option>
					</select>
				</div>

				<div className='flex flex-col '>
					<label htmlFor='category' className='label'>
						Choose a category:
					</label>
					<select
						className='py-2 border outline-none border-gray-200 rounded-md'
						name='category'
						id='category'
						defaultChecked
					>
						<option value='fern'>Fern</option>
						<option value='succulent'>Succulent</option>
						<option value='flower'>Flower</option>
					</select>
				</div>

				<div className='flex flex-col '>
					<label htmlFor='watering' className='label'>
						Watering Frequency
					</label>
					<select
						className='py-2 border outline-none border-gray-200 rounded-md'
						name='wateringFrequency'
						id='wateringFrequency'
						defaultChecked
					>
						<option value='1'>Every day</option>
						<option value='2'>2 days</option>
						<option value='3'>3 days</option>
					</select>
				</div>

				<div className='flex flex-col'>
					<label className='label'>Last Watered Date</label>
					<input
						name='lastWateringDate'
						type='date'
						className='input w-full'
						placeholder='Name'
					/>
				</div>

				<div className='flex flex-col'>
					<label className='label'>Next Watering Date</label>
					<input
						name='nextWateringDate'
						type='date'
						className='input w-full'
						placeholder='Name'
					/>
				</div>

				<div className='flex flex-col'>
					<label className='label'>User Name</label>
					<input
						name='username'
						type='text'
						className='input w-full text-gray-500'
						placeholder='User email'
						readOnly
						defaultValue={user?.displayName}
					/>
				</div>
				<div className='flex flex-col'>
					<label className='label'>User Email</label>
					<input
						name='email'
						type='text'
						className='input w-full text-gray-500'
						placeholder='User email'
						readOnly
						defaultValue={user?.email}
					/>
				</div>
				<br />
				<div className='flex flex-col w-fit'>
					<button type='submit' className='btn  bg-green-700 text-white'>
						Add Plant
						<RiPlantFill />
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddPlant;
