import Cart from "./components/pages/Cart";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import LoginPopUp from "./components/LoginPopUp";
import MyOrders from "./components/pages/MyOrders";
import Navbar from "./components/Navbar";
import PlaceOrder from "./components/pages/PlaceOrder";
import React, { useState } from "react";
import Verify from "./components/pages/Verify";
import { Route, Routes } from "react-router-dom";

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
