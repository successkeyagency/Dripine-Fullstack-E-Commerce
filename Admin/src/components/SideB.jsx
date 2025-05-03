import React from 'react'
import { NavLink } from 'react-router-dom'

const SideB = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='p-2'>
        <NavLink
          className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-all'
          to="/add"
        >
          <span className='text-lg'>➕</span>
          <p className='hidden md:block text-sm font-medium text-gray-700'>Add Items</p>
        </NavLink>

        <NavLink
          className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-all'
          to="/list"
        >
          <span className='text-lg'>📦</span>
          <p className='hidden md:block text-sm font-medium text-gray-700'>List Items</p>
        </NavLink>

        <NavLink
          className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-all'
          to="/orders"
        >
          <span className='text-lg'>🧾</span>
          <p className='hidden md:block text-sm font-medium text-gray-700'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideB
