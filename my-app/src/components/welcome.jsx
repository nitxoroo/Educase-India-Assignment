import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="main w-full">
      <div className="form relative m-auto h-[100vh] bg-[#f7f8f9] border-1 border-gray-300 
                      w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[35vw] xl:w-[25vw]">
        <div className='relative top-110'>
          <h1 className='text-3xl font-bold ml-6'>Welcome to PopX</h1>
          <p className='max-w-[70%] ml-6 mt-2 text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <div className="relative buttons w-[90%] mx-auto mt-4">
            <button 
              onClick={() => navigate('/account')} 
              className='w-full bg-[#6c25ff] m-2 p-3 rounded-lg text-white font-semibold cursor-pointer'>
              Create Account
            </button>
            <button 
              onClick={() => navigate('/login')} 
              className='w-full bg-[#cebafb] m-2 p-3 rounded-lg font-semibold cursor-pointer'>
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
