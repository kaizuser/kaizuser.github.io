import React, {useState} from "react";

export default function Petshop(){

	const [petshop, setPetshop] = useState(false)

	const PetShop = () => {
		return (
			<>
				{petshop ? 
				<>
				<div className='project-content h-full flex justify-between flex-col min-w-[30vw]'>
					<div className=''>
						<h2 className='text-blueMain cypher-description-animation'>&gt; Grupal Project</h2>
					</div>

					<div className=''>
						<h1 className='text-[#ffffff] p-0 cypher-title-animation my-3'>PetShop</h1>
					</div>


					<div className='bg-[#292929] h-auto float-left p-2'>
						<p className='text-base text-[#ffffff] cypher-content-animation'>Web app based in a traditional petshop, where you can choose and add products to your cart.</p>
					</div>

					<div className='icons-container flex justify-between items-center w-full mt-3'>
						<div className='space-x-5 flex items-center justify-center'>
							<a href='https://github.com/kaizuser/Franco-petshop'>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blueMain hover:text-[#ffffff] transition duration-300 ease-in" viewBox="0 0 16 16">
								  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
								</svg>
							</a>

						</div>

						<h2 className='text-xs text-blueMain'>HTML5 - CSS - API'S - Neovim</h2>

					</div>

				</div>

				<div className='project-image m-3'>
					<img src={require('../../assets/project_2.png')} className='w-[30rem] h-[15rem]'/>
				</div>
				</>
				:
				<>
				<div className='project-content m-auto h-full flex justify-between flex-col min-w-[30vw]'>
					<div className=''>
						<h2 className='text-blueMain cypher-description-animation'>&gt; Nybwhs Wyvqlja</h2>
					</div>

					<div className=''>
						<h1 className='text-[#ffffff] p-0 cypher-title-animation my-3'>WlaZovw</h1>
					</div>


					<div className='bg-[#292929] h-auto float-left p-2'>
						<p className='text-base text-[#ffffff] cypher-content-animation'>Dli hww ihzlk pu h ayhkpapvuhs wlazovw, dolyl fvb jhu jovvzl huk hkk wyvkbjaz av fvby jhya.</p>
					</div>

					<div className='icons-container flex justify-between items-center w-full mt-3'>
						<div className='space-x-5 flex items-center justify-center'>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blueMain" viewBox="0 0 16 16">
							  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
							</svg>
						</div>

						<h2 className='text-xs text-blueMain'>OATS5 - JZZ - HWP'Z - Ulvcpt</h2>

					</div>

				</div>

				<div className='project-image m-3'>
					<img src={require('../../assets/error.jpg')} className='w-[30rem] h-[15rem]'/>
				</div>
				</>
				}
			</>
		)
	}

	return (
		<>
			<div className='project-container m-5 min-h-[30vh] flex justify-between items-center p-2 hover:bg-[#303030] transition duration-300 ease-in' onMouseEnter={() => setPetshop(true)} onMouseLeave={() => setPetshop(false)}>
				<PetShop/>
			</div>
		</>
	)
}
