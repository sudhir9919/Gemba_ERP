// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/App.css'
const Header = () => {
  return (
    <div className="flex bg-light-green sticky top-0 shadow-md ">
    <div className="ml-[50px] p-2 flex">
      <div className='w-[64px] h-[9vh] transition-all duration-200 hover:bg-gray-100 hover:shadow-xl bg-transparent-500 shadow-sm rounded-full '>
        <Link to="/home" className="Home" >
      <img src={require('../../assets/images/gemba-doodle.png')} className="w-[90px] h-[70px]" alt="Gemba2" />
      </Link>
      </div>
      <img src={require('../../assets/images/gemba-logo.png')} className="w-[140px] h-[45px] mt-4 ml-3 " alt="Gemba" />
    </div>
    </div>
  );
};

export default Header;
