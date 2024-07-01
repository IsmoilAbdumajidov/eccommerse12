import React, { useContext, useRef } from 'react'
import { GetProduct } from '../api/api'
import { StoreContext } from '../App'

const SearchingInp = () => {
    const inpRef = useRef()
    const [_, dispatch] = useContext(StoreContext)

    return (
        <div className='flex'>
            <input ref={inpRef} placeholder='Searching product...' className='sm:w-[450px] rounded-s-md rounded-e-none text-black p-2' type="text" name="" id="" />
            <button onClick={() => GetProduct({ dispatch, value: inpRef.current.value, type: "search" })} className='bg-black text-white px-6 text-sm rounded-e-md'>Searching...</button>
        </div>
    )
}

export default SearchingInp