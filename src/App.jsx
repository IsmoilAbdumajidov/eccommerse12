import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Navbar from './components/Navbar'
import FixedNav from './components/FixedNav'

const App = () => {
  return (
    <div>
      {/* toats components */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 10000 }}
      />
      {/* router */}

      <Navbar />
      <FixedNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Cart />} />
        <Route path='/' element={<Wishlist />} />
      </Routes>

    </div>
  )
}

export default App