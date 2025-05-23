import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="main w-full h-[100vh] flex justify-center items-center bg-white">
      <div className="form relative w-full max-w-md sm:max-w-lg bg-[#f7f8f9] border border-gray-300 rounded-md p-6 sm:p-10 h-full flex flex-col justify-center">
        <div>
          <h1 className='text-3xl sm:text-2xl font-bold max-w-full mb-2'>
            Signin to your PopX account
          </h1>
          <p className='text-gray-400 mb-6 font-semibold text-base sm:text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
          <div className="relative button w-full mx-auto">
            <div className="flex flex-col gap-6">

              <div className="relative">
                <label className="text-[#6c25ff] text-sm font-medium absolute -top-3 left-2 bg-[#f7f8f9] px-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 mt-2 border rounded-lg border-gray-300 outline-none focus:border-[#6c25ff] placeholder-gray-400"
                />
              </div>

              <div className="relative">
                <label className="text-[#6c25ff] text-sm font-medium absolute -top-3 left-2 bg-[#f7f8f9] px-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 mt-2 border rounded-lg border-gray-300 outline-none focus:border-[#6c25ff] placeholder-gray-400"
                />
              </div>

              <button
                onClick={() => navigate('/profile')}
                disabled={!isFormValid}
                className={`w-full p-3 mt-2 border rounded-lg font-semibold outline-none cursor-pointer
                  ${isFormValid ? 'bg-[#6c25ff] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              >
                Login
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
