import React from 'react'

function MusicVideoPage({randomer,images}) {
    const musicvideos=[];
    for (let i = 0; i < 12; i++) {
        musicvideos.push(
            <div className="flex">
                <div className="albumcard h-60 w-65 m-2 rounded">
                    <div className="imgcont relative flex h-45 w-full">
                        <img src={images[randomer()]} alt="" className='h-45 w-full rounded object-cover z-0'/>
                        {/* <img src="/icons/playwhiteicon.png" alt="" className='h-8 w-8 absolute bottom-1/2 right-1/2'/> */}
                        <div className="playit z-1 h-45 w-full flex justify-center items-center absolute">
                            <img src="/icons/playwhiteicon.png" alt="" className='h-8 w-8 z-2'/>
                        </div>
                    </div>
                    <h3 className="ArtistName text-white/80 text-sm m-0.5">Song Name</h3>
                    <h3 className="ArtistName text-white/50 text-xs m-0.5">Artist Name</h3>
                </div>
            </div>
        )
        
    }
  return (
    <div className='h-auto w-full bg-black/10 p-7 flex flex-col overflow-y-scroll overflow-x-clip'>
        <h2 className='w-full  mx-3 text-center text-white text-md font-bold mb-3 p-1'>Music Videos</h2>

        <div className="topresflex flex flex-wrap mb-1">
            {musicvideos}
        </div>
    </div>
  )
}

export default MusicVideoPage