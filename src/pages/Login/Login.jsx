import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
	const [loading, setLoading] = useState(false);
	const { setUser, loginUser, loginWithGoogle } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const handleLogin = (e) => {
		e.preventDefault();
		setLoading(true);

		const form = e.target;
		const formData = new FormData(form);
		const userInfo = Object.fromEntries(formData);

		loginUser(userInfo)
			.then((res) => {
				setUser(res.user);
				setLoading(false);
				form.reset();
				Swal.fire({
					position: 'top',
					icon: 'success',
					title: 'Successfully logged in',
					showConfirmButton: false,
					timer: 2500,
				});
				if (location.state) {
					navigate(location.state.from);
				} else {
					navigate('/');
				}
			})
			.catch((err) => {
				setLoading(false);
				Swal.fire({
					position: 'top-center',
					icon: 'error',
					title: `Login failed! ${err.message}`,
					showConfirmButton: false,
					timer: 2500,
				});
			});
	};
	const handleGoogleLogin = (e) => {
		e.preventDefault();

		loginWithGoogle()
			.then((res) => {
				setUser(res.user);
				setLoading(false);
				Swal.fire({
					position: 'top',
					icon: 'success',
					title: 'Successfully logged in',
					showConfirmButton: false,
					timer: 1500,
				});
				if (location.state) {
					navigate(location.state.from);
				} else {
					navigate('/');
				}
			})
			.catch((err) => {
				setLoading(false);
				Swal.fire({
					position: 'top-center',
					icon: 'error',
					title: `Login failed! ${err.message}`,
					showConfirmButton: false,
					timer: 2500,
				});
			});
	};

	return (
		<div className='flex justify-center	 py-12 loginContainer'>
			<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border border-primary-content'>
				<div className='card-body'>
					<form className='fieldset' onSubmit={handleLogin}>
						<label className='label text-green-700'>Email</label>
						<input
							name='email'
							type='email'
							className='input'
							placeholder='Email'
						/>
						<label className='label  text-green-700'>Password</label>
						<input
							name='password'
							type='password'
							className='input'
							placeholder='Password'
						/>
						<div>
							<a className='link link-hover'>Forgot password?</a>
						</div>
						<button
							disabled={loading}
							className='btn bg-green-700 text-white text-lg mt-4'
						>
							{loading ? 'Loading...' : 'Login'}
						</button>
						<button
							type='button'
							disabled={loading}
							onClick={handleGoogleLogin}
							className='flex items-center justify-center btn btn-outline btn-primary mt-4'
						>
							<span>
								<FcGoogle />
							</span>
							<span>{loading ? 'Loading...' : 'Login With Google'}</span>
						</button>
						<div>
							<Link to={'/register'} className='link link-hover'>
								Not a member? Register here
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
