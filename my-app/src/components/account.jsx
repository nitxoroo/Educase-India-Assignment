import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [isAgency, setIsAgency] = useState('');
  const [formValid, setFormValid] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setIsAgency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAgency) {
      setFormValid(false);
      return;
    }

    setFormValid(true);
    navigate('/profile');
  };

  return (
    <div className="main w-full">
      <form
        onSubmit={handleSubmit}
        className="form relative m-auto w-full max-w-md sm:max-w-lg h-[100vh] bg-[#f7f8f9] border border-gray-300 rounded-md overflow-auto p-4 sm:p-6"
      >
        <h1 className="max-w-[60%] text-3xl font-bold ml-4">Create your PopX account</h1>

        <div className="inputs m-4">

          <div className="relative mt-4">
            <label className="text-sm font-medium text-[#6c25ff] absolute -top-2 left-3 bg-[#f7f8f9] px-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your Full Name"
              className="w-full p-3 mt-2 border rounded-lg border-gray-300 outline-none focus:border-[#6c25ff] placeholder-gray-400"
            />
          </div>

          <div className="relative mt-4">
            <label className="text-sm font-medium text-[#6c25ff] absolute -top-2 left-3 bg-[#f7f8f9] px-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="tel"
              placeholder="Enter your Phone number"
              className="w-full p-3 mt-2 border rounded-lg border-gray-300 outline-none focus:border-[#6c25ff] placeholder-gray-400"
            />
          </div>

          <div className="relative mt-4">
            <label className="text-sm font-medium text-[#6c25ff] absolute -top-2 left-3 bg-[#f7f8f9] px-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              placeholder="Enter email address"
              className="w-full p-3 mt-2 border rounded-lg border-gray-300 outline-none focus:border-[#6c25ff] placeholder-gray-400"
            />
          </div>

          <div className="relative mt-4">
            <label className="text-sm font-medium text-[#6c25ff] absolute -top-2 left-3 bg-[#f7f8f9] px-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="password"
              placeholder="Enter password"
              className="w-full p-3 mt-2 border rounded-lg border-gray-300 outline-none focus:border-[#6c25ff] placeholder-gray-400"
            />
          </div>

          <div className="relative mt-4">
            <label className="text-sm font-medium text-[#6c25ff] absolute -top-2 left-3 bg-[#f7f8f9] px-1">
              Company name<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Enter your Company name"
              className="w-full p-3 mt-2 border rounded-lg border-gray-300 outline-none focus:border-[#6c25ff] placeholder-gray-400"
            />
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium text-gray-800">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>

            <div className="flex items-center gap-6 mt-2">

              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === 'yes'}
                  onChange={handleChange}
                  className="peer hidden"
                  required
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                  ${isAgency === 'yes' ? 'border-[#6c25ff]' : 'border-gray-400'}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${isAgency === 'yes' ? 'bg-[#6c25ff]' : ''
                      }`}
                  />
                </div>
                <span className="ml-2 text-gray-800 font-medium">Yes</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === 'no'}
                  onChange={handleChange}
                  className="peer hidden"
                  required
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                  ${isAgency === 'no' ? 'border-[#6c25ff]' : 'border-gray-400'}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${isAgency === 'no' ? 'bg-[#6c25ff]' : ''
                      }`}
                  />
                </div>
                <span className="ml-2 text-gray-800 font-medium">No</span>
              </label>
            </div>
            {!formValid && (
              <p className="text-sm text-red-500 mt-1">Please select an option.</p>
            )}
          </div>
        </div>

        <div className="log top-[50px] relative w-[90%] mx-auto">
          <button
            type="submit"
            className={`w-full p-3 mt-2 border rounded-lg font-semibold outline-none  cursor-pointer
              ${formValid ? 'bg-[#6c25ff] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account;
