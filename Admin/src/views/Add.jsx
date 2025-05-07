import React, { useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets.js";
import { backendUrl } from "../App";
import {toast} from 'react-toastify'

const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [Category, setcategory] = useState("Men");
  const [subCategory, setsubCategory] = useState("TopWear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const handleSizeToggle = (size) => {
    setSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", Category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", JSON.stringify(bestseller));
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}});

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')

      }else {
        toast.error(response.data.message)
      }
     
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6"
    >
      <div>
        <p className="text-gray-700 font-semibold mb-2">Upload Images</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[image1, image2, image3, image4].map((img, i) => {
            const id = `image${i + 1}`;
            const setter = [setImage1, setImage2, setImage3, setImage4][i];
            return (
              <label
                key={id}
                className="cursor-pointer border border-gray-300 rounded-lg p-2 hover:border-blue-400 transition"
                htmlFor={id}
              >
                <img
                  className="w-full h-24 object-cover"
                  src={!img ? assets.upload_area : URL.createObjectURL(img)}
                  alt=""
                />
                <input
                  onChange={(e) => setter(e.target.files[0])}
                  type="file"
                  id={id}
                  hidden
                />
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-gray-700 font-semibold mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div>
        <p className="text-gray-700 font-semibold mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write description here"
          required
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-700 font-semibold mb-2">Product Category</p>
          <select
            onChange={(e) => setcategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="shoes">Shoes</option>
          </select>
        </div>
        <div>
          <p className="text-gray-700 font-semibold mb-2">Sub Category</p>
          <select
            onChange={(e) => setsubCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="TopWear">Topwear</option>
            <option value="BottomWear">BottomWear</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div>
          <p className="text-gray-700 font-semibold mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-4 py-2 border rounded-lg"
            type="number"
            placeholder="$50"
            required
          />
        </div>
        <div>
          <p className="text-gray-700 font-semibold mb-2">Product Sizes</p>
          <div className="flex flex-wrap gap-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => handleSizeToggle(size)}
                className={`px-3 py-1 border rounded-full ${
                  sizes.includes(size)
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            checked={bestseller}
            onChange={(e) => setBestseller(e.target.checked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded"
          />
          <span className="text-gray-700 font-medium">Mark as Exclusive</span>
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit Product
      </button>
    </form>
  );
};

export default Add;
