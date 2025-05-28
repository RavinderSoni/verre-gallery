import React from 'react'
import Navbar from '../Components/Navbar'
// import Navbar from '../Components/Navbar'
import star from '../assets/image/svg/Star 7.svg'
import timeless from '../assets/image/svg/timeless_1.svg'
import timeless_2 from '../assets/image/svg/timeless_2.svg'
import Dilivery from '../Components/Dilivery.jsx'
import Footer from '../Components/Footer.jsx'
import Coustmer from '../Components/Coustmer.jsx'
const About = () => {
    return (
        <>
            <Navbar />
            {/* ------------------------------- TIMELESS GLASSWORKS ----------------------------- */}
            <div className='my_container'>
                <div className='flex items-center justify-between'>
                    <div className='w-5/12 px-[12px]'>
                        <div>
                            <div className='flex items-center gap-2'>
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
                    <div className='w-4/12 px-[12px] relative'>
                        <div>
                            <img className='w-full' src={timeless} alt="" />
                        </div>
                        <img className='absolute top-[20%] -left-[60%] w-[80%]' src={timeless_2} alt="" />
                    </div>
                </div>
            </div>
            <Dilivery />

            <Coustmer />


            <Footer />
            <h1>This is a About page</h1>
        </>
    )
}

export default About