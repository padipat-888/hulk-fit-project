import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ActivityForm = () => {
  let { state } = useLocation();
  const navigate = useNavigate();
  const [activityName, setActivityName] = useState("");
  const [activityDes, setActivityDes] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState();


  const handleTimeChange = (event) => {
    const timeInput = event.target.value;
    const [hours, minutes] = timeInput.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    setDuration(totalMinutes);
  };

  const addActivity = async () => {
    const newActivity = {
      _id: state.id,
      type: state.type,
      activity: activityName,
      desc: activityDes,
      date: date,
      duration: duration,
    };

    console.log(newActivity);
    alert("Success");
    try {
      const response = await axios.post(
        'http://localhost:4000/addactivity',
        newActivity
      );
      console.log('Response from backend:', response.data, response.status)
      navigate('/userhome')

    } catch (error) {
      console.error('Error:', error);
    }
    navigate('/userhome')
  };
  

  return (
    <div className="text-white">
      {/* ----------desktop---------- */}
      <div className="w-full min-h-screen flex max-md:hidden">
      <img className="w-[65%] object-cover" src={state.iconDt} />
        <div className="">
        </div>
        <div className="w-[30%] h-[887px] flex flex-col m-10">

          <label htmlFor="activity-name" className="my-0.5 px-3 text-2xl ">
            Activity Name
          </label>
          <input
            className="my-0.5 border-2 border-[#243c5a] rounded-lg bg-inherit p-3.5 hover:border-white"
            id="activity-name"
            name="activity-name"
            placeholder="Enter Activity name"
            value={activityName}
            onChange={(evl) => setActivityName(evl.target.value)}
          ></input>

          <label
            htmlFor="activity-description"
            className="my-0.5 px-3 text-2xl "
          >
            Activity Description
          </label>
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

          <label htmlFor="date" className="my-0.5 px-3 text-2xl ">
            Date
          </label>
          <input
            type="date"
            className="custom-date-input my-0.5 border-2 border-[#243c5a] rounded-lg bg-inherit p-3.5 hover:border-white"
            id="date"
            name="date"
            value={date}
            onChange={(evl) => setDate(evl.target.value)}
          ></input>

          <label htmlFor="duration" className="my-0.5 px-3 text-2xl ">
            Duration
          </label>
          <input
            type="time"
            name="timeinput"
            className="custom-time-input bg-inherit border-2 border-[#243c5a] rounded-lg p-3.5 hover:border-white"
            onChange={handleTimeChange}
          />

          <button
            onClick={addActivity}
            className="h-[57px] my-16 bg-[#00ECFF] hover: rounded-lg text-black text-2xl font-bold	"
          >
            Save
          </button>
        </div>
      </div>
      {/* ----------mobile---------- */}

      <div className="w-[328px] flex flex-col m-auto md:hidden">
        <img className="w-[93px] h-[37] mt-16	self-end" src={state.iconMb} />

        <label htmlFor="activity-name" className="my-0.5 px-3 text-2xl ">
          Activity Name
        </label>
        <input
          className="my-0.5 border-2 border-[#243c5a] rounded-lg bg-inherit p-3.5 hover:border-white"
          id="activity-name"
          name="activity-name"
          placeholder="Enter Activity name"
          value={activityName}
          onChange={(evl) => setActivityName(evl.target.value)}
        ></input>

        <label htmlFor="activity-description" className="my-0.5 px-3 text-2xl ">
          Activity Description
        </label>
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

        <label htmlFor="date" className="my-0.5 px-3 text-2xl ">
          Date
        </label>
        <input
          type="date"
          className="custom-date-input my-0.5 border-2 border-[#243c5a] rounded-lg bg-inherit p-3.5 hover:border-white"
          id="date"
          name="date"
          value={date}
          onChange={(evl) => setDate(evl.target.value)}
        ></input>

        <label htmlFor="duration" className="my-0.5 px-3 text-2xl ">
          Duration
        </label>
        <input
          type="time"
          name="timeinput"
          className="custom-time-input bg-inherit border-2 border-[#243c5a] rounded-lg p-3.5 hover:border-white"
          onChange={handleTimeChange}
        />

        <button
          onClick={addActivity}
          className="h-[57px] my-16 bg-[#00ECFF] rounded-lg text-black text-2xl font-bold	"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ActivityForm;
