import React, { useContext, useEffect, useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi2';
import { IoIosStar, IoMdHeart } from "react-icons/io";
import { GetProduct } from '../api/api';
import { StoreContext } from '../App';
import Card from '../components/Card';
const Home = () => {
  const [{ products }, dispatch] = useContext(StoreContext)
  useEffect(() => {
    GetProduct({ dispatch, type: "def" })
  }, [])

  const cartHandler = (item, type, name) => {
    let cartToLS = JSON.parse(localStorage.getItem(name)) || []

    const filterdCart = cartToLS.find(elem => elem.id === item.id)
    if (filterdCart) {
      cartToLS = cartToLS.filter(elem => {
        return elem.id !== item.id
      })
    }
    else {
      cartToLS = [...cartToLS, item]
    }
    localStorage.setItem(name, JSON.stringify(cartToLS))
    dispatch({ type: type, payload: cartToLS })
  }

  return (
    <div className='mt-10 main-container gap-8 grid grid-cols-4'>
      {
        products?.length ? products?.map((item, i) => (
          <Card cartHandler={cartHandler} key={i} item={item} />
        )) : <div>Ma'lumot mavjud emas...</div>
      }
    </div>
  )
}

export default Home