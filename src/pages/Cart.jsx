import React, { useContext } from 'react'
import { StoreContext } from '../App'
import Identfiy from '../components/Identfiy'
import { IoIosStar, IoMdHeartEmpty } from 'react-icons/io'
import { cartHandler } from '../utils/cartHandler'
import { IoTrashOutline } from 'react-icons/io5'
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from 'react-icons/ai'
import { toast } from 'react-toastify'

const Cart = () => {
  const [{ cart }, dispatch] = useContext(StoreContext)
  const countHandler = (item, type) => {
    let cartToLS = JSON.parse(localStorage.getItem("cart")) || []
    cartToLS.find(elem => {
      if (elem.id === item.id && type === "plus") {
        elem.count += 1
        if (elem.count > elem.stock) {
          elem.count = elem.stock
          toast.error("Limited quantitiy")
        }
      }
      else if (elem.id === item.id && type === "minus") {
        elem.count -= 1
        if (elem.count <= 0) {
          elem.count = 1
        }
      }
    })
    localStorage.setItem("cart", JSON.stringify(cartToLS))
    dispatch({ type: "CART", payload: cartToLS })
  }
  
  let allPrice = 0
  cart.map(item => {
    allPrice += item.price.toFixed(2) * item.count
  })
  return (
    <div className='grid grid-cols-3 gap-5 main-container py-5'>
      <div className='flex flex-col  border p-4 col-span-2 rounded-md'>
        {
          cart.length ? cart.map((item, i) => (
            <div key={i} className=' flex flex-col py-4 gap-7 sm:flex-row border-b'>
              <div className='w-40 h-40 relative group'>
                <img className='w-full select-none rounded-lg h-full object-cover object-center' src={item.thumbnail} alt="" />
                <div className='absolute bottom-2 right-2'>
                  <Identfiy Id={item.id} />
                </div>
              </div>
              <div className='flex flex-col h-full flex-1 p-3 gap-2'>
                <h1 className='font-semibold text-2xl'>{item.title}</h1>
                <div className='font-medium'>
                  <span className='text-red-500 line-through'>${item.price}</span>
                  <span className='font-normal text-xs'>(-{item.discountPercentage}%)</span>
                  <span className='text-green-500 ms-4'>${(item.price * (100 - item.discountPercentage) / 100).toFixed(2)}</span>
                </div>
                <div className='text-gray-400 font-medium text-sm'>Quantity: <span className='text-black font-normal'>{item.stock}</span></div>
                <div className='flex gap-5'>
                  <div >
                    <div className='text-sm font-light mb-1'>Price</div>
                    <div className='text-red-500 font-bold'>${(item.price * (100 - item.discountPercentage) / 100).toFixed(2)}</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-sm font-light mb-1'>Count</div>
                    <div className='flex w-28 border px-1 rounded items-center justify-between'>
                      <button onClick={() => countHandler(item, "minus")}><AiOutlineMinus className='w-6 h-6 text-red-500' /></button>
                      <div>{item.count}</div>
                      <button onClick={() => countHandler(item, "plus")}>
                        <FiPlus className='w-6 h-6 text-green-500' />
                      </button>
                    </div>
                  </div>
                  <div >
                    <div className='text-sm font-light mb-1'>All price</div>
                    <div className='text-green-500 font-bold'>${(item.count * item.price * (100 - item.discountPercentage) / 100).toFixed(2)}</div>
                  </div>
                </div>
                <div className='mt-auto flex   justify-between'>
                  <div className='text-orange-400 flex items-center gap-2'>
                    <span><IoIosStar className='w-5 h-5' /></span>
                    <span>({item.rating})</span>
                  </div>
                  <div className='flex gap-3 mt-3'>
                    <button onClick={() => cartHandler(item, "CART", "cart", dispatch)} className='bg-black p-1 rounded-md  text-white'>
                      <IoTrashOutline className='w-5 h-5 text-white' />
                    </button>
                    <button onClick={() => cartHandler(item, "WISHLIST", "wishlist", dispatch)} className='bg-red-500 p-1 rounded-md text-white'>
                      <IoMdHeartEmpty className='w-5 h-5 text-white' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )) : <div>Ma'lumot mavjud emas...</div>
        }
      </div>
      <div className='col-span-1 flex flex-col  border p-4 rounded-md'>
        <h1 className='text-lg font-semibold'>Your Order</h1>
        <div>
          <div className='flex justify-between'>
            <div>Products:</div>
            <div className='text-green-500 text-xl'>${allPrice.toFixed(2)}</div>
          </div>
          <div className='flex justify-between'>
            <div>Products count:</div>
            <div className='text-green-500'>{cart.length}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart