import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import user from "../../assets/user.png"

function Profile() {
  const [cookies] = useCookies(["user"]);
  const userID = cookies.user._id;
  const [image, setImage] = useState(user);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:4000/${userID}`)
      .then((result) => {
        setFullname(result.data[0].fullname)
        setEmail(result.data[0].email)
        setPassword(result.data[0].password)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    {/* ----------desktop---------- */}
    <div className="bg-black text-white rounded-3xl w-[60%] h m-auto flex max-md:hidden mt-20">
      <div className="w-[30%] p-10">
        <img src={image} 
        className=" rounded-full ring ring-[#F540A1] ring-offset-[#F540A1] w-full ring-offset-2"/>
      </div>
      <div className="w-[70%] p-10">
        <p className="p-3 bg-[#F540A1] rounded-lg w-fit mb-5 font-extrabold text-3xl">P r o f i l e</p>
        <div className="border-t border-slate-500 py-5 grid grid-cols-2 gap-4 text-2xl">
            <p>Name </p><p>{fullname}</p>
            <p>Email </p><p>{email}</p>
            <p>Password </p><p>{password}</p>
        </div>
        <div className="flex gap-4">
        <button className="font-semibold bg-[#00ECFF] h-12 w-28 rounded-full text-xl">Edit</button>
        <button className="font-semibold bg-red-900 h-12 w-28 rounded-full text-xl">Cancel</button>
        </div>
      </div>
    </div>
    {/* ----------mobile---------- */}
    <div className="text-white rounded-3xl md:hidden">
    <p className="p-3 bg-[#F540A1] rounded-lg w-fit m-auto my-5 font-extrabold text-3xl">P r o f i l e</p>
      <div className="">
        <img src={image}
        className="w-[70%] rounded-full m-auto mt-5 ring ring-[#F540A1] ring-offset-[#F540A1] ring-offset-2"/>
      </div>
      <div className="p-10">
        
        <div className="border-t border-slate-500 py-5 grid grid-cols-2 gap-4 text-2xl">
            <p>Name </p><p>{fullname}</p>
            <p>Email </p><p>{email}</p>
            <p>Password </p><p>{password}</p>
        </div>
        <div className="flex justify-around	">
        <button className="font-semibold bg-[#00ECFF] h-12 w-28 rounded-full text-xl">Edit</button>
        <button className="font-semibold bg-red-900 h-12 w-28 rounded-full text-xl">Cancel</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
