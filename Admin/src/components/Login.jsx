import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { backendUrl } from '../App';

const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
            if (response.data.success) {
                setToken(response.data.token)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='w-full max-w-sm p-6 bg-white rounded-2xl shadow-md'>
            <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Admin Panel</h1>
            <form onSubmit={onSubmitHandler} className='space-y-4'>
                <div>
                    <p className='text-sm font-medium text-gray-600 mb-1'>Email Address</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" placeholder='Email@gmail.com'required/>
                </div>
                <div>
                    <p className='text-sm font-medium text-gray-600 mb-1'>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" placeholder='Enter Your Password'required/>
                </div>
                <button className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login