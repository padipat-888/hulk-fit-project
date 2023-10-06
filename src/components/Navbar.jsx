import React from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline,IoHomeOutline,IoPeopleOutline,IoBarChartOutline,IoPersonOutline } from "react-icons/io5";




const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-evenly px-5">
        <li className="rounded-md w-[52px] h-[52px] bg-[#D9D9D9] flex justify-center items-center">
          <Link to={"#"}>
            <a href=""><IoHomeOutline className="text-black text-3xl"/></a>
          </Link>
        </li>

        <li className="rounded-md w-[52px] h-[52px] bg-[#D9D9D9] flex justify-center items-center">
          <Link to={""}>
            <a href=""><IoPeopleOutline className="text-black text-3xl"/></a>
          </Link>
        </li>
        
        <li className="rounded-md w-[52px] h-[52px] bg-[#D9D9D9] flex justify-center items-center">
          <Link to={"/activitytype"}>
            <a href=""><IoAddCircleOutline className="text-black text-3xl"/></a>
          </Link>
        </li>

        <li className="rounded-md w-[52px] h-[52px] bg-[#D9D9D9] flex justify-center items-center">
          <Link to={"/dashboard"}>
            <a href=""><IoBarChartOutline className="text-black text-3xl"/></a>
          </Link>
        </li>

        <li className="rounded-md w-[52px] h-[52px] bg-[#D9D9D9] flex justify-center items-center">
          <Link to={""}>
            <a href=""><IoPersonOutline className="text-black text-3xl"/></a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
