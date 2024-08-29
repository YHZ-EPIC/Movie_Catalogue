import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='p-4 '>
			<div className='container flex items-center justify-between mx-auto'>
				<NavLink to='/'>
					<img
						alt='Home'
						title='Home'
						src='/cinema.png'
						className='rounded-lg hover:border-2 h-14 w-14 hover:border-spacing-2 hover:bg-gray-300'
					/>
				</NavLink>

				<div className='md:hidden'>
					<button
						onClick={toggleMenu}
						className='text-white focus:outline-none'>
						{/* Hamburger Icon */}
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16m-7 6h7'
							/>
						</svg>
					</button>
				</div>

				<div className='hidden space-x-4 md:flex'>
					<NavLink
						to='/'
						className='text-white hover:text-gray-300'
						activeclassname='font-bold'>
						<button className='px-4 py-2'> 🏠 Home</button>
					</NavLink>
					<NavLink
						to='https://my-portfolio-yhz.vercel.app/'
						target='_blank'
						className='border-purple-500 border-3'
						activeclassname='font-bold'>
						<button className='px-4 py-2'> 👉 About Me</button>
					</NavLink>
					<NavLink
						to='/list'
						className='hover:text-gray-300'>
						<button className='px-4 py-2 text-white'> 📃 Watch List</button>
					</NavLink>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className='flex flex-col items-center mt-4 space-y-4 md:hidden'>
					<NavLink
						to='/'
						className='text-white hover:text-gray-300'
						activeclassname='font-bold'>
						<button className='w-full px-4 py-2'> 🏠 Home</button>
					</NavLink>
					<NavLink
						to='https://my-portfolio-yhz.vercel.app/'
						target='_blank'
						className='border-purple-500 border-3'
						activeclassname='font-bold'>
						<button className='w-full px-4 py-2'> 👉 About Me</button>
					</NavLink>
					<NavLink
						to='/list'
						className='hover:text-gray-300'>
						<button className='w-full px-4 py-2 text-white'>
							{' '}
							📃 Watch List
						</button>
					</NavLink>
				</div>
			)}
		</nav>
	);
}
