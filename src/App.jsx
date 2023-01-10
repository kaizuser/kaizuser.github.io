// STYLES
import './App.css';

// COMPONENTS
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'

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
