
import React from 'react'

function RadioPage({randomer,images}) {

    const RadioStations=[];
    for (let i = 0; i < 8; i++) {
        
        RadioStations.push(
            <div className="flex">
                <div className="card flex flex-col items-center h-auto m-3 w-30 ">
                    <img src={images[randomer()]} alt="" className='rounded-[18%] h-30 w-full object-cover'/>
                    {/* <h3 className="RadioName  text-sm text-white/80">Radio Name</h3>
                    <h3 className="RadioName text-xs text-white/80">Artist Name</h3> */}
                </div>
            </div>
        )
        
    }

    const Episodes=[];
    for (let i = 0; i < 8; i++) {
        Episodes.push(
            <div className="flex">
                <div className="episodecard w-50 m-2.5">
                    <img src={images[randomer()]} alt="" className='rounded-md h-50 w-full object-cover'/>
                    <h3 className="RadioName  text-sm text-white/80 mx-0.5 mt-1">Episode Name</h3>
                    <h3 className="RadioName text-xs text-white/50 mx-0.5">Artist Name,Artist Name,Artist Name,</h3>
                </div>
            </div>
        )
        
    }
  return (
    <div className='h-auto w-full bg-black/10 p-10 flex flex-col overflow-y-scroll overflow-x-clip'>
        <h1 className="text-3xl mx-3 text-white font-bold mb-3">Radio</h1>
        <h3 className="liveRadioStation text-md text-white/80 mx-3">Live Radio Station</h3>
        <h3 className="liveRadioStation text-sm text-white/50 mx-3">Tap Station to hear more music</h3>

        <div className="flex overflow-x-auto w-full ">
            {RadioStations}
        </div>

        <h2 className='h-2 w-full my-3  mx-4 text-white font-bold'>Latest Episodes</h2>
        <div className="flex flex-warp my-3 w-full overflow-x-auto">
            {Episodes}
        </div>
    </div>
  )
}

export default RadioPage