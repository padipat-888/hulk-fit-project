import React from 'react'
import Stopwatch from '../../components/functions/Stopwatch'
import { useLocation,useNavigate } from 'react-router-dom'


const ActivityTiming = () => {
  const dataFromActivity = useLocation()
  const activity = dataFromActivity.state
 
  console.log(activity)

  return (
    <div className='h-[50rem] flex flex-col justify-center items-center'>
    <Stopwatch/>
    <div className='flex flex-col justify-center items-center mt-[10rem]'></div>
    <div className="text-white text-4xl text-left">
      <p>DataLog</p>
      <p>{`User : ${activity.user}`}</p>
      <p>{`Act_Id : ${activity.udActivity}`}</p>
      <p>{`Act_Type : ${activity.type}`}</p>
      <p>{`Act_name : ${activity.activity}`}</p>
      <p>{`Act_des : ${activity.desc}`}</p>
      <p>{`Act_Image : ${activity.image}`}</p>
      <p>{`Act_Date : ${activity.start}`}</p>
      <p>{`Act_Time : ยังทำไม่เสร็จ`}</p>
      

    </div>
    </div>
  )
}

export default ActivityTiming