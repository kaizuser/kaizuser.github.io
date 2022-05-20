import React from 'react'

export default function Navbar() {
	return (
		<>
			<nav className='navbar m-2 p-3 flex justify-center items-center space-x-12 z-40 bg-blackMain'>
				<a href='#home' className='nav-text text-blueMain cursor-pointer w-20 transition duration-200 ease-in'>&gt; Home</a>
				<a href='#projects' className='nav-text text-blueMain cursor-pointer w-32 transition duration-200 ease-in'>&gt; Projects</a>
				<a href='#experience' className='nav-text text-blueMain cursor-pointer w-16 transition duration-200 ease-in'>&gt; XP</a>
				<a href='#about' className='nav-text text-blueMain cursor-pointer w-24 transition duration-200 ease-in'>&gt; About</a>
			</nav>

		</>

	)
}
