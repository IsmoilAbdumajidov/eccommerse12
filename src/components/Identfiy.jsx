import React from 'react'
import { HiShoppingCart } from 'react-icons/hi2'
import { IoMdHeart } from 'react-icons/io'

const Identfiy = ({ Id }) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

    const isInCart = cart.find(elem => elem.id === Id)
    const isInWishlist = wishlist.find(elem => elem.id === Id)
    return (
        <div className='flex gap-2 '>
            {isInCart && <HiShoppingCart className='w-6 h-6 text-green-500' />}
            {isInWishlist && <IoMdHeart className='w-6 h-6 text-red-500' />}
        </div>
    )
}

export default Identfiy