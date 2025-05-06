import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-6">Orders</h3>
      <div>
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index}
            className="border border-gray-200 shadow rounded-xl p-5 flex flex-col md:flex-row gap-6 bg-white">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl">
                📦
              </div>

              <div className="flex-1 space-y-2">
                {order.items.map((items, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p key={index}>
                        {items.name} x {items.quantity}{" "}
                        <span className="text-gray-500 text-xs">{items.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p key={index}>
                        {items.name} x {items.quantity}{" "}
                        <span className="text-gray-500 text-xs">{items.size}</span>
                      </p>
                    );
                  }
                })}
              </div>
              <p className="text-gray-800 font-semibold">{order.address.firstName + "" + order.address.lastName}</p>
              <div>
                <p className="text-sm text-gray-600">{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p className="text-sm text-gray-700">📞 {order.address.phone}</p>
              <div >
                <p>🧾 Items : {order.items.length}</p>
                <p>💳 Method : {order.paymentMethod}</p>
                <p>
                  💰 Payment:{" "}
                  <span className={order.payment ? "text-green-600" : "text-red-600"}>
                    {order.payment ? "Done" : "Pending"}
                  </span>
                </p>
                <p>📅 Date : {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p className="text-lg font-bold text-blue-600">
                {currency}
                {order.amount}
              </p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
