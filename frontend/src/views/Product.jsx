import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets.js';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size,setSize] = useState('')


  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  const handleAddToCart =()=> {
    addToCart(productData._id, size);
    toast.success('Item added to cart!');
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="container mx-auto py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="relative mb-4">
            <img
              src={image}
              alt={productData.name}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex space-x-4">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`product-thumbnail-${index}`}
                className="w-16 h-16 object-cover rounded-lg cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-white max-w-xl text-center">{productData.name}</h2>
          <br></br>
          <div className='flex items-center gap-1 mt-2 justify-center '>
            <img src={assets.star_icon} alt="" className='w-5 h-5' />
            <img src={assets.star_icon} alt="" className='w-5 h-5' />
            <img src={assets.star_icon} alt="" className='w-5 h-5' />
            <img src={assets.star_icon} alt="" className='w-5 h-5' />
            <img src={assets.star_dull_icon} alt="" className='w-5 h-5' />
            <p className='pl-2'>(2560)</p>
          </div>
          <br></br>
         
          <p className="text-2xl font-bold text-green-500 mt-4 text-center ">{currency}{productData.price}</p>
          <div className="flex justify-start lg:justify-center">
            <p className="text-lg text-white mt-2 max-w-xl text-center">{productData.description}</p>
          </div>
          
          <div className='flex flex-col gap-4 my-8 max-w-xl text-center'>
              <p>Select Size</p>
              <div className='flex gap-2 justify-center'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4  ${item === size ? 'border-green-500' :''} `} key={index}>{item}</button>
                ))}
              </div>

          </div>

          <button onClick={handleAddToCart} className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors block mx-auto">
            Add to Cart
          </button>
          <hr className='mt-8 sm:w-4/5 mx-auto' />
          <div className='text-sm text-white mt-5 flex flex-col gap-1 text-center'>
            <p>100% Original Product</p>
            <p>Fast Delivery</p>
            <p>Easy Return & Exchange</p>

          </div>
        </div>
      </div>

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Reviews (2560)</b>

        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-white'>
          <p>Absolutely love the product! The quality and style are on point. I’ll definitely be coming back for more. Highly recommend!</p>
          <div className='flex items-center gap-1 mt-2'>
          <img src={assets.star_icon} alt="" className='w-5 h-5' />
          <img src={assets.star_icon} alt="" className='w-5 h-5' />
          <img src={assets.star_icon} alt="" className='w-5 h-5' />
          <img src={assets.star_icon} alt="" className='w-5 h-5' />
          <img src={assets.star_icon} alt="" className='w-5 h-5' />
          </div>
        </div>

      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
