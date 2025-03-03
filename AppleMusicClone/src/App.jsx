import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SidePanel from './assets/components/sidepanel'
import UpperBar from './assets/components/upperbar'
import HomePage from './assets/components/HomePage'
import newPage from './assets/components/NewPage'
import RadioPage from './assets/components/RadioPage'
import PlaylistPage from './assets/components/PlaylistPage'
import RecentlyAddedPage from './assets/components/RecentlyAddedPage'
import ArtistPage from './assets/components/ArtistPage'
import AlbumsPage from './assets/components/AlbumsPage'
import SongsPage from './assets/components/SongsPage'
import MusicVideoPage from './assets/components/MusicVideoPage'
var cur=1; var prev=0;
function App() {
  
  const [CurrentPage,setcurrentPage]=useState(()=>HomePage);
  const images = ["/images/wallp1.jpg","/images/wallp2.jpg","/images/wallp3.jpg","/images/wallp4.jpg","/images/wallp4.jpg","/images/wallp5.jpg","/images/wallp6.jpg",
  "/images/wallp7.jpg","/images/wallp8.jpg","/images/wallp9.jpg","/images/wallp10.jpg","/images/wallp11.jpg","/images/wallp12.jpg","/images/wallp13.jpg"];
  function randomer()
  {
    cur=Math.floor(Math.random()*images.length-1)+1;
    if(prev!=cur){
      prev=cur;
      return cur;
    }
    else
    return randomer();
  }

  return (
    <div className='h-[80%] w-[80%] backdrop-blur-3xl backdrop-brightness-70 m-auto grid grid-cols-[210px_1fr] rounded-lg border border-white/15 '>
      <div className="navbar rounded-l-lg duration-1000">
            <SidePanel CurrentPage={CurrentPage} setcurrentPage={setcurrentPage}/>
      </div>
      <div className="mainpage bg-[#262626] rounded-r-lg overflow-scroll">
        <div className="upperbar h-13 w-full backdrop-blur-2xl bg-black/20 rounded-r-lg sticky top-0 z-100">
              <UpperBar randomer={randomer} images={images}/>
        </div>

        <CurrentPage images={images} randomer={randomer}/>
        
        {/* {CurrentPage && React.createElement(CurrentPage)} */}
        {/* <HomePage/> */}


      </div>


      
    </div>
  )
}

export default App
