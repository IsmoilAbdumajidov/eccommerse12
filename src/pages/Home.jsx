import React, { useContext, useEffect, useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi2';
import { IoIosStar, IoMdHeart } from "react-icons/io";
import { GetProduct } from '../api/api';
import { StoreContext } from '../App';
import Card from '../components/Card';
import ProductsMap from '../components/ProductsMap';
const Home = () => {
  const [{ products }, dispatch] = useContext(StoreContext)
  useEffect(() => {
    GetProduct({ dispatch, type: "def" })
  }, [])



  return (
    <ProductsMap products={products} />
  )
}

export default Home