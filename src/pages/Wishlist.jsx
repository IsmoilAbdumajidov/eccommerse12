import React, { useContext } from 'react'
import ProductsMap from '../components/ProductsMap'
import { StoreContext } from '../App'

const Wishlist = () => {
  const [{ wishlist }, _] = useContext(StoreContext)
  return (
    <ProductsMap products={wishlist} type="wishlist" />
  )
}

export default Wishlist