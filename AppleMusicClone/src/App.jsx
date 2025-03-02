import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SidePanel from './assets/components/sidepanel'
import UpperBar from './assets/components/upperbar'
import HomePage from './assets/components/HomePage'
import newPage from './assets/components/NewPage'
function App() {
  
  const [CurrentPage,setcurrentPage]=useState(HomePage);
  const images = ["/images/wallp1.jpg","/images/wallp2.jpg","/images/wallp3.jpg","/images/wallp4.jpg","/images/wallp4.jpg","/images/wallp5.jpg","/images/wallp6.jpg",
  "/images/wallp7.jpg","/images/wallp8.jpg","/images/wallp9.jpg","/images/wallp10.jpg"];
  function randomer()
  {
    return Math.floor(Math.random()*images.length-1)+1;
  }

  return (
    <div className='h-[80%] w-[80%] backdrop-blur-3xl backdrop-brightness-70 m-auto grid grid-cols-[210px_1fr] rounded-lg border border-white/15 '>
      <div className="navbar rounded-l-lg">
            <SidePanel CurrentPage={CurrentPage} setcurrentPage={setcurrentPage}/>
      </div>
      <div className="mainpage bg-[#262626] rounded-r-lg overflow-scroll">
        <div className="upperbar h-13 w-full backdrop-blur-2xl bg-black/20 rounded-r-lg sticky top-0 z-100">
              <UpperBar randomer={randomer} images={images}/>
        </div>
        {console.log("CurrentPage:",CurrentPage)}
        {CurrentPage || <CurrentPage/>}
        
        {/* {CurrentPage && React.createElement(CurrentPage)} */}
        {/* <HomePage/> */}


      </div>


      
    </div>
  )
}

export default App
