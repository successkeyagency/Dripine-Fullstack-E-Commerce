import React, { useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import axios from 'axios'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [currentstate, setCurrentState] = useState('signup')
  const {token, setToken, navigate, backendUrl} = useContext(ShopContext)

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentstate === 'signup' ) {

        const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }
      } else {

        const response = await axios.post(backendUrl + '/api/user/login', {email,password})
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
          
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  }

  useEffect(()=> {
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='w-full max-w-md mx-auto mt-16 p-6 bg-[#111] rounded-xl shadow-md text-white'>
      <div className='mb-6 text-center'>
        <p className='text-2xl font-semibold text-green-500'>{currentstate}</p>
        <hr className='border-none h-[2px] w-10 bg-green-500 mx-auto mt-2 rounded' />
      </div>

      {currentstate === 'login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name}
        type="text" 
        className='w-full mb-4 px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:border-green-500 transition'
        placeholder='Name' 
        required 
      />}
      
      <input onChange={(e)=>setEmail(e.target.value)} value={email}
        type="email" 
        className='w-full mb-4 px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:border-green-500 transition'
        placeholder='Email'  
        required 
      />
      
      <input onChange={(e)=>setPassword(e.target.value)} value={password}
        type="password" 
        className='w-full mb-6 px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:border-green-500 transition'
        placeholder='Password'  
        required 
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot Your Password ?</p>
          {
            currentstate === 'login'
            ? <p onClick={()=>setCurrentState('signup')} className=' cursor-pointer'>Create account</p>
            : <p onClick={()=>setCurrentState('login')} className=' cursor-pointer'>Login Here</p>
          }
      </div>
      <button className='bg-green-400 text-black font-light px-8 py-2 mt-4'>{currentstate === 'login' ? 'Log In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
