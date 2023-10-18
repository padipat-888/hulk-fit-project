import React from 'react'
import { Link } from 'react-router-dom';

const NavbarDesktop = () => {
  return (
    <div className='lg:flex justify-between w-screen h-[5%] hidden'>
        {/* LOGO */}
        <div className='w-[50%] bg-orange-300'></div>
        {/* List*/}
        <div className='w-[50%] bg-orange-500 text-2xl flex items-center p-4'>
            <ul className='flex justify-between w-[100%]'>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"#"}>COMMUNITY</Link></li>
                <li><Link to={'/activitytype'}>ADD ACTIVITY</Link></li>
                <li><Link to={"/dashboard"}>DASHBOARD</Link></li>
                <li><Link to={"#"}>PROFILE</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default NavbarDesktop