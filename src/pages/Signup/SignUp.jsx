import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [images, setImages] = useState('');
  const [imageURLs, setImageURLs] = useState([]);
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const navigate = useNavigate();


  const defaultImage =
    'https://t3.ftcdn.net/jpg/05/00/54/28/360_F_500542898_LpYSy4RGAi95aDim3TLtSgCNUxNlOlcM.jpg';

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = URL.createObjectURL(images);
    setImageURLs(newImageURLs);

    console.log('image is :', images);
    console.log('imageurl is :', imageURLs);
  }, [images]);

  const onImageChange = (e) => {
    setImages(e);
  };

  const signupHandler = async () => {
    console.log('signup click');
    
    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', images);

    try {
      const response = await axios.post(
        'http://localhost:4000/signup',
        formData
      );
      console.log('Response from backend:', response.data, response.status);
      alert(`Welcome new Member your Signup Complete Code:${response.status}\n
      Here recheck your data \n
      fullname: ${response.data.fullname}\n
      email: ${response.data.email}\n
      password: ${response.data.password}\n
      image: ${response.data.image}\n
      date: ${response.data.date}
      `)
      navigate('/login')

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      className='w-full min-h-screen flex flex-row '
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
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
            &quot;Empower your mind, fuel your soul; let the energy within
            propel you to remarkable heights of action and achievement.&quot;
          </p>
        </div>
      </div>
      <div className='w-[30%] bg-slate-50'>
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='text-center text-6xl font-bold text-gray-900'>
              Hulk Fit
            </h2>
          </div>

          <div className='flex flex-row justify-center align-middle mt-10'>
            <div className='avatar'>
              <div className='w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img src={images.length < 1 ? defaultImage : imageURLs} />
              </div>
            </div>
          </div>

          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='fullname'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  FullName
                </label>
                <div className='mt-2'>
                  <input
                    name='fullname'
                    type='text'
                    required
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Email address
                </label>
                <div className='mt-2'>
                  <input
                    name='email'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                    name='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='repassword'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Re-Password
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    id='repassword'
                    name='repassword'
                    type='password'
                    value={repassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='image'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Upload Profile Image
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    name='image'
                    type='file'
                    multiple
                    accept='image/*'
                    onChange={(e) => onImageChange(e.target.files[0])}
                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={() => signupHandler()}
                  type='button'
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className='mt-10 text-center text-sm text-gray-500'>
              Already a member?{' '}
              <Link
                to={'/login'}
                className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
              >
                Login.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
