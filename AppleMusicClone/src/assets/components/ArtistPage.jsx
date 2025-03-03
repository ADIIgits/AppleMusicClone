import React from 'react'

function ArtistPage({randomer,images}) {
    const artistlist=[];
    for (let i = 0; i < 20; i++) {
        artistlist.push(
            <div className="songinlinecard relative h-15 flex items-center border-b border-r border-b-white/10 border-r-white/10 p-3 w-full">
            <div className="imgcontainer h-10 w-10">
              <img src={images[randomer()]} alt="" className='h-full w-full rounded-[50%] object-cover' />
            </div>
            <div className="flex flex-col mx-3">
              <h3 className="songname text-xs text-white/70 ">Artist Name</h3>
            </div>

            </div>
        )
        
    }
  return (
    <div className='h-auto w-full bg-black/10  flex overflow-y-scroll overflow-x-clip'>
        <div className="artistlist h-full w-1/3">
            <h2 className='w-full my-2 ml-2 text-white/70 text-sm font-bold'>Artist</h2>
                {artistlist}
        </div>
        <div className="flex justify-center items-center w-2/3 h-fit p-4">
            <h2 className='text-white/40 m-4'>No Results</h2>
        </div>
    </div>
  )
}

export default ArtistPage