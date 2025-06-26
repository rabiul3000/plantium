import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
	const [loading, setLoading] = useState(false);
	const { registerUser, setUser, addPhotoURL } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleRegister = (e) => {
		e.preventDefault();

		setLoading(true);
		const form = e.target;
		const formData = new FormData(form);
		const userInfo = Object.fromEntries(formData);
		registerUser(userInfo)
			.then((res) => {
				addPhotoURL(userInfo.name, userInfo.photoURL)
					.then(() => {
						setUser(res.user);
						setLoading(false);
						form.reset();
						Swal.fire({
							position: 'top-center',
							icon: 'success',
							title: 'Successfully registered',
							showConfirmButton: false,
							timer: 2500,
						});
						navigate('/login');
					})
					.catch((err) => {
						setLoading(false);
						Swal.fire({
							position: 'top-center',
							icon: 'error',
							title: `Registration failed! ${err.message}`,
							showConfirmButton: false,
							timer: 2500,
						});
					});
			})
			.catch((err) => {
				setLoading(false);
				alert(err.message);
			});
	};

	return (
		<div>
			<div className='flex justify-center py-12 loginContainer'>
				<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-primary-content'>
					<div className='card-body'>
						<form className='fieldset' onSubmit={handleRegister}>
							<label className='label text-green-700'>Name</label>
							<input
								name='name'
								type='text'
								className='input'
								placeholder='Choose a name'
								required
							/>
							<label className='label text-green-700'>Email</label>
							<input
								name='email'
								type='email'
								className='input'
								placeholder='Email'
								required
							/>
							<label className='label  text-green-700'>Password</label>
							<input
								name='password'
								type='password'
								className='input'
								placeholder='Password'
								minLength='8'								
								required
							/>

							<label className='label  text-green-700'>Photo URL</label>
							<input
								name='photoURL'
								type='text'
								className='input'
								placeholder='Photo URL'
								required
							/>
							<div>
								<a className='link link-hover'>Forgot password?</a>
							</div>
							<button
								type='submit'
								disabled={loading}
								className='btn bg-green-700 text-white text-lg mt-4'
							>
								{loading ? 'loading...' : 'Register'}
							</button>
							<div>
								<Link to={'/login'} className='link link-hover'>
									Already Registered? Login here
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
