import React from 'react'

function HomePage({randomer,images}) {
    const StationCards=[];
    for (let i = 0; i < 3; i++) {
        StationCards.push(
            <div className="mt-4 m-3">
                <h2 className='text-white/50 text-xs mb-2'>More from Creepy Nuts</h2>
                <div className="stationCards h-80 w-60 bg-indigo-200 rounded-md flex flex-col justify-center items-center relative overflow-hidden">
                    <img src={images[randomer()]} alt="" className='top-0 left-0 h-full w-full object-cover z-0 rounded-t-md'/>
                    <div className="info h-17 w-full backdrop-blur-2xl absolute bottom-0 z-1 rounded-b-md flex flex-col justify-center items-center">
                        <h2 className="stationName text-white/80  text-sm">Station Name</h2>
                        <h2 className="Artist text-white/60 text-xs">Artist Name</h2>
                        <h2 className="Year text-white/60 text-xs">Year</h2>
                    </div>
                </div>
            </div>
        );
        
    }

    const RecentlyPlayedPlaylist=[]
    for (let i = 0; i < 4; i++) {
        RecentlyPlayedPlaylist.push(
            <div className="flex">
                <div className="playlistCards h-55 w-45 m-2 rounded-2xl flex flex-col items-center">
                    <img src={images[randomer()]} alt="" className='rounded-2xl h-46 w-46' />
                    <h3 className="playlistname text-white/80 my-0.5">Playlist Name</h3>
                    <h3 className="playlistname  text-white/50 text-xs">Artist Name</h3>
                </div>
            </div>
        )
        
    }
  return (
    
    <div className='h-auto w-full bg-black/10 p-10 flex flex-col overflow-y-scroll overflow-x-clip'>

        <div className="flex justify-between container">
            <h1 className="text-3xl mx-3 text-white font-bold">Home</h1>
            <div className="h-10 w-10 rounded-[50%] bg-gray-500"></div>
        </div>
        <h2 className='h-2 w-full mt-2  mx-3 text-white font-bold'>Top Pics for You</h2>

        <div className="flex overflow-x-auto">
            {StationCards}
        </div>

        <h2 className='h-2 w-full my-2  mx-3 text-white font-bold'>Recently Played</h2>
        <div className="recentlyPlayedPlaylist overflow-x-auto my-2 flex items-center">
            {RecentlyPlayedPlaylist}
        </div>
        <br />
        <h2 className='h-2 w-full my-2  mx-3 text-white font-bold'>Bollywood</h2>
        <div className="recentlyPlayedPlaylist overflow-x-auto my-2 flex items-center">
            {RecentlyPlayedPlaylist}
        </div>
        

    </div>
  )
}

export default HomePage