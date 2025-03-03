import React from 'react'

function SongsPage({randomer,images}) {
    const songsPageSongs=[];
    for (let i = 0; i < 20; i++) {
        songsPageSongs.push(
            <div className="mg flex justify-center items-center p-1">
                <img src="/icons/starorange.png" alt="" className='h-3 w-3'/>
                    <div className="song h-7 w-full hover:bg-white/5 rounded-lg flex items-center p-2">
                
                        <div className="flexcarder flex items-center h-full w-[70%]">
                            <h2 className="songname text-white/70 text-xs">Song Name</h2>
                        </div>
    
                        <h2 className="ArtistName text-xs text-white/50 w-[15%] px-5">Artist Name</h2>
                        <h2 className="ArtistName text-xs text-white/50 w-[10%] px-5">3:00</h2>
                        <img src="/icons/moreorange.png" alt="" className='h-3 w-3' />
                    </div>
            </div>
        )
        
    }
  return (
    <div className='h-auto w-full bg-black/10 flex flex-col overflow-y-scroll overflow-x-clip p-1'>
        <h2 className='w-full  mx-3 text-center text-white text-md font-bold mb-1 p-1'>Songs</h2>
        <div className="textflex flex my-2 mx-5">
                <h4 className="text-xs text-white/50 font-bold w-[70%]">Songs</h4>
                <h4 className="text-xs text-white/50 font-bold w-[15%] border-l-1 px-5 border-white/10">Artist</h4>
                <h4 className="text-xs text-white/50 font-bold w-[15%] border-l-1 px-5 border-white/10">Time</h4>
        </div>
        <div className="songsList">
            {songsPageSongs}
        </div>
    </div>
  )
}

export default SongsPage