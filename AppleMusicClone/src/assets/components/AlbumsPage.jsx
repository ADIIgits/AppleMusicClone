import React from 'react'

function AlbumsPage({randomer,images}) {
    const AlbumPageAlbums=[];
    for (let i = 0; i < 12; i++) {
        AlbumPageAlbums.push(
            <div className="flex">
                <div className="albumcard h-60 w-45 m-2 rounded">
                    <img src={images[randomer()]} alt="" className='h-45 w-full rounded object-cover'/>
                    <h3 className="ArtistName text-white/80 text-sm m-0.5">Album Name</h3>
                    <h3 className="ArtistName text-white/50 text-xs m-0.5">Artist Name</h3>
                </div>
            </div>
        )
        
    }
  return (
    <div className='h-auto w-full bg-black/10 p-7 flex flex-col overflow-y-scroll overflow-x-clip'>
        <h2 className='w-full  mx-3 text-center text-white text-md font-bold mb-3 p-1'>Albums</h2>

        <div className="topresflex flex flex-wrap mb-1">
            {AlbumPageAlbums}
        </div>
    </div>
  )
}

export default AlbumsPage