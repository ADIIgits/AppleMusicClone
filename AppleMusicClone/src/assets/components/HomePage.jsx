import React from 'react'

function HomePage() {
  return (
    <div className='h-full w-full bg-black/10 p-10 flex flex-col'>

        <div className="flex justify-between container">
            <h1 className="text-3xl mx-3 text-white font-bold">Home</h1>
            <div className="h-10 w-10 rounded-[50%] bg-gray-500"></div>
        </div>
        <h2 className='h-2 w-full mt-2  mx-3 text-white font-bold'>Top Pics for You</h2>

        <div className="container flex">
            <div className="mt-4 m-3">
                <h2 className='text-white/50 text-xs mb-2'>More from Creepy Nuts</h2>
                <div className="stationCards h-60 w-50 bg-indigo-200 rounded-md flex flex-col justify-center items-center relative overflow-hidden">
                    <img src="/makima.jpg" alt="" className='h-full w-full object-cover z-0 rounded-t-md'/>
                    <div className="info h-17 w-full backdrop-blur-2xl absolute bottom-0 z-10 rounded-b-md flex flex-col justify-center items-center">
                        <h2 className="stationName text-white/80  text-sm">Station Name</h2>
                        <h2 className="Artist text-white/60 text-xs">Artist Name</h2>
                        <h2 className="Year text-white/60 text-xs">Year</h2>
                    </div>
                </div>
            </div>

            <div className="mt-4 m-3">
                <h2 className='text-white/50 text-xs mb-2'>More from Creepy Nuts</h2>
                <div className="stationCards h-60 w-50 bg-indigo-200 rounded-md flex flex-col justify-center items-center relative overflow-hidden">
                    <img src="/makima.jpg" alt="" className='h-full w-full object-cover z-0 rounded-t-md'/>
                    <div className="info h-17 w-full backdrop-blur-2xl absolute bottom-0 z-10 rounded-b-md flex flex-col justify-center items-center">
                        <h2 className="stationName text-white/80  text-sm">Station Name</h2>
                        <h2 className="Artist text-white/60 text-xs">Artist Name</h2>
                        <h2 className="Year text-white/60 text-xs">Year</h2>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomePage