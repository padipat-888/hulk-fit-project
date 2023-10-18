import { useState } from 'react'
import { useLocation , useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';


const ActivityForm = () => {

  const [cookies] = useCookies(['user']);

  const navigate = useNavigate();
  const [activityName, setActivityName] = useState("");
  const [activityDes, setActivityDes] = useState("")
 
  const { state } = useLocation();
  const userId = cookies.user._id

  const addActivity = async () => {
    console.log('addActivity click');

    const actData = {
      userId:userId,
      actName:activityName,
      actDescription:activityDes,
      actType:state.type,
      actDuration:339,
      actDate:new Date()
    }

    console.log(actData.actDate)

    try {
      const response = await axios.post(
        'http://localhost:4000/addactivity',
        actData
      );
      console.log('Response from backend:', response.data, response.status)
      navigate('/userhome')

    } catch (error) {
      console.error('Error:', error);
    }

    // console.log(newActivity)
    // navigate('/activitytiming', { state : newActivity });
    // alert("Success")
  };

  return (
    <div className="text-white">
    <div className="w-[328px] flex flex-col m-auto">
      <img className="w-[93px] h-[37] mt-16	self-end" src={ state.icon } />
 
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
      <button onClick={addActivity} className="h-[57px] my-16 bg-[#00ECFF] rounded-lg text-black text-2xl	font-bold	">Save</button>
</div>
</div>
  )
}

export default ActivityForm