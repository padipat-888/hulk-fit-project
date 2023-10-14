import React from "react";
import { Link,useLocation } from "react-router-dom";


import iconWalk from "../../../src/assets/icon/icon-walk.png"
import iconRun from "../../../src/assets/icon/icon-run.png"
import iconBicycle from "../../../src/assets/icon/icon-bicycle.png"
import iconSwim from "../../../src/assets/icon/icon-swim.png"
import iconTennis from "../../../src/assets/icon/icon-tennis.png"
import iconSkateboard from "../../../src/assets/icon/icon-skateboard.png"
import iconHike from "../../../src/assets/icon/icon-hike.png"
import iconFootball from "../../../src/assets/icon/icon-football.png"

import walk from "../../../src/assets/type/walk.png"
import run from "../../../src/assets/type/run.png"
import bicycle from "../../../src/assets/type/bicycle.png"
import swim from "../../../src/assets/type/swim.png"
import tennis from "../../../src/assets/type/tennis.png"
import skateboard from "../../../src/assets/type/skateboard.png"
import hike from "../../../src/assets/type/hike.png"
import football from "../../../src/assets/type/football.png"


const ActivityType = () => {

  const { state } = useLocation()
  const id = state.id
  console.log(`Typeof Id is ${typeof id} and value is ${id}`)

  return (
    <div className="">
    <div className="w-[290px] m-auto">
      <h1 className="text-5xl text-white text-center mt-24 mb-11">Activity Type</h1>
      <div className="grid grid-cols-2 justify-items-center">
        <Link to="/activityform" state={ { id:id, icon: walk , type: "walk"}}><img src={iconWalk} alt="walk icon" className="w-[123px] h-[123px] m-2"/></Link>
        <Link to="/activityform" state={ { id:id, icon: run , type: "run"}} ><img src={iconRun} alt="run icon" className="w-[123px] h-[123px] m-2" /></Link>
        <Link to="/activityform" state={ { id:id, icon: bicycle , type: "bicycle"}} ><img src={iconBicycle} alt="bicycle icon" className="w-[123px] h-[123px] m-2" /></Link>
        <Link to="/activityform" state={ { id:id, icon: swim , type: "swim"}} ><img src={iconSwim} alt="swim icon" className="w-[123px] h-[123px] m-2"/></Link>
        <Link to="/activityform" state={ { id:id, icon: tennis , type: "tennis"}} ><img src={iconTennis} alt="tennis icon" className="w-[123px] h-[123px] m-2"/></Link>
        <Link to="/activityform" state={ { id:id, icon: skateboard , type: "skateboard"}} ><img src={iconSkateboard} alt="skateboard icon" className="w-[123px] h-[123px] m-2"/></Link>
        <Link to="/activityform" state={ { id:id, icon: hike , type: "hike"}} ><img src={iconHike} alt="hike icon" className="w-[123px] h-[123px] m-2" /></Link>
        <Link to="/activityform" state={ { id:id, icon: football , type: "football"}} ><img src={iconFootball} alt="football icon" className="w-[123px] h-[123px] m-2"/></Link>
        
      </div>
    </div>
    </div>
  )
}

export default ActivityType