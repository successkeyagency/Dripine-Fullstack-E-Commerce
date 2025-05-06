import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from '../components/Title';
import axios from 'axios';


const Orders = () => {
  const { backendUrl,token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([])

  const loadOrderdata = async () => {
    try {
       if (!token) {
        return null
       }
       const response = await axios.post (backendUrl + '/api/order/userorders',{},{headers:{token}})
       if (response.data.success) {
          let allOrdersItem = []
          response.data.orders.map((order)=> {
            order.items.map((item)=>{
              item['status'] = order.status;
              item['payment'] = order.payment;
              item['paymentMethod'] = order.paymentMethod;
              item['date'] = order.date;
              allOrdersItem.push(item);
            });
          }); 
          setOrderData(allOrdersItem.reverse())
       }
    } catch (error) {
      
    }
  }

  useEffect (()=> {
    loadOrderdata()
  },[token])
  console.log(orderData.Date); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] px-4 py-10 text-white">
      <div className="max-w-5xl mx-auto">
        <Title text1={'MY'} text2={'ORDERS'} />

        <div className="mt-10 space-y-8">
          {orderData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 bg-[#111] border border-[#222] rounded-2xl p-5 shadow-md hover:border-green-500 transition-all duration-300"
            >
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-full md:w-48 h-48 object-cover rounded-xl border border-[#2a2a2a]"
              />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xl font-semibold text-green-400">{item.name}</p>
                  <div className="text-sm text-gray-400 mt-2 space-y-1">
                    <p>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-3">Date: <span className="text-white">{new Date(item.date).toLocaleString()}</span></p>
                  <p className="text-xs text-gray-500 mt-3">payment Method: <span className="text-white">{item.paymentMethod}</span></p>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm text-green-500">
                    <p className="font-semibold">✓ {item.status}</p>
                  </div>
                  <button onClick={loadOrderdata} className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded-xl font-medium transition">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Orders
