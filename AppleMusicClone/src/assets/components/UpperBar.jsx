import React from 'react'

function UpperBar() {
  return (
    <div className='h-full w-full flex p-1'>
        <div className="playbackButtons h-full w-[25%] p-3 flex justify-center items-center">
            <button className='h-full w-9  m-0.5 hover:bg-white/5 rounded-md'>
                <img src="/icons/shufflegray.png" alt="" className='h-[65%] w-[65%] place-self-center rounded-lg'/>
            </button>
            <button className='h-full w-10 m-0.5 hover:bg-white/5 rounded-md px-0.5'>
                <img src="/icons/backwardicon.png" alt="" className='h-full w-full rounded-lg'/>
            </button>
            <button className='h-full w-10 m-0.5 hover:bg-white/5 rounded-md px-0.5'>
                <img src="/icons/pauseicon.png" alt="" className='h-full w-full rounded-lg'/>
            </button>
            <button className='h-full w-10 m-0.5 hover:bg-white/5 rounded-md px-0.5'>
                <img src="/icons/forwardicon.png" alt="" className='h-full w-full rounded-lg'/>
            </button>
            <button className='h-full w-9 m-0.5 hover:bg-white/5 rounded-md'>
                <img src="/icons/repeatgray.png" alt="" className='h-[65%] w-[65%] place-self-center rounded-lg'/>
            </button>
        </div>

        <div className="currentPlaying h-full w-[45%] flex justify-center">
            <div className="albumcover h-full w-20 rounded-l-xs">
                <img src="/makima.jpg" alt="" className='h-full w-full rounded-l-xs'/>
            </div>
            
            <div className='h-full w-full flex items-center flex-col bg-white/20 rounded-r-xs'>
                <div className="titleline flex items-center justify-between h-1/2 w-full p-1">
                    <img src="/icons/lossless.png" alt="" className='h-4 w-4'/>
                    <h1 className="title text-sm text-center items-center text-white/80">Song Name</h1>
                    <img src="/icons/stargray.png" alt="" className='h-4 w-4'/>
                    
                </div>

                <h1 className="title text-xs text-white/50">Song Name</h1>
            </div>
        </div>

        <div className="soundSlide h-full w-[20%] flex justify-center items-center mx-3">
            <img src="/icons/soundzeroicon.png" alt="" className='h-5 w-5'/>
            <input type="range" className='m-1 cursor-pointer appearance-none bg-white/10 h-1.5 rounded-2xl
            [&::-webkit-slider-thumb]:appearance-none 
         [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
         [&::-webkit-slider-thumb]:bg-[#696969] [&::-webkit-slider-thumb]:rounded-full'/>
            <img src="/icons/soundfullicon2.png" alt="" className='h-5 w-5'/>
        </div>
    </div>
  )
}

export default UpperBar