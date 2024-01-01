import React from 'react'
import Navbar from './Navbar'
import ItemCrud from './ItemCrud'

const Dashboard = () => {
  return (
    <div className='h-screen flex flex-col bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='h-[10%] flex items-center justify-center'>
        <Navbar />
      </div>
      <div className='h-[90%] flex items-center justify-center'>
        <ItemCrud />
      </div>
    </div>
  )
}

export default Dashboard