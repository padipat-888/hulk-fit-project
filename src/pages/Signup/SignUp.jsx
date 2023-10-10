import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();
  
  const loginHandler = () => {
    //find email match 
    const getDataByEmail = async () => {
      const response = await axios.get(
        `https://hulkfit-backend.onrender.com/getUserByEmail/${userEmail}`
      );
      if (response.status === 200 && response.data) {
        const data = response.data;
        setMembers(...data);
      }
    };

    getDataByEmail()

    if (userEmail != '' && userPass != '') {

      if (userEmail === members.email && userPass === members.pass) {

        // navigate('/userhome', {state:data});
        alert(`Success Login Welcome : ${members.fullname}`);
        
      } else {

        alert(`Email Not Found : Please SignUp First`);
      }
    } else {
      alert('Error: ใส่ข้อมูลด้วยฮะ');
    }

    console.log(`INPUT_DATA: user:${userEmail},pass:${userPass}`);
    console.log(`___DB_DATA: user:${members.email},pass:${members.pass}`);
  };

  return (
    <div
      className='w-full min-h-screen flex flex-row '
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* <div className='hero-overlay bg-opacity-60'></div> */}
      <div className='w-[70%] bg-gradient-to-b from-transparent from-65% to-black flex flex-col justify-end items-start '>
        <div className='p-10'>
          <h1 className='text-white text-5xl font-semibold py-5'>Hulk Fit</h1>
          <p className='text-white text-xl pb-5'>
            "Empower your mind, fuel your soul; let the energy within propel you
            to remarkable heights of action and achievement."
          </p>
        </div>
      </div>
      <div className='w-[30%] bg-slate-50'>
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mt-10 text-center text-6xl font-bold leading-9 tracking-tight text-gray-900'>
              Hulk Fit
            </h2>
          </div>

          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Email address
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='text'
                    autoComplete='text'
                    onChange={(e) => setUserEmail(e.target.value)}
                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Password
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    onChange={(e) => setUserPass(e.target.value)}
                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={() => loginHandler()}
                  type='button'
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Log In
                </button>
              </div>
            </form>

            <p className='mt-10 text-center text-sm text-gray-500'>
              Not a member?{' '}
              <Link
                to={'/signup'}
                className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
              >
                Create Account Here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
