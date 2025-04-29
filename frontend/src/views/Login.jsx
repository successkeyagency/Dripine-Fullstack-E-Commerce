import React, { useState } from 'react'

const Login = () => {

  const [currentstate, setCurrentState] = useState('Sign Up')
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();

  }

  return (
    <form onSubmit={onSubmitHandler} className='w-full max-w-md mx-auto mt-16 p-6 bg-[#111] rounded-xl shadow-md text-white'>
      <div className='mb-6 text-center'>
        <p className='text-2xl font-semibold text-green-500'>{currentstate}</p>
        <hr className='border-none h-[2px] w-10 bg-green-500 mx-auto mt-2 rounded' />
      </div>

      {currentstate === 'LogIn' ? '' : <input 
        type="text" 
        className='w-full mb-4 px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:border-green-500 transition'
        placeholder='Name' 
        required 
      />}
      
      <input 
        type="email" 
        className='w-full mb-4 px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:border-green-500 transition'
        placeholder='Email'  
        required 
      />
      
      <input 
        type="password" 
        className='w-full mb-6 px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:border-green-500 transition'
        placeholder='Password'  
        required 
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot Your Password ?</p>
          {
            currentstate === 'LogIn'
            ? <p onClick={()=>setCurrentState('Sign Up')} className=' cursor-pointer'>Create account</p>
            : <p onClick={()=>setCurrentState('LogIn')} className=' cursor-pointer'>Login Here</p>
          }
      </div>
      <button className='bg-green-400 text-black font-light px-8 py-2 mt-4'>{currentstate === 'LogIn' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
