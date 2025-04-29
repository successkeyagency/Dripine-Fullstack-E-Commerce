import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/shopContext'

const PlaceOrder = () => {

  const [method,setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);


  return (
    <div className="w-full px-4 py-12 min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">

        <div className="flex-1 backdrop-blur-sm bg-[#111111]/60 border border-[#222] rounded-2xl p-8 shadow-lg">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
            <input
              className="bg-[#181818] border border-[#333] rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-150"
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-[#181818] border border-[#333] rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-150"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            className="w-full bg-[#181818] border border-[#333] rounded-xl px-4 py-3 mt-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-150"
            type="email"
            placeholder="Email Address"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            <input
              className="bg-[#181818] border border-[#333] rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-150"
              type="text"
              placeholder="City"
            />
            <input
              className="bg-[#181818] border border-[#333] rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-150"
              type="text"
              placeholder="State"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            <input
              className="bg-[#181818] border border-[#333] rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-150"
              type="text"
              placeholder="Zipcode"
            />
            <input
              className="bg-[#181818] border border-[#333] rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-150"
              type="text"
              placeholder="Country"
            />
          </div>

          <input
            className="w-full bg-[#181818] border border-[#333] rounded-xl px-4 py-3 mt-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-150"
            type="number"
            placeholder="Phone Number"
          />
        </div>

        <div className="flex-1 max-w-md bg-[#141414] border border-[#36ff5e] rounded-2xl p-3 shadow-xl h-fit">
          <CartTotal />
          
          <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />


          {/* NOTE ----------------- Payment Method Selection ----------------- */}
          
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-xl hover:border-green-500 transition'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
            </div>

            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-xl hover:border-green-500 transition'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="Razorpay" />
            </div>

            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-xl hover:border-green-500 transition'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='mt-8'>
          <button
    onClick={() => navigate('/orders')}
    className='w-full py-3 bg-green-500 hover:bg-green-600 text-black font-bold text-lg rounded-xl shadow-md transition duration-300 ease-in-out'
  >
    PLACE ORDER
  </button>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
