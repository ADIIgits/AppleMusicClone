import React from 'react'


function PlaylistPage({randomer,images,PlaylistName}) {
    const Songs=[];
    for (let i = 0; i < 10; i++) {

        if(i%2==0)
        {
            //making every even div a lil more brighter than odd, for aesthetic purposes.
            Songs.push(
                <div className="mg flex justify-center items-center">
                    <img src="/icons/starorange.png" alt="" className='h-3 w-3 m-1'/>
                    <div className="song h-17 w-full bg-white/1 hover:bg-white/5 rounded-lg flex items-center p-2">
                        
                        <div className="flexcarder flex items-center h-full w-[70%]">
                            <div className="imgcontainer h-12 w-12">
                            <img src={images[randomer()]} alt="" className=' h-full w-full object-cover rounded'/>
                            </div>
                            <div className="info flex flex-col p-3">
                                <h2 className="songname text-white/80 text-sm">Song Name</h2>
                                <h2 className="songname text-white/40 text-sm">Artist Name</h2>
                            </div>
                        </div>
    
                        <h2 className="ArtistName text-xs text-white/50 w-[15%] px-5">Artist Name</h2>
                        <h2 className="ArtistName text-xs text-white/50 w-[10%] px-5">3:00</h2>
                        <button className='text-white/50 pb-2.5'>...</button>
                    </div>
                </div>
            );
        }
        else
        {
            //making every even div a lil more brighter than odd, for aesthetic purposes.
            Songs.push(
                <div className="mg flex justify-center items-center">
                    <img src="/icons/starorange.png" alt="" className='h-3 w-3 m-1'/>
                    <div className="song h-17 w-full hover:bg-white/5 rounded-lg flex items-center p-2">
                        
                        <div className="flexcarder flex items-center h-full w-[70%]">
                            <div className="imgcontainer h-12 w-12">
                            <img src={images[randomer()]} alt="" className=' h-full w-full object-cover rounded'/>
                            </div>
                            <div className="info flex flex-col p-3">
                                <h2 className="songname text-white/80 text-sm">Song Name</h2>
                                <h2 className="songname text-white/40 text-sm">Artist Name</h2>
                            </div>
                        </div>
    
                        <h2 className="ArtistName text-xs text-white/50 w-[15%] px-5">Artist Name</h2>
                        <h2 className="ArtistName text-xs text-white/50 w-[10%] px-5">3:00</h2>
                        <button className='text-white/50 pb-2.5'>...</button>
                    </div>
                </div>
            );
        }
        
        
    }
  return (
    <div className='h-auto w-full bg-black/10 p-7 flex flex-col overflow-y-scroll overflow-x-clip'>
        <div className="infobanner grid grid-cols-[250px_1fr] w-full h-60 m-2">
            <div className="card rounded-2xl bg-indigo-50 h-full w-full flex flex-wrap shadow-md shadow-black/30">
                <img src={images[randomer()]} className="h-1/2 w-1/2 object-cover rounded-tl-2xl"/>
                <img src={images[randomer()]} className="h-1/2 w-1/2 object-cover rounded-tr-2xl"/>
                <img src={images[randomer()]} className="h-1/2 w-1/2 object-cover rounded-bl-2xl"/>
                <img src={images[randomer()]} className="h-1/2 w-1/2 object-cover rounded-br-2xl"/>
            </div>
            <div className="flex flex-col  relative  justify-center mx-8">
                <h1 className="PlaylistName text-white/70 text-3xl absolute ">Cassete</h1>
                <div className="flex absolute bottom-0 left-0">
                    <button className="h-7 w-28 text-white bg-amber-600 m-1.5 rounded-lg flex justify-center items-center">
                        <img src="/icons/playwhiteicon.png" alt="" className='h-5 w-5 m-1'/>
                        Play
                    </button>
                    <button className="h-7 w-28 text-white bg-amber-600 m-1.5 rounded-lg flex justify-center items-center">
                        <img src="/icons/shufflewhiteicon.png" alt="" className='h-5 w-5 m-1'/>
                        Play
                    </button>
                </div>

                <div className="buttonsLine absolute bottom-0 right-0">
                    <button className="h-7 w-7 bg-white/5 m-1.5 rounded-[50%] place-self-center">
                        <img src="/icons/addmemberorange.png" alt="" className='h-[50%] w-[50%] place-self-center'/>
                    </button>
                    <button className="h-7 w-7 bg-white/5 m-1.5 rounded-[50%] place-self-center">
                        <img src="/icons/editorange.png" alt="" className='h-[50%] w-[50%] place-self-center'/>
                    </button>
                    <button className="h-7 w-7 bg-white/5 m-1.5 rounded-[50%] place-self-center">
                        <img src="/icons/downloadorange.png" alt="" className='h-[50%] w-[50%] place-self-center'/>
                    </button>
                    <button className="h-7 w-7 bg-white/5 m-1.5 rounded-[50%] place-self-center">
                        <img src="/icons/moreorange.png" alt="" className='h-[50%] w-[50%] place-self-center'/>
                    </button>
                </div>
                
            </div>

        </div>

        <div className="textflex flex my-8 mx-8">
                <h4 className="text-xs text-white/50 font-bold w-[70%]">Songs</h4>
                <h4 className="text-xs text-white/50 font-bold w-[15%] border-l-1 px-5 border-white/10">Artist</h4>
                <h4 className="text-xs text-white/50 font-bold w-[15%] border-l-1 px-5 border-white/10">Time</h4>
        </div>
        <div className="songsList">
            {Songs}
        </div>
    </div>
  )
}

export default PlaylistPage