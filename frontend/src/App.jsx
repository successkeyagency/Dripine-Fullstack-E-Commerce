import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Form } from 'react-router-dom'
import Contact from './views/contact'
import About from './views/About'
import Collections from './views/collections'
import Product from './views/Product'
import Cart from './views/Cart'
import Login from './views/Login'
import PlaceOrder from './views/PlaceOrder'
import Orders from './views/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Home from './views/home'
import Verify from './views/Verify'; 
import ScrollToTop from './components/ScrollToTop'


const App = () => {
  return (
    <div className=''>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/verify' element={<Verify/>}/>

      </Routes>
      <Footer />

    </div>
  )
}

export default App
