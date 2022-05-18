import React, {useState} from 'react'

export default function Projects(){

	const [hover, setHover] = useState(false)
	const [project, setProject] = useState(undefined)

	const OnHover = () => {
		return (
			<>
				{hover ? 
				<>
				<div className='project-content max-w-[30vw] m-auto h-full flex justify-around items-start flex-col m-3'>
					<div className='w-[12.5rem]'>
						<h2 className='text-blueMain cypher-description-animation'>&gt; Individual Project</h2>
					</div>


					<div>
						<div className='w-[18.5rem]'>
							<h1 className='text-[#ffffff] p-0 cypher-title-animation'>MyTinerary</h1>
						</div>


						<div className='bg-[#292929] h-auto float-left w-[29.3rem]'>
							<p className='text-base text-[#ffffff] cypher-content-animation'>un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien</p>
							<p className='text-base text-[#ffffff] cypher-content-animation'> ingresó como texto de relleno en documentos electrónicos, quedando esencial-</p>
							<p className='text-base text-[#ffffff] cypher-content-animation'>mente igual al original</p>
						</div>
					</div>

				</div>

				<div className='project-image m-3'>
					<img src={require('../assets/project_1.png')} className='w-[30rem] h-[15rem]'/>
				</div>
				</>
				:
				<>
				<div className='project-content max-w-[30vw] m-auto h-full flex justify-around items-start flex-col m-3'>
					<div className='w-[12.5rem]'>
						<h2 className='text-blueMain cypher-description-animation'>&gt; Pukpcpkbhs Wyvqlja</h2>
					</div>


					<div>
						<div className='w-[18.5rem]'>
							<h1 className='text-[#ffffff] p-0 cypher-title-animation'>TfApulyhyf</h1>
						</div>


						<div className='bg-[#292929] h-auto float-left w-[29.3rem]'>
							<p className='text-base text-[#ffffff] cypher-content-animation'>bu spiyv kl aleavz lzwljptlu. Uv zósv zviylcpcpó 500 hñvz, zpuv xbl ahtiplu</p>
							<p className='text-base text-[#ffffff] cypher-content-animation'>punylzó jvtv aleav kl ylssluv lu kvjbtluavz lsljayóupjvz, xblkhukv lzlujphs-</p>
							<p className='text-base text-[#ffffff] cypher-content-animation'>tlual pnbhs hs vypnpuhs</p>
						</div>
					</div>

				</div>

				<div className='project-image m-3'>
					<img src={require('../assets/project_1.png')} className='w-[30rem] h-[15rem]'/>
				</div>
				</>
				}
			</>
		)
	}

	return (
		<>
			<section className='bg-blackMain w-full h-auto flex items-center flex-col'>
				<div className='min-h-[70vh] max-w-[70vw] flex justify-between flex-col items-center'>
					<h2 className='text-blueMain text-justify w-[6.5rem]'>&lt;Projects&gt;</h2>
					<div className='project-container h-[30vh] flex justify-between items-center p-3 hover:bg-[#303030] transition duration-300 ease-in' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
						<OnHover/>
					</div>
					<h2 className='text-blueMain w-[7rem]'>&lt;&#9585;Projects&gt;</h2>
				</div>
			</section>
		</>
	)
}
