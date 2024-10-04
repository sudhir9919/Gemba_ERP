import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className='w-[95%] ml-[5%]'>
      {<Outlet/>}
      </div>
    </div>
  )
}

export default Home
