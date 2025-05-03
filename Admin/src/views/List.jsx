import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      console.log("API Response", response.data);

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Products List</h2>
      <div className="hidden md:grid grid-cols-5 font-semibold border-b pb-2 mb-4 text-gray-700">
        <div>Image</div>
        <div>Name</div>
        <div>Category</div>
        <div>Price</div>
        <div>Action</div>
      </div>

      <div className="space-y-4">
        {Array.isArray(list) &&
          list.map((item, index) => {
            const imageUrl = Array.isArray(item.image)
              ? item.image[0]
              : item.image;

            console.log("Image field for product:", item.image);
            console.log(`Product: ${item.name}, Images:`, item.image);

            return (
              <div
                key={item._id || index}
                className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow transition duration-200"
              >
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(item.image) && item.image.length > 0 ? (
                    item.image.map((url, idx) => (
                      <img
                        key={idx}
                        src={url}
                        alt={`${item.name} ${idx + 1}`}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ))
                  ) : (
                    <span>No Image Available</span>
                  )}
                </div>

                <div>
                  <span className="block md:hidden text-xs text-gray-500">
                    Name
                  </span>
                  <p className="font-medium">{item.name}</p>
                </div>

                <div>
                  <span className="block md:hidden text-xs text-gray-500">
                    Category
                  </span>
                  <p className="text-gray-600">{item.category}</p>
                </div>

                <div>
                  <span className="block md:hidden text-xs text-gray-500">
                    Price
                  </span>
                  <p className="text-green-600 font-semibold">
                    {currency}
                    {item.price}
                  </p>
                </div>

                <div>
                  <span className="block md:hidden text-xs text-gray-500">
                    Action
                  </span>
                  <button onClick={()=>removeProduct(item._id)} className="text-red-500 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
