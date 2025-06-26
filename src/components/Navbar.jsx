import React, { useContext, useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link, NavLink } from 'react-router';
import plantIcon from '../assets/plant.jpg';
import AuthContext from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
	const { user, logoutUser, authLoading } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);

	const links = [
		{
			name: 'Home',
			path: '/',
			title: 'Home',
		},
		{
			name: 'All Plants',
			path: '/all_plants',
			title: 'All Plants',
		},
		{
			name: 'Add Plant',
			path: '/add_plant',
			title: 'Add Plant',
		},
		{
			name: 'My Plants',
			path: '/my_plants',
			title: 'My Plants',
		},
	];

	const handleLogout = () => {
		setLoading(true);
		logoutUser()
			.then(() => {
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				Swal.fire({
					position: 'top-center',
					icon: 'error',
					title: `something wrong!${err.message}`,
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};

	return (
		<div className='navbar bg-base-100 shadow-sm'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
						<HiMenuAlt1 size={24} />
					</div>
					<ul
						tabIndex={0}
						className='menu flex flex-col menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
					>
						{links.map((link, index) => (
							<NavLink
								to={link.path}
								key={index}
								className={'py-2 hover:bg-emerald-800 hover:text-white'}
							>
								{link.title}
							</NavLink>
						))}
					</ul>
				</div>
				<div className='flex items-center justify-center'>
					<img className='w-12' src={plantIcon} alt='icon' />
					<Link
						className='btn btn-ghost text-green-700 font-bold text-xl'
						to={'/'}
					>
						Plantium
					</Link>
				</div>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 flex'>
					{links.map((link, index) => (
						<NavLink className={'btn btn-ghost'} key={index} to={link.path}>
							{link.title}
						</NavLink>
					))}
				</ul>
			</div>
			<div className='navbar-end'>
				{user ? (
					<>
						<div className='tooltip tooltip-left'>
							<div className='tooltip-content'>
								<div className='animate-bounce text-orange-400  text-sm font-black'>
									{user?.displayName}
								</div>
							</div>
							<div className='avatar'>
								<div className='mask mask-squircle w-12'>
									<img src={user?.photoURL} loading='lazy' />
								</div>
							</div>
						</div>
						<button
							type='button'
							className='btn btn-xs mx-2 btn-soft btn-neutral'
							onClick={handleLogout}
							disabled={loading}
						>
							Logout
						</button>
					</>
				) : authLoading ? (
					<div className='mr-12'>
						<span className='loading loading-bars text-green-700 loading-sm '></span>
						<span className='loading loading-bars text-green-700 loading-sm '></span>
					</div>
				) : (
					<Link
						onClick={handleLogout}
						to={'/login'}
						className='btn btn-sm btn-neutral text-white mr-12'
					>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
