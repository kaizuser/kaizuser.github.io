import React from 'react'


export default function About(){
	return (
		<>
			<section className='bg-blackMain w-full min-h-[50vh] flex items-center flex-col mt-32' id='about'>

				<div className='flex justify-center items-center flex-col'> 
					<h2 className='text-blueMain text-justify w-[4.5rem]'>&lt;About&gt;</h2>

					<div className='flex items-center max-w-[35rem] text-right flex-col text-justify'>
						<p className='text-[#ffffff] text-xl m-3'>Hi, I'm Thiago Chiesa. I've been programming since I was a kid, so there is a genuine passion for this field. I'm a linux user, arch linux specifically. I love everything unnecesesarily complicated, just to prove myself what I'm capable of.</p>

						<p className='text-[#ffffff] text-xl m-3'>My knowledge is reduced to c++, backend development with python, MERN full stack, typescript, and some of Vue. I've been working on the MERN full stack recently, with experience in React, React Native, MongoDB, Express, node.js, and redux.</p>
					</div>

					<h2 className='text-blueMain w-[5rem]'>&lt;&#9585;About&gt;</h2>

				</div>
			</section>
		</>
	)
}
