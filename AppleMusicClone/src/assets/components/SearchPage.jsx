import React from 'react'

function SearchPage({randomer,images}) {

    const topResults=[]
    for (let i = 0; i < 6; i++) {
        topResults.push(
            <div className="flex bg-white/10 h-18 w-65 rounded m-2 p-2">
                <img src={images[randomer()]} alt="" className='h-full w-20 object-cover rounded' />
                <div className="flex flex-col justify-center mx-2 relative h-full w-full">
                    <h3 className="ArtistName text-white/80 text-sm mx-0.5">Artist Name</h3>
                    <h3 className="ArtistName text-white/50 text-xs mx-0.5">Artist Name</h3>
                    <img src="/icons/moreorange.png" alt="" className='h-4 w-4 absolute bottom-0 right-0'/>
                </div>
            </div>
        )
    }

    const topResultArtists=[];
    for (let i = 0; i < 8; i++) {
        topResultArtists.push(
            <div className="flex">
                <div className="artistcard my-2 mx-3 flex flex-col justify-center items-center h-40 w-30">
                    <img src={images[randomer()]} alt="" className='h-30 w-full rounded-[50%] object-cover'/>
                    <h3 className="ArtistName text-white/80 text-sm m-0.5">Artist Name</h3>
                </div>
            </div>
        )
    }
    const topResultAlbums=[];
    for (let i = 0; i < 6; i++) {
        topResultAlbums.push(
            <div className="flex">
                <div className="albumcard h-60 w-50 m-2 rounded">
                    <img src={images[randomer()]} alt="" className='h-50 w-full rounded object-cover'/>
                    <h3 className="ArtistName text-white/80 text-sm m-0.5">Song Name</h3>
                    <h3 className="ArtistName text-white/50 text-xs m-0.5">Artist Name</h3>
                </div>
            </div>
        )
        
    }
  return (
    <div className='h-auto w-full bg-black/10 p-10 flex flex-col overflow-y-scroll overflow-x-clip'>
        <h2 className='h-2 w-full my-2  mx-3 text-white font-bold mb-3'>Top Results</h2>
        <div className="topresflex flex flex-wrap w-full m-1">
            {topResults}
        </div>

        <h2 className='h-2 w-full my-2  mx-3 text-white font-bold mb-3'>Artists</h2>
        <div className="topresflex flex overflow-x-auto m-1">
            {topResultArtists}
        </div>
        <h2 className='h-2 w-full my-2  mx-3 text-white font-bold mb-3'>Albums</h2>
        <div className="topresflex flex overflow-x-auto m-1">
            {topResultAlbums}
        </div>
    </div>
  )
}

export default SearchPage