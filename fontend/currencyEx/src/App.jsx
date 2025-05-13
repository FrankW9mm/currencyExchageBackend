import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './pages/Hero'
import About from './pages/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#8a203e)]'>
        {/* <div class="absolute inset-0 -z-10 h-[100vh] w-[100vh] items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#8a203e)]"></div> */}
        <NavBar/>
        <Hero />
        <About />
      </div>
    </>
  )
}

export default App
