import React from 'react'
import {assets} from '../assets/assets.js'

const Nav = ({setToken}) => {
  return (
    <div className='flex items-center justify-between px-4 py-3 bg-white shadow-md w-full'>
        <img className='w-20 sm:w-24 object-contain' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='px-4 py-2 text-sm sm:text-base bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all' >Logout</button>
    </div>
  )
}

export default Nav