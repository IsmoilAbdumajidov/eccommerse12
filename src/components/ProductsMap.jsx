import React from 'react'
import Card from './Card'

const ProductsMap = ({ products, type }) => {

    return (
        <div className='mt-10 main-container gap-8 grid grid-cols-4'>
            {
                products?.length ? products?.map((item, i) => (
                    <Card key={i} item={item} type={type} />
                )) : <div>Ma'lumot mavjud emas...</div>
            }
        </div>
    )
}

export default ProductsMap