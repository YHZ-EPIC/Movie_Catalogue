import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='text-xl p-1.5 m-0.5 font-semibold text-white'>
			<div className='container flex items-center justify-between mx-auto'>
				<NavLink to='/'>
					<img
						alt='Home'
						title='Home'
						src='../../public/cinema.png'
						className='rounded-lg hover:border-2 h-14 w-14 hover:border-spacing-2 hover:bg-gray-300'
					/>
				</NavLink>

				<div className='space-x-4'>
					<NavLink
						to='/'
						className='text-white hover:text-gray-300'
						activeclassname='font-bold'>
						<button className='px-4 py-2 text-white'> 🏠 Home</button>
					</NavLink>
					<NavLink
						to='https://my-portfolio-yhz.vercel.app/'
						target='_blank'
						className='border-purple-500 border-3'
						activeclassname='font-bold'>
						<button className='px-4 py-2 text-white'> 👉 About Me</button>
					</NavLink>

					<NavLink
						to='/list'
						className='hover:text-gray-300'>
						<button className='px-4 py-2 text-white'> 📃 Watch List</button>
					</NavLink>
				</div>
			</div>
		</nav>
	);
}
