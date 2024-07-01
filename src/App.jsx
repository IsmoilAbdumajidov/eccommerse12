import React, { createContext, useEffect, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Navbar from './components/Navbar'
import FixedNav from './components/FixedNav'
import { reducerFn } from './api/reduserFn'
import Nomatch from './pages/Nomatch'

export const StoreContext = createContext()


const initilValue = {
  products: [],
  cart: [],
  wishlist: []
}

const App = () => {

  const [state, dispatch] = useReducer(reducerFn, initilValue)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
    dispatch({ type: "CART", payload: cart })
    dispatch({ type: "WISHLIST", payload: wishlist })
  }, [])


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

      <StoreContext.Provider value={[state, dispatch]}>
        <Navbar />
        <FixedNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Cart />} />
          <Route path='/' element={<Wishlist />} />
          <Route path='*' element={<Nomatch />} />
        </Routes>
      </StoreContext.Provider>

    </div>
  )
}

export default App