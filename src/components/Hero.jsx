import React, {useRef, useState, useEffect} from 'react'

export default function Hero() {
	let ref = useRef()

	useEffect(() => {
		if(ref.current){
			let canvas = ref.current

			var ctx = canvas.getContext("2d");

			//making the canvas full screen
			canvas.height = 800;
			canvas.width = 1200;

			console.log(window.innerWidth, window.innerHeight)

			//chinese characters - taken from the unicode charset
			var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
			//converting the string into an array of single characters
			matrix = matrix.split("");

			var font_size = 10;
			var columns = canvas.width/font_size; //number of columns for the rain
			//an array of drops - one per column
			var drops = [];
			//x below is the x coordinate
			//1 = y co-ordinate of the drop(same for every drop initially)
			for(var x = 0; x < columns; x++)
			    drops[x] = 1; 

			//drawing the characters
			function draw()
			{
			    //Black BG for the canvas
			    //translucent BG to show trail
			    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
			    ctx.fillRect(0, 0, canvas.width, canvas.height);

			    ctx.fillStyle = "#07b50a";//green text
			    ctx.font = font_size + "px arial";
			    //looping over drops
			    for(var i = 0; i < drops.length; i++)
			    {
				//a random chinese character to print
				var text = matrix[Math.floor(Math.random()*matrix.length)];
				//x = i*font_size, y = value of drops[i]*font_size
				ctx.fillText(text, i*font_size, drops[i]*font_size);

				//sending the drop back to the top randomly after it has crossed the screen
				//adding a randomness to the reset to make the drops scattered on the Y axis
				if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
				    drops[i] = 0;

				//incrementing Y coordinate
				drops[i]++;
			    }
			}

			setInterval(draw, 35);

		}
	}, [ref.current])

	return (
		<>
			<section className='hero w-full h-screen flex justify-center items-center text-center bg-blackMain' id='home'>
				<canvas ref={ref} className='block absolute w-full h-full'></canvas>
				<div className='text-[#ffffff] w-full relative top-[15vh]'>

					<div className='kaizuser-title bg-[#292929] flex justify-center items-center flex-col'>
						<h1 className='hero-title tracking-[0.3em] text-9xl p-3'>Kaizuser</h1>
						<h2 className='p-3'>Obsessive mediocrity full stack developer</h2>
					</div>

					<div className='kaizuser-description'>
						<p className='text-xl m-3'>I'd say the best way to define would be an obsessive analitic and strategic programmer. I've suffered from identation errors in python, to scratching my head with maping key render problems in React.</p>
						<p className='text-xl m-3'><br/>I have the determination and curiosity to make and understand just about anything.</p> 
					</div>

				</div>
			</section>

		</>

	)
}

