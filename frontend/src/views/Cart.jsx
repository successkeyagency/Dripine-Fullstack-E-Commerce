import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setcartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setcartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 px-6 lg:px-20 text-white">
      <div className="text-3xl font-semibold mb-8">
        <Title text1="YOUR" text2="CART" />
      </div>

      {cartData.length === 0 ? (
        <p className="text-center text-gray-400 text-lg mt-10">
          Your cart is empty.
        </p>
      ) : (
        <div className="space-y-6">
          {cartData.map((item, index) => {
            const productData = products.find((p) => p._id === item._id);
            if (!productData) return null;

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-6 p-4 border border-gray-700 rounded-xl bg-[#111] shadow-md"
              >
                <img
                  className="w-28 h-28 object-cover rounded-lg"
                  src={productData.image[0]}
                  alt={productData.name}
                />

                <div className="flex-1 w-full">
                  <h3 className="text-lg font-semibold">{productData.name}</h3>
                  <p className="text-sm text-gray-400 mb-1">
                    Size: <span className="uppercase">{item.size}</span>
                  </p>
                  <p className="text-base font-bold text-green-400">
                    {currency}
                    {(productData.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3 w-fit">
                  <div className="flex items-center bg-[#1b1b1b] border border-gray-600 rounded-md overflow-hidden">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.size, item.quantity - 1)
                      }
                      className="px-3 py-1 text-white hover:bg-gray-700 disabled:opacity-30"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      readOnly
                      value={item.quantity}
                      className="w-12 text-center bg-transparent text-white outline-none border-x border-gray-600"
                    />
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.size, item.quantity + 1)
                      }
                      className="px-3 py-1 text-white hover:bg-gray-700"
                    >
                      +
                    </button>
                  </div>

                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    src={assets.bin_icon}
                    alt="Remove"
                    className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200"
                  />
                </div>
              </div>
            );
          })}
          <div className="mt-10 flex justify-end">
            <div className="w-full max-w-md bg-[#111] border border-gray-700 rounded-2xl p-6 shadow-xl space-y-6">
              <CartTotal />
              <div className="pt-4">
                <button
                  onClick={() => navigate("/place-Order")}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
