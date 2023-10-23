import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

function Profile() {
  const [cookies] = useCookies(["user"]);
  const userID = cookies.user._id;
  const [apiData, setAPIData] = useState();

  useEffect(() => {
    axios
      .get(`https://hulkfit-backend-wowi.onrender.com/profile/${userID}`)
      .then((result) => {
        setAPIData(result.data);
        console.log(userID);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-black text-white rounded-3xl w-[60%] h-96 m-auto flex max-md:flex-col mt-20">
      <div className="w-[30%] p-10">
        <img src={'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg'} 
        className=" rounded-full ring ring-[#F540A1] ring-offset-[#F540A1] ring-offset-2"/>

      </div>
      <div className="w-[70%] p-10">
        <p className="p-3 bg-[#F540A1] rounded-lg w-fit mb-5 font-extrabold text-3xl">P r o f i l e</p>
        <div className="border-t border-slate-500 py-5 grid grid-cols-2 gap-4 text-2xl">
            <p>Name </p><p>{}</p>
            <p>Email </p><p>abc@gmail.com</p>
            <p>Password </p><p>abc</p>
        </div>
        <button className="font-semibold bg-[#00ECFF] h-12 w-28 rounded-full text-xl">Edit</button>
      </div>
    </div>
  );
}

export default Profile;
