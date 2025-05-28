import React from 'react'
import leftarrow from '../assets/image/png/Vector 618.png'
import rightaroow from '../assets/image/png/Vector 619.png'
// import logo_img from '../assets/image/svg/logo image.svg'
// import search_img from '../assets/image/svg/search+img.svg'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='bg-[#B1EAFF] py-5'>
                <div className='flex  items-center justify-center gap-5'>
                    <img className='w-3' src={leftarrow} alt="" />
                    <h1 className='text-3xl'> Exclusive Deals on all Glass Basins Collections – Don’t Miss Out!</h1>
                    <img className='w-3' src={rightaroow} alt="" />
                </div>
            </div>
            {/* <div className='my_container'>
                <div className='flex item-center justify-between py-5'>
                    <img className='w-5' src={search_img} alt="" />
                    <NavLink className='text-2xl' to='/'>Home</NavLink>
                    <NavLink className='text-2xl' to='/'>Shop</NavLink>
                    <img className='w-[40%]' src={logo_img} alt="" />
                    <NavLink className='text-2xl' to='/about'>About</NavLink>
                    <NavLink className='text-2xl' to='/Contact'>Contact</NavLink>
                </div>
            </div> */}
        </>
    )
}

export default Navbar