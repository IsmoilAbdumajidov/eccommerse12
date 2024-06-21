import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex main-container justify-between h-[70px] items-center '>
            <Link to={'/'} className='text-3xl font-medium'><span className='text-blue-500'>Ecom</span><span>merse</span></Link>
            <ul className='flex items-center gap-6'>
                <li>
                    <Link className='hover:text-blue-500 transition-all'>Home</Link>
                </li>
                <li>
                    <Link className='hover:text-blue-500 transition-all'>Shopping</Link>
                </li>
                <li>
                    <Link className='hover:text-blue-500 transition-all'>Pages</Link>
                </li>
                <li>
                    <Link className='hover:text-blue-500 transition-all'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar