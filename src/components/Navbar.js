import React from 'react'

export default function Navbar() {
	return (
		<>
			<header className='w-full h-16 flex justify-center bg-blackMain'>
				<nav className='w-full m-2 flex justify-center items-center space-x-12'>
					<h2 className='nav-text text-blueMain cursor-pointer w-20 flex justify-center items-center transition duration-200 ease-in'>&gt; Home</h2>
					<h2 className='nav-text text-blueMain cursor-pointer w-32 flex justify-center items-center transition duration-200 ease-in'>&gt; Projects</h2>
					<h2 className='nav-text text-blueMain cursor-pointer w-16 flex justify-center items-center transition duration-200 ease-in'>&gt; XP</h2>
					<h2 className='nav-text text-blueMain cursor-pointer w-24 flex justify-center items-center transition duration-200 ease-in'>&gt; About</h2>
				</nav>

			</header>
		</>

	)
}
