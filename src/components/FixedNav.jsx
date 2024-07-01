import React, { useContext } from 'react'
import FilterSelect from './FilterSelect'
import SearchingInp from './SearchingInp'
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineHome } from "react-icons/ai";
import { StoreContext } from '../App';





const FixedNav = () => {
    const [state, _] = useContext(StoreContext)
    return (
        <div className=' bg-blue-500 text-white sticky -top-1 left-0 z-50'>
            <div className="main-container h-[60px] flex justify-between items-center">
                <FilterSelect />
                <SearchingInp />
                <div className='flex items-center gap-6 text-xs'>
                    <div className='flex relative flex-col items-center justify-center'>
                        <IoMdHeartEmpty className='w-7 h-7' />
                        <span>Wish list</span>
                        <div className='absolute top-0 right-1 bg-black flex items-center justify-center w-4 h-4 text-white rounded-full'>{state.wishlist.length}</div>
                    </div>
                    <div className='flex relative flex-col items-center justify-center'>
                        <HiOutlineShoppingCart className='w-7 h-7' />
                        <span>Cart</span>
                        <div className='absolute top-0 right-0 bg-black flex items-center justify-center w-4 h-4 text-white rounded-full'>{state.cart.length}</div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <AiOutlineHome className='w-7 h-7' />
                        <span>Home</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixedNav