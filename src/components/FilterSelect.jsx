import React, { useContext, useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { GetCategoryList, GetProduct } from '../api/api';
import { StoreContext } from '../App';
const url = "https://dummyjson.com/products/categories"
const FilterSelect = () => {
    const [_, dispatch] = useContext(StoreContext)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        GetCategoryList({ setCategories })
    }, [])

    return (
        <div className='bg-black gap-3 rounded-md px-3 py-2 flex items-center'>
            <div>
                <FaBars />
            </div>
            <select onChange={(e) => GetProduct({ dispatch, value: e.target.value, type: "filter" })} className='bg-transparent py-0 px-3 rounded-none border-0' name="" id="">
                {categories?.length && categories?.map((item, i) => (
                    <option key={i} className='text-black' value={item.slug}>{item.name}</option>
                ))
                }
            </select>
        </div>
    )
}

export default FilterSelect