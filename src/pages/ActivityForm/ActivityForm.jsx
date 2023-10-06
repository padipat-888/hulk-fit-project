import React, { useState } from 'react'
import { useLocation , useNavigate } from 'react-router-dom';
import user from "../../../src/assets/user.png"

const ActivityForm = () => {
  let { state } = useLocation();
  const navigate = useNavigate();
  const [activityName, setActivityName] = useState("");
  const [activityDes, setActivityDes] = useState("")
  const [uploadFile, setUploadFile] = useState( user );
  const [id, setId] = useState( 1 )

  const handleFileChange = (evl) => { 
    const file = evl.target.files[0]
    const url = URL.createObjectURL(file)
    setUploadFile(url)
  }

  const addActivity = async () => {
    
    const newActivity = {
      idActivity: id,
      type: state.type,
      image: uploadFile,
      activity: activityName,
      desc: activityDes,
      start: new Date()
    };

    setId( id+1 )
    navigate('/activitytiming', { newActivity : newActivity });
    alert("Success")
  };

  return (
    <div className="text-white">
    <div className="w-[328px] flex flex-col m-auto">
      <img className="w-[93px] h-[37] mt-16	self-end" src={ state.icon } />
      
      <label htmlFor="fileUpload" className="button">
      <img src={uploadFile} alt="user image" className="w-[180px] h-[180px] object-cover mt-[30px] mb-[34px] m-auto	"/>
      </label>
      <input
        type="file"
        id="fileUpload"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
 
      <label htmlFor="activity-name" className="my-0.5 px-3 text-2xl ">Activity Name</label>
      <input
        className="my-0.5 border-2 border-[#243c5a] rounded-lg bg-inherit p-3.5  hover:border-white" id="activity-name"
        name="activity-name"
        placeholder="Enter Activity name"
        value={activityName}
        onChange={(evl) => setActivityName(evl.target.value)}
      ></input>

      <label htmlFor="activity-description" className="my-0.5 px-3 text-2xl ">Activity Description</label>
      <textarea
        className="h-[185px] my-0.5 border-2 border-[#243c5a] rounded-lg bg-inherit p-3.5  hover:border-white"
        id="activity-description"
        name="activity-description"
        rows="4"
        cols="50"
        placeholder="Enter Activity details"
        value={activityDes}
        onChange={(evl) => setActivityDes(evl.target.value)}
      ></textarea>
      <button onClick={addActivity} className="h-[57px] my-16 bg-[#00ECFF] rounded-lg text-black text-2xl	font-bold	">Start</button>
</div>
</div>
  )
}

export default ActivityForm