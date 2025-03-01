import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SidePanel from './assets/components/sidepanel'
import UpperBar from './assets/components/upperbar'
import HomePage from './assets/components/HomePage'
function App() {
  

  return (
    <div className='h-[80%] w-[80%] backdrop-blur-3xl backdrop-brightness-70 m-auto grid grid-cols-[210px_1fr] rounded-lg border border-white/10 '>
      <div className="navbar rounded-l-lg">
            <SidePanel/>
      </div>
      <div className="mainpage bg-[#262626] rounded-r-lg overflow-scroll">
        <div className="upperbar h-15 w-full backdrop-blur-2xl bg-black/20 rounded-r-lg sticky top-0">
              <UpperBar/>
        </div>

        <HomePage/>


      </div>


      
    </div>
  )
}

export default App
