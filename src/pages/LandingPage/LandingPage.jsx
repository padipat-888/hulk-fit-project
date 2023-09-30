import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-[url('/public/assets/landingpageBg.png')] h-screen bg-no-repeat">
      <div className="pl-12 pt-16">
        <h1 className=" text-[64px] text-cyan-400 font-bold">HULK FIT</h1>
        <h3 className=" text-white font-light">
          The App That Builds{" "}
          <span className="text-cyan-400 font-bold">More Than</span> Muscles
        </h3>
      </div>
      <div className="w-screen h-1/4 absolute bottom-0 flex justify-evenly items-center">
        <Link to={"/login"}>
          <button className="text-black font-semibold bg-[#00ECFF] h-12 w-28 rounded-full text-xl">
            LOGIN
          </button>
        </Link>
        <Link to={"/signup"}>
          <button className="text-black font-semibold bg-[#F540A1] h-12 w-28 rounded-full text-xl">
            SIGN UP
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
