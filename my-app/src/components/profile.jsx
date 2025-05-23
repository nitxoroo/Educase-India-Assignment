import React from 'react'
import userImg from "../assets/userImg.png";

const profile = () => {
  return (
    <div className="main w-full">
      <div className="form relative m-auto w-full max-w-[400px] sm:max-w-[600px] h-[100vh] bg-[#f7f8f9] border border-gray-300 rounded-md overflow-auto p-4 sm:p-8">
        <h2 className='w-full bg-white h-[50px] text-lg p-3 font-semibold'>
          Account Setting
        </h2>

        <div>
          <div className='flex items-center gap-5 my-7'>
            <div className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden flex-shrink-0'>
              <img src={userImg} className="w-full h-full object-cover" alt="User" />
            </div>
            <div>
              <h2 className="text-md font-semibold text-gray-800">Marry Doe</h2>
              <p className="text-md text-gray-500 mb-4">Marry@Gmail.Com</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 max-w-full mx-auto font-semibold mb-6">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat,
            Sed Diam
          </p>
          <div className="my-4">
            <hr className="border-t border-dashed border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile;
