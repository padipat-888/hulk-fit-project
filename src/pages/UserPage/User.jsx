import Navbar from '../../components/Navbar.jsx'
import Caruosel from '../../components/Carousel.jsx'
import { MdDirectionsRun,MdLocalFireDepartment,MdLocationPin} from "react-icons/md";
import { useCookies } from 'react-cookie';

const User = () => {
  return (
    <div className="bg-[url('/assets/userhomeBg.png')] h-screen bg-no-repeat">
      <div>
        {/* section 1 for Teader Text */}
        <div className='pt-16 pl-7'>
          <h1 className='text-3xl text-white'><span className='text-[#00ECFF]'>Good</span> Morning <span className='text-[#F53FA1]'>{fullname.toUpperCase()}</span></h1>
          <h2 className='text-2xl text-white font-light pl-8'>Let&apos;s start your day</h2>
        </div>
        {/* section 2 for Workout News */}
        <div>
        <Caruosel />
        </div>
        {/* section 3 for Workout Progress */}
        <div>
          <div className='pl-7 bg-gradient-to-r from-zinc-700 to-black text-white text-xs p-[4px]'>YOUR HARD W<span className='text-[#F53FA1]'>O</span>RK PROGRESS</div>
          <div className='flex justify-between m-1 py-4 px-2 '>
            <div className='flex items-center justify-center'>
              <MdDirectionsRun className='text-3xl text-white'/>
              <div className='text-white'>
                <p className='text-[10px]'>STEPS</p>
                <p className='text-[15px] font-semibold'>20,892</p>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <MdLocationPin className='text-3xl text-white'/>
              <div className='text-white'>
                <p className='text-[10px]'>DISTANCE COVERED</p>
                <p className='text-[15px] font-semibold'>15.7 <span className='text-[10px]'>KM</span></p>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <MdLocalFireDepartment className='text-3xl text-white'/>
              <div className='text-white'>
                <p className='text-[10px]'>CALORIES BURNED</p>
                <p className='text-[15px] font-semibold'>793 <span className='text-[10px]'>CAL</span></p>
              </div>
            </div>
          </div>

          <div>
            <h2 className='pl-7 text-lg font-semibold text-white'>Lastest Activity</h2>
            <div className='bg-white m-6 p-5 h-[100px] rounded-sm'></div>
          </div> 
        </div>
        <Navbar id={id} />
      </div>
      
    </div>
  )
}

export default User