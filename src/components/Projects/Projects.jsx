import React, {useState} from 'react'
import Petshop from './Petshop.tsx'
import Gameover from './Gameover.tsx'
import Tinerary from './Tinerary.tsx'
import Moodmuv from './Moodmuv.tsx'

export default function Projects(){


	return (
		<>
			<section className='bg-blackMain w-full h-auto flex items-center flex-col mt-32' id='projects'>
				<div className='min-h-[70vh] max-w-[70vw] flex justify-between flex-col items-center'>
					<h2 className='text-blueMain text-justify w-[6.5rem]'>&lt;Projects&gt;</h2>

					<div className='flex justify-center items-center mt-5 warning-project'>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blueMain hover:text-[#ffffff] transition duration-300 ease-in w-8 h-3" viewBox="0 0 16 16">
						  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
						</svg>
						<h2 className='text-blueMain text-xs'>The next data is cyphered with caesar cypher for security purposes</h2>
					</div>

					<Moodmuv/>
					<Petshop/>
					<Tinerary/>
					<Gameover/>

					<h2 className='text-blueMain w-[7rem]'>&lt;&#9585;Projects&gt;</h2>
				</div>
			</section>
		</>
	)
}
