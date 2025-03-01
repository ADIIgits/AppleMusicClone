import React from 'react'
// import searchlogo from '../public/check-mark.png'
import viteLogo from '/vite.svg'
function SidePanel() {
  return (
    <div className='h-full w-full backdrop-blur-3xl bg-black/30 p-3 rounded-l-lg'>
        <div className="search h-8 w-full border border-white/20 bg-white/10 rounded-lg flex items-center">
            <img src="/icons/searchgray.png" alt="" className='h-5 w-5 ml-3'/>
            <input type="text" className='' placeholder='Search'/>

        </div>
        {/* sec1 */}
        <h4 className="categories text-xs text-gray-400 mt-3 mb-1 mx-0.5">Apple Music</h4>
        <button className="section h-8 w-full hover:bg-white/10 rounded-lg px-5 flex items-center text-white my-1 text-sm">
            <img src="/icons/homered2.png" alt="" className='h-5 w-5 m-1'/>
            Home
        </button>
        <button className="section h-8 w-full hover:bg-white/10 rounded-lg px-5 flex items-center text-white my-1 text-sm">
            <img src="/icons/gridred.png" alt="" className='h-5 w-5 m-1'/>
            Home
        </button>
        <button className="section h-8 w-full hover:bg-white/10 rounded-lg px-5 flex items-center text-white my-1 text-sm">
            <img src="/icons/radioicon.png" alt="" className='h-5 w-5 m-1'/>
            Home
        </button>

        {/* sec2 */}
        <h4 className="categories text-xs text-gray-400 mt-3 mb-1 mx-0.5">Library</h4>
        <button className="section h-8 w-full hover:bg-white/10 rounded-lg px-5 flex items-center text-white my-1 text-sm">
            <img src="/icons/recentlyadedicon.png" alt="" className='h-5 w-5 m-1'/>
            Recently Added
        </button>
        <button className="section h-8 w-full hover:bg-white/10 rounded-lg px-5 flex items-center text-white my-1 text-sm">
            <img src="/icons/micicon.png" alt="" className='h-5 w-5 m-1'/>
            Artist
        </button>
        <button className="section h-8 w-full hover:bg-white/10 rounded-lg px-5 flex items-center text-white my-1 text-sm">
            <img src="/icons/libraryicon.png" alt="" className='h-5 w-5 m-1'/>
            Albums
        </button>
        <button className="section h-8 w-full hover:bg-white/10 rounded-lg px-5 flex items-center text-white my-1 text-sm">
            <img src="/icons/musicnoteicon.png" alt="" className='h-5 w-5 m-1'/>
            Songs
        </button>
        <button className="section h-8 w-full hover:bg-white/10 rounded-lg px-5 flex items-center text-white my-1 text-sm">
            <img src="/icons/videosongicon.png" alt="" className='h-5 w-5 m-1'/>
            Music Videos
        </button>

        {/* sec3 */}
        <h4 className="categories text-xs text-gray-400 mt-3 mb-1 mx-0.5">Playlist</h4>
        <button className="section h-8 w-full hover:bg-white/10 rounded-lg px-5 flex items-center text-white my-1 text-sm">
            <img src="/icons/playlisticon.png" alt="" className='h-5 w-5 m-1'/>
            Home
        </button>
        <button className="section h-8 w-full hover:bg-white/10 rounded-lg px-5 flex items-center text-white my-1 text-sm">
            <img src="/icons/playlisticon.png" alt="" className='h-5 w-5 m-1'/>
            Home
        </button>
        <button className="section h-8 w-full hover:bg-white/10 rounded-lg px-5 flex items-center text-white my-1 text-sm">
            <img src="/icons/playlisticon.png" alt="" className='h-5 w-5 m-1'/>
            Home
        </button>

        
    </div>
  )
}

export default SidePanel