import React from 'react'
import blue_line from '../assets/image/png/blue_line.png'
import blue_star from '../assets/image/svg/Groupblue_Star.svg'
import ellipse_1 from '../assets/image/svg/Ellipse 16.svg'
import star from '../assets/image/svg/Star 7.svg'
const Coustmer = () => {
    return (
        <>
            <section className='mt-12 pt-12'>
                <div className='my_container'>
                    <div className='text-center'>
                        <p className='text-[60px]'>Hear from Our Satisfied Customers</p>
                    </div>
                    <div className='flex items-center justify-center lg:justify-between flex-wrap mt-12'>
                        <div className='w-11/12 sm:w-6/12 lg:w-3/12 px-[12px]'>
                            <p>"I was blown away by the quality and
                                elegance of my glass basin. It’s the perfect
                                center piece for my bathroom, and the
                                craftsmanship is outstanding!"</p>
                            <img className='w-full mt-[40px]' src={blue_line} alt="" />
                            <div className='flex items-center justify-between mt-[20px]'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-[30%]' src={ellipse_1} alt="" />
                                    <p className='text-[20px]'>Emily R.</p>
                                </div>
                                <div className='flex items-end justify-end'>
                                    <img className='w-[60%]' src={blue_star} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='lg:block hidden'>
                            <img className='w-[70%]' src={star} alt="" />
                        </div>
                        <div className='w-11/12 sm:w-6/12 lg:w-3/12 px-[12px] mt-19  sm:mt-0'>
                            <p>"The glass countertop exceeded my
                                expectations! It’s durable, easy to maintain,
                                and adds a modern touch to my kitchen.
                                Highly recommended!"</p>
                            <img className='w-full mt-[40px]' src={blue_line} alt="" />
                            <div className='flex items-center justify-between mt-[20px]'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-[30%]' src={ellipse_1} alt="" />
                                    <p className='text-[20px]'>Daniel K.</p>
                                </div>
                                <div className='flex items-end justify-end'>
                                    <img className='w-[60%]' src={blue_star} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='lg:block hidden'>
                            <img className='w-[70%]' src={star} alt="" />
                        </div>
                        <div className='w-11/12 sm:w-6/12 lg:w-3/12 px-[12px] mt-19 lg:mt-0'>
                            <p>"From ordering to installation, the entire
                                experience was seamless. The basin is
                                stunning, and the customer service
                                was top-notch!"</p>
                            <img className='w-full mt-[40px]' src={blue_line} alt="" />
                            <div className='flex items-center justify-between mt-[20px]'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-[30%]' src={ellipse_1} alt="" />
                                    <p className='text-[20px]'>Melissa W.</p>
                                </div>
                                <div className='flex items-end justify-end'>
                                    <img className='w-[60%]' src={blue_star} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-12'>
                        <button className='uppercase inline-block border-3 border-[#009DD9] px-[70px] py-[12px]'>View All</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Coustmer