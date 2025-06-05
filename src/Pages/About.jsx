import React from 'react'
import Navbar from '../Components/Navbar'
// import Navbar from '../Components/Navbar'
import star from '../assets/image/svg/Star 7.svg'
import timeless from '../assets/image/svg/timeless_1.svg'
import timeless_2 from '../assets/image/svg/timeless_2.svg'
import Dilivery from '../Components/Dilivery.jsx'
import Footer from '../Components/Footer.jsx'
import Coustmer from '../Components/Coustmer.jsx'
import ourstory_1 from "../assets/image/svg/ourstory_1.svg"
import ourstory_2 from "../assets/image/svg/ourstory_2.svg"
const About = () => {
    return (
        <>
            {/* <Navbar /> */}


            {/* ================ TIMELESS GLASSWORKS =================== */}
            <section className='mt-12 pt-12'>
                <div className='my_container'>
                    <div className='flex items-center justify-center lg:justify-between flex-wrap flex-col-reverse lg:flex-row'>
                        <div className='w-12/12 sm:w-12/12 lg:w-5/12 px-[12px] text-center lg:text-start'>
                            <div>
                                <div className='flex items-center justify-center lg:justify-start gap-2'>
                                    <img src={star} alt="" />
                                    <p className='text-[20px]'>TIMELESS GLASSWORKS</p>
                                </div>
                                <p className='text-[30px] mt-3'>Artistry in Glass, <br />
                                    Elevating Your Spaces</p>
                                <p className='text-[20px] mt-4'>We specialize in creating exquisite glass basins and accessories for
                                    bathroom that blend artistry with functionality. Whether you're looking
                                    for a sleek modern touch or a unique handcrafted masterpiece, our
                                    commitment to precision and excellence ensures that every product
                                    reflects sophistication and elegance.</p>
                                <button className='bg-[#009DD9] px-[90px] py-[8px] text-white inline-block mt-8'>ABOUT US</button>
                            </div>
                        </div>
                        <div className='w-10/12 sm:w-6/12 lg:w-4/12 px-[12px] relative '>
                            <div>
                                <img className='w-full' src={timeless} alt="" />
                            </div>
                            <img className='absolute top-[20%] -left-[60%] w-[80%]' src={timeless_2} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================ Our Story =================== */}
            <section>
                <div className='my_container'>
                    <div className='flex items-end justify-between flex-wrap '>
                        <div className='w-12/12 md:w-6/12 lg:w-7/12 px-[12px] order-2 md:order-1 mt-12'>
                            <div className='flex items-end gap-6'>
                                <div>
                                    <img className='' src={ourstory_1} alt="" />
                                </div>
                                <div>
                                    <img src={ourstory_2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='w-12/12 md:w-6/12 lg:w-4/12 px-[12px] text-center md:text-start mt-12 order-1 md:order-2 '>
                            <div className='flex items-center md:items-start flex-col'>
                                <div className='flex items-center md:text-start  gap-3 '>
                                    <img src={star} alt="" />
                                    <p className='uppercase'>Our story</p>
                                </div>
                                <div>
                                    <p className='uppercase mt-5 text-[28px]'>A Passion for Glass, <br />
                                        A Legacy of Artistry</p>
                                    <p className='mt-7 text-[16px]'>Verre Gallery was founded to bring finely crafted glass art to
                                        those who appreciate elegance and quality. We work with
                                        skilled artisans and innovative designers to curate collections
                                        that reflect both classic and modern sensibilities, ensuring
                                        that every piece tells a unique story.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================ Coustmer ==================== */}
            <Coustmer />

            {/* ====================== Perfectly controlled =============== */}
            <section className='mt-12 pt-12'>
                <div className='my_container'>
                    <div className='bg-[#F8F8F8] p-[30px] '>
                        <div className='flex items-center justify-center lg:justify-between flex-wrap'>
                            <div className='md:w-12/12 lg:w-8/12 px-[12px] text-center lg:text-start'>
                                <div className='flex justify-center lg:justify-start'>
                                    <div className='hidden'>
                                        <img className='w-[70%]' src={star} alt="" />
                                    </div>
                                    <div>
                                        <p className='uppercase text-[25px]'>Perfectly controlled glass fusing and thermoforming</p>
                                        <p className='text-[14px]'>Consistency in manufacturing for more than twenty years, Proven protective packaging !</p>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-12/12 lg:w-4/12 px-[12px] text-center mt-6 lg:mt-0'>
                                <div>
                                    <button className='bg-[#009DD9] px-[40px] py-[12px] text-[20px] text-white'>MEET OUR EXPERTS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================ our newletter ============== */}
            <section className=' mt-12 pt-12'>
                <div className='my_container'>
                    <div className='text-center'>
                        <div className='flex items-center justify-center gap-4'>
                            <img src={star} alt="" />
                            <p className='text-[15px]'>SUBSCRIBE TO OUR E-MAILS</p>
                            <img src={star} alt="" />
                        </div>
                        <div>
                            <p className='text-[40px]'>OUR NEWSLETTER</p>
                            <p className='mt-2'>Be the first to know about new collections and exclusive offers.</p>
                        </div>
                        <div className='text-center flex items-center justify-center'>
                            <form action="" className='mt-7'>
                                <input className='input_newletter w-full md:w-[70%]' type="text" name="" id="" placeholder='Enter Your email' />
                                <button className='bg-[#009DD9] px-[50px] py-[9px] ms-4 mt-6 md:mt-0'>SUBSCRIBE</button>
                                <p>*By clicking 'SUBSCRIBE' you agree that you have read and understood Verre Gallery’sPrivacy Policy.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================ Delivery ==================== */}
            <Dilivery />

            {/* ================ Footer ====================== */}
            <Footer />

        </>
    )
}

export default About