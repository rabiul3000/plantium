// Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-gray-200 py-2'>
			<nav className='flex justify-center gap-6 text-2xl mb-3'>
				<a
					href='https://linkedin.com'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-teal-400 transition-colors'
				>
					<FaLinkedin />
				</a>

				<a
					href='https://github.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-teal-400 transition-colors'
				>
					<FaGithub />
				</a>
				<a
					href='https://x.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-teal-400 transition-colors'
				>
					<FaTwitter />
				</a>
			</nav>

			{/* copyright row */}
			<div className='text-center text-sm flex fex-col gap-2 justify-center items-center'>
				<p>Contact Email- mdrabiul.asia@gmail.com</p> | &copy; 2025 Plantium.
				All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
