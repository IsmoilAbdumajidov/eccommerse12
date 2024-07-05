import React, { useContext } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { IoIosStar, IoMdHeartEmpty } from 'react-icons/io'
import Identfiy from './Identfiy'
import { StoreContext } from '../App'
import { cartHandler } from '../utils/cartHandler'
import { IoTrashOutline } from "react-icons/io5";

const Card = ({ item, type }) => {
    const [_, dispatch] = useContext(StoreContext)
    return (
        <div className='shadow flex flex-col rounded-md hover:shadow-md transition-all'>
            <div className='aspect-[5/3] relative group'>
                <img className='w-full select-none h-full object-cover object-center' src={item.thumbnail} alt="" />
                <div className='absolute bottom-2 right-2'>
                    <Identfiy Id={item.id} />
                </div>
            </div>
            <div className='flex flex-col h-full flex-1 p-3 gap-2'>
                <h1 className='font-medium text-2xl'>{item.title}</h1>
                <div className='font-medium'>
                    <span className='text-red-500 line-through'>${item.price}</span>
                    <span className='font-normal text-xs'>(-{item.discountPercentage}%)</span>
                    <span className='text-green-500 ms-4'>${(item.price * (100 - item.discountPercentage) / 100).toFixed(2)}</span>
                </div>
                <div className='mt-auto flex flex-col  justify-between'>
                    <div className='text-gray-400 font-medium text-sm'>Quantity: <span className='text-black font-normal'>{item.stock}</span></div>
                    <div className='text-orange-400 flex items-center gap-2'>
                        <span><IoIosStar className='w-5 h-5' /></span>
                        <span>({item.rating})</span>
                    </div>
                    <div className='flex gap-3 mt-3'>
                        <button onClick={() => cartHandler(item, "CART", "cart", dispatch)} className='bg-green-500 py-2 flex flex-1 justify-center rounded-md items-center text-white'>
                            <HiOutlineShoppingCart className='w-6 h-6  text-white' />
                            <span>Buy</span>
                        </button>
                        <button onClick={() => cartHandler(item, "WISHLIST", "wishlist", dispatch)} className='bg-red-500 p-2 rounded-md flex items-center text-white'>
                            {type === "wishlist" ? <IoTrashOutline className='w-5 h-5 text-white' /> : <IoMdHeartEmpty className='w-6 h-6 text-white' />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card