import React from 'react'

function RecentlyAddedPage({randomer,images}) {

    const recentlyAdded=[];
    for (let i = 0; i < 8; i++) {
        recentlyAdded.push(
            <div className="flex">
                <div className="albumcard h-60 w-45 m-2 rounded">
                    <img src={images[randomer()]} alt="" className='h-45 w-full rounded object-cover'/>
                    <h3 className="ArtistName text-white/80 text-sm m-0.5">Song Name</h3>
                    <h3 className="ArtistName text-white/50 text-xs m-0.5">Artist Name</h3>
                </div>
            </div>
        )
        
    }
  return (
    <div className='h-auto w-full bg-black/10 p-10 flex flex-col overflow-y-scroll overflow-x-clip'>
        <h2 className='w-full  mx-3 text-center text-white bg-black/10 text-lg font-bold mb-3 p-3'>Recently Added</h2>
        <h2 className='w-full text-white text-lg font-bold mb-3 mx-3'>Today</h2>

        <div className="topresflex flex flex-wrap m-1">
            {recentlyAdded}
        </div>
        <h2 className='w-full text-white text-lg font-bold mb-3 mx-3'>Yesterday</h2>

        <div className="topresflex flex flex-wrap m-1">
            {recentlyAdded}
        </div>
    </div>
  )
}

export default RecentlyAddedPage