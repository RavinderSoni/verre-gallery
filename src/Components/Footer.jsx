import React from 'react'
import logo_img from '../assets/image/svg/logo image.svg'
import facebook from '../assets/image/svg/facebook.svg'
import instagram from '../assets/image/svg/instagram.svg'
import youtube from '../assets/image/svg/youtube.svg'
import xwitter from '../assets/image/svg/x_logo.svg.svg'
import footer from '../assets/image/svg/footer.svg'
import footer_flag from '../assets/image/svg/Group 4291.svg'

const Footer = () => {
    return (
        <>
            <section className='py-[60px]'>
                <div className='my_container'>
                    <div className='flex justify-between flex-wrap'>
                        <div className='w-3/12 px-3' >
                            <div>
                                <img className='w-full' src={logo_img} alt="" />
                            </div>
                            <div className='flex items-center gap-5 mt-8'>
                                <img className='w-[8%]' src={facebook} alt="" />
                                <img className='w-[8%]' src={instagram} alt="" />
                                <img className='w-[8%]' src={youtube} alt="" />
                                <img className='w-[8%]' src={xwitter} alt="" />
                            </div>
                            <div className='mt-9'>
                                <p className='text-1xl font-medium'>PHONE:</p>
                                <p className='mt-2 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>+1 888 414-4022 opt. 2</p>
                            </div>
                            <div className='mt-6'>
                                <p className='text-1xl font-medium'>EMAIL:</p>
                                <p className='mt-2 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>info@renaissanceglassworks.com</p>
                            </div>
                            <div className='mt-6'>
                                <p className='text-1xl font-medium'>BUSINESS HOURS:</p>
                                <p className='mt-2 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Monday - Friday <br /> 8:00am - 5:00pm EST</p>
                            </div>
                        </div>
                        <div className='w-2/12 px-3'>
                            <div className=''>
                                <p className='text-2xl  font-medium'>SHOP BY CATEGORY</p>
                                <p className='mt-8 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Basin</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Pedestal</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Undermount</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Drop-In</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Custom</p>
                            </div>
                        </div>
                        <div className='w-2/12 px-3'>
                            <div>
                                <p className='text-2xl font-medium'>QUICK LINKS</p>
                                <p className='mt-8 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>About</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Orders</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Returns & Refunds</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Warranty Policy</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Shipping Policy</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Privacy Policy</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Terms & Conditions</p>
                            </div>
                        </div>
                        <div className='w-3/12 px-3'>
                            <div>
                                <p className='text-2xl font-medium'>ADDRESS</p>
                                <p className='mt-8 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Manufacturing Plant:</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Montreal, (Québec) Canada, H1E 4M1</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>US Distribution Center:</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Champlain NY 12919 USA</p>
                                <p className='mt-5 text-1xl text-[#6D6D6D] font-medium cursor-pointer'>Shipping Policy</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 flex items-center justify-between'>
                        <div className='w-4/12'>
                            <img src={footer_flag} alt="" />

                        </div>
                        <div className='w-4/12'>
                            <p>© 2025 - VERRE GALLERY by Renaissance Glassworks Inc.</p>

                        </div>
                        <div className='w-4/12'>
                            <img src={footer} alt="" />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer