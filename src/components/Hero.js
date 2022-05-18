import React from 'react'

export default function Hero() {
	return (
		<>
			<section className='hero w-full h-screen flex justify-center items-center text-center bg-blackMain'>
				<div className='text-[#ffffff] w-full relative top-[15vh]'>

					<div className='kaizuser-title bg-[#292929] flex justify-center items-center flex-col'>
						<h1 className='hero-title tracking-[0.3em] text-9xl p-3'>Kaizuser</h1>
						<h2 className='p-3'>Obsessive mediocrity full stack developer</h2>
					</div>

					<div className='kaizuser-description'>
						<p className='text-xl'>I'd say the best way to define would be an obsessive analitic and strategic programmer. I've suffered from identation errors in python, to scratching my head with maping key render problems in React.</p>
						<p className='text-xl'><br/>I have the determination and curiosity to make and understand just about anything.</p> 
					</div>

				</div>

				<div className='lines'>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>


			</section>
		</>

	)
}
