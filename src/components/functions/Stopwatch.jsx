import React, { useEffect, useState } from 'react'

const Stopwatch = () => {

    const [time,setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(()=>{
        let intervalid;
        if(isRunning){
            intervalid = setInterval(() => setTime(time+1),10)
        }
        return () => clearInterval(intervalid)
    },[isRunning,time])

    const hours = Math.floor(time / 360000)
    const minutes = Math.floor((time % 360000) / 6000)
    const seconds = Math.floor((time % 6000) / 100)
    const miliseconds = time % 100

    const startAndStop = () => {

        setIsRunning(!isRunning)
    }

    const reset = () => {
        setTime(0)
        setIsRunning(false)
    }

  return (
    <div>
        <div className='text-2xl mx-2 px-5 py-5'>
            {hours.toString().padStart(2,"0")}:{minutes.toString().padStart(2,"0")}:{seconds.toString().padStart(2,"0")}:{miliseconds.toString().padStart(2,"0")}
        </div>
        <div>
            <button 
            onClick={()=>startAndStop()} 
            type="button"
            className='mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            >
                {isRunning ? "Stop" : "Start"}
            </button>
            <button 
            onClick={()=>reset()} 
            type="button"
            className='mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
            >
                Reset
            </button>
        </div>
        
    </div>
  )
}

export default Stopwatch