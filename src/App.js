// STYLES
import './App.css';

// COMPONENTS
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import About from './components/About.js'
import Projects from './components/Projects.js'

function App() {
  return (
	  <>
		  <Navbar/>
		  <Hero/>
		  <Projects/>
		  <About/>

	  </>
  )
}

export default App;
