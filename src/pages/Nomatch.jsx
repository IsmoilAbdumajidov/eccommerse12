import React from 'react'
import { useNavigate } from 'react-router-dom'
import notFound from "../../public/404 Error with a cute animal-bro.png"

const Nomatch = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex flex-col justify-center items-center min-h-[80vh]  gap-4'>
                <img className='w-full md:w-[500px]' src={notFound} alt="" />
                <h1 className='text-3xl font-bold'>Bunday sahifa topilmadi...</h1>
                <button className='bg-blue-500 w-max px-3 py-2 rounded text-white' onClick={() => navigate(-1)}>Ortga qaytish</button>
            </div>
        </div>
    )
}

export default Nomatch