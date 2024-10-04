// src/WelcomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InpTextInputut from '../ui/Input';

const WelcomePage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isLogin ? 'Login' : 'Sign Up'} submitted!`);
    
    // After submission, navigate to the home page
    navigate('/home'); 
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-custom-gradient p-4">
      <div className="flex flex-col items-center justify-center mb-8 md:mb-0 md:w-1/2">
        <h1 className="text-white font-inter text-5xl md:text-8xl font-extrabold animate-writing overflow-hidden whitespace-nowrap shadow-white text-center">
          ERP NEXT
        </h1>
        
        <div className='font-sans font-extrabold text-2xl md:text-4xl text-white mt-4 text-center'>
          Stay Ahead Of The Curve With Our ERP
        </div>
      </div>

      <div className="bg-white bg-gray-50 p-8 rounded-lg shadow-2xl w-full max-w-sm md:max-w-md md:w-1/3">
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
          <h2 className="text-xl mb-6 mt-4 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
          
          <InpTextInputut
            type="text"
            placeholder="Username"
            className='mb-8 p-2 border border-gray-300 rounded w-[245px]' // Changed to mb-8
            required
          />
          
          <InpTextInputut
            type="password"
            placeholder="Password"
            required
            className='mb-8 p-2 border border-gray-300 rounded w-[245px]' // Changed to mb-8
          />
          
          {!isLogin && (
            <InpTextInputut
              type="email"
              placeholder="Email"
              className='mb-8 p-2 border border-gray-300 rounded w-[245px]' // Changed to mb-8
              required
            />
          )}
          
          <button
            type="submit"
            className="w-[245px] p-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>

          <div className="flex justify-between mt-3 text-sm w-full">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:underline"
            >
              {isLogin ? 'Create an account' : 'Already have an account?'}
            </button>
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => alert('Forgot password functionality')}
            >
              Forgot password?
            </button>
          </div>
        </form>
        
        <div className="mt-4">
          <img src={require('../../assets/images/gemba-doodle.png')} alt="logo" className='mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
