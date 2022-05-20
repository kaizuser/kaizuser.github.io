// STYLES
import './App.css';

// COMPONENTS
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.js'

function App() {
  return (
	  <>
		  <Navbar/>
		  <Hero/>
		  <Projects/>
		  <Experience/>
		  <About/>
		  <Footer/>
	  </>
  )
}

export default App;
