import React from 'react'

function NewPage({randomer,images}) {
  const songdiv=[];
  for (let i = 0; i < 5; i++) {
    songdiv.push(<h1 className='m-1 bg-indigo-50'>hey</h1>);
  }

  const NewReleaseSongs=[];
  for (let i = 0; i < 10; i++) {
    NewReleaseSongs.push(
    <div className="playlistCards h-55 w-45 m-2 rounded-2xl flex  flex-col items-center">
      <img src={images[randomer()]} alt="" className='rounded-2xl h-46 w-46' />
      <h3 className="playlistname text-white/80 my-0.5">Playlist Name</h3>
      <h3 className="playlistname  text-white/50 text-xs">Artist Name</h3>
    </div>
  ) 
  }

  const LatestSongs = []
  for (let i = 0; i < 6; i++) {
    LatestSongs.push(
      <div className="songinlinecard relative h-15 flex items-center border-t border-b border-b-white/10 border-t-white/10 p-3 w-1/2">
            <div className="imgcontainer h-10 w-10">
              <img src={images[randomer()]} alt="" className='h-full w-full rounded-sm bg-indigo-600' />
            </div>
            <div className="flex flex-col mx-3">
              <h3 className="songname text-sm text-white/80">Song Name</h3>
              <h3 className="songname text-xs text-white/50 ">Artist Name</h3>
            </div>

            <button className='h-full w-10 absolute right-0 text-white/50'>+</button>
          </div>
    )
    
  }
  return (
    <div className='h-auto w-full bg-black/10 p-10 flex flex-col overflow-y-scroll overflow-x-clip'>

        <h1 className="text-3xl mx-3 text-white font-bold">New</h1>
        <div className="2CardContainer p-2 flex w-full">
          <div className="card1 w-1/2 m-2 ">
            <h3 className="featureText text-xs text-white/40 uppercase font-bold">Spacial Audio</h3>
            <h3 className="NameText text-white/70">Name</h3>
            <h3 className="thirdText text-sm text-white/40 m-0">Apple Music India</h3>
              <div className="c1 my-1 rounded relative overflow-hidden flex">
                <img src={images[randomer()]} alt="" className='h-60 w-full rounded z-0' />
                <p className="text text-white/70 text-sm p-3 w-[90%] h-auto absolute bottom-0 z-2 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum similique esse aliquid voluptates
                </p>
                <div className="hoverer h-full w-full duration-200 hover:bg-black/30 absolute z-1 ">
                    <button className='rounded-[50%] backdrop-blur-2xl bg-white/10 hover:bg-amber-600 h-10 w-10 flex justify-center items-center absolute bottom-0 right-0 m-3 z-3'>
                      <img src="/icons/playwhiteicon.png" alt="" className='h-5 w-5'/>
                    </button>
                </div>
                
              </div>
          </div>
          <div className="card1 w-1/2 m-2 ">
            <h3 className="featureText text-xs text-white/40 uppercase font-bold">Spacial Audio</h3>
            <h3 className="NameText text-white/70">Name</h3>
            <h3 className="thirdText text-sm text-white/40 m-0">Apple Music India</h3>
              <div className="c1 my-1 rounded relative overflow-hidden flex">
                <img src={images[randomer()]} alt="" className='h-60 w-full rounded z-0' />
                <p className="text text-white/70 text-sm p-3 w-[90%] h-auto absolute bottom-0 z-2 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum similique esse aliquid voluptates
                </p>
                <div className="hoverer h-full w-full duration-200 hover:bg-black/30 absolute z-1 ">
                    <button className='rounded-[50%] backdrop-blur-2xl bg-white/10 hover:bg-amber-600 h-10 w-10 flex justify-center items-center absolute bottom-0 right-0 m-3 z-3'>
                      <img src="/icons/playwhiteicon.png" alt="" className='h-5 w-5'/>
                    </button>
                </div>
                
              </div>
          </div>

        </div>

        <h2 className='h-2 w-full my-2  mx-4 text-white font-bold'>Latest Songs</h2>
        <div className="flex flex-col mt-5 mx-4 h-50 flex-wrap">
          {LatestSongs}
          
        </div>

        {/* <div>{songdiv}</div> */}

        <h2 className='h-2 w-full my-5  mx-3 text-white font-bold'>New Releases</h2>
        <div className="NewReleases-div w-full h-auto my-2 flex flex-wrap">
        
          {NewReleaseSongs}
        </div>
        
    </div>
  )
}

export default NewPage