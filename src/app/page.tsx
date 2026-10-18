import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='w-[100%] h-[100vh] flex justify-start items-center  '>
      <div className='w-[10%] h-[100vh] border-1'>
        
        <Navbar />
      </div>
      <div className='w-[100%]'>
        <div className='w-[100%] h-[10vh] border-1'>
          <Sidebar />
        </div>
        <div className='w-[100%] h-[90vh] border-1'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default HomePage