import React from 'react'
import Menubar from './components/menubar/Menubar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import ExploreFood from './pages/explore/ExploreFood'
import ContactUs from './pages/contact-us/ContactUs'
import FoodDetails from './pages/food-details/FoodDetails'
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreFood />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
