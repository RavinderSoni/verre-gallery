import React from 'react'
// import Navbar from '../Components/Navbar'
import Card from '../Components/Card';
import Dilivery from '../Components/Dilivery';
import Footer from '../Components/Footer';
import feature_img from '../assets/image/svg/Feature_img.svg'
import star from '../assets/image/svg/Star 7.svg'
import Dare_1 from '../assets/image/svg/Dare_1.svg'
import Dare_2 from '../assets/image/svg/Dare_2.svg'
import Dare_3 from '../assets/image/svg/Dare_3.svg'
import Dare_4 from "../assets/image/svg/Dare_4.svg"
import Dare_5 from "../assets/image/svg/Dare_5.svg"
import timeless from '../assets/image/svg/timeless_1.svg'
import timeless_2 from '../assets/image/svg/timeless_2.svg'

import catalogues_1 from '../assets/image/svg/Catalogues_1.svg'
import catalogues_2 from '../assets/image/svg/Catalogues_2.svg'
import catalogues_3 from '../assets/image/svg/Catalogues_3.svg'
import catalogues_4 from '../assets/image/svg/Catalogues_4.svg'
import Slidercard from '../Components/Slidercard.jsx'
import Coustmer from '../Components/Coustmer.jsx';
import img_1 from '../assets/image/svg/Group 4380.svg'
import img_2 from '../assets/image/svg/Group 4381.svg'
import img_3 from '../assets/image/svg/Group 4382.svg'
import img_4 from '../assets/image/svg/Group 4383.svg'



const Home = () => {
  return (
    <>
      <Slidercard />
      {/* ------------------- slider -------------------- */}
      <Card
        img_1={img_1}
        img_2={img_2}
        img_3={img_3}
        img_4={img_4}
        heading_1="Small Round Basin - squared to wall on small pedestal"
        heading_2="ROUND Basin - on small pedestal with wrought iron support"
        heading_3="Large Round Basin - on small pedestal"
        heading_4="Large Basin - on small pedestal"
        description_1='LAS121'
        price_1='$ 3,995.00'
        price_2='$ 5,495.00'
        price_3='$ 4,495.00'
        price_4='$ 3,995.00'
        rating_1='12.9k'
        rating_2='6.8k'
        rating_3='4.8k'
        rating_4='8.5k'
      />







      {/* ----------------------------- dare to dream, we do the rest -------------------------- */}
      <section className='mt-12 pt-12'>
        <div className='my_container'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
              <img className='w-[10%]' src={star} alt="" />
              <p className='text-[20px] uppercase underline'>Shop Now</p>
              <img className='w-[10%]' src={star} alt="" />
            </div>
            <div>
              <p className='text-[50px] uppercase font-serif '>dare to dream, we do the rest</p>
            </div>
            <div className='flex items-center gap-5'>
              <img className='w-[10%]' src={star} alt="" />
              <p className='text-[20px] uppercase'>Shop Now</p>
              <img className='w-[10%]' src={star} alt="" />
            </div>
          </div>
        </div>
        <div className='flex  items-center  mt-12'>
          <div className='relative'>
            <img src={Dare_1} alt="" />
            <div className='absolute bottom-[10%] left-[10%]'>
              <p className='text-white  font-serif'>BASIN</p>
              <button className='bg-[#009DD9] py-[8px] px-[40px] uppercase mt-3 text-[white]'>View Products</button>
            </div>
          </div>
          <div className='relative'>
            <img src={Dare_2} alt="" />
            <div className='absolute bottom-[10%] left-[10%]'>
              <p className='text-white  font-serif text-[20px] font-normal'>PEDESTAL</p>
              <button className='bg-[#009DD9] py-[8px] px-[40px] uppercase mt-3  text-[white]'>View Products</button>
            </div>
          </div>
          <div className='relative'>
            <img src={Dare_3} alt="" />
            <div className='absolute bottom-[10%] left-[10%]'>
              <p className='text-white  font-serif text-[20px] font-normal'>UNDERMOUNT</p>
              <button className='bg-[#009DD9] py-[8px] px-[40px] uppercase mt-3  text-[white]'>View Products</button>
            </div>
          </div>
          <div className='relative'>
            <img src={Dare_4} alt="" />
            <div className='absolute bottom-[10%] left-[10%]'>
              <p className='text-white  font-serif text-[20px] font-normal'>DROP-IN</p>
              <button className='bg-[#009DD9] py-[8px] px-[40px] uppercase mt-3  text-[white]'>View Products</button>
            </div>
          </div>
          <div className='relative'>
            <img src={Dare_5} alt="" />
            <div className='absolute bottom-[10%] left-[10%]'>
              <p className='text-white text-[20px] font-normal'>CUSTOM</p>
              <button className='bg-[#009DD9] py-[8px] px-[40px] uppercase mt-3  text-[white]'>View Products</button>
            </div>
          </div>
        </div>
      </section>
        {/* <div className='Dare_1 flex items-end  h-full '>
            <div>
              <p className='text-white'>BASIN</p>
              <button className='bg-[#009DD9] py-[8px] px-[40px] uppercase'>View Products</button>
            </div>
          </div> */}

      {/* ------------------------------- TIMELESS GLASSWORKS ----------------------------- */}
      <section className='mt-12 pt-12'>
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
      </section>
      {/* -------------------------- OUR CATALOGUES---------------------- */}
      <section className='mt-12 pt-12'>
        <div className='my_container'>
          <div className='flex items-center justify-between'>
            <div className='w-4/12 px-[12px]'>
              <div>
                <img src={catalogues_1} alt="" />
              </div>
              <div className='mt-10'>
                <img src={catalogues_2} alt="" />
              </div>
            </div>
            <div className='w-4/12 px-[12px]'>
              <div className='flex items-center justify-center flex-col text-center'>
                <div className='flex items-center gap-6'>
                  <img className='w-[10%]' src={star} alt="" />
                  <p className='text-[20px]'>OUR CATALOGUES</p>
                  <img className='w-[10%]' src={star} alt="" />
                </div>
                <p className='text-[50px]'>The Regal Work Of
                  Glass Masterpieces</p>
                <p className='text-[20px] mt-4'>Indulge in the finest selection of luxurious glass
                  basins and accessories and more.
                  Crafted for elegance, designed for royalty.</p>
                <button className='bg-[#009DD9] py-[10px] px-[80px] text-white inline-block mt-9'>EXPLORE</button>
              </div>
            </div>
            <div className='w-4/12 px-[12px]'>
              <div>
                <img src={catalogues_3} alt="" />
              </div>
              <div className='mt-10'>
                <img src={catalogues_4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- Future section -------------------------------- */}
      <section className='mt-12 pt-12'>
        <div className='future_bg'>
          <div className='my_container'>
            <div className='w-6/12 px-[12px]'>
              <h1 className='text-white text-[30px] uppercase'>Featured Product</h1>
              <p className='text-white'>"Elegant Basin & Countertop Glassworks – Crafted for Style & Durability"</p>
            </div>
            <div className='flex items-center justify-between mt-[50px]'>
              <div className='w-6/12 px-[12px]'>
                <img className='w-[100%]' src={feature_img} alt="" />
              </div>
              <div className='w-6/12 px-[12px] text-center'>
                <h1 className='text-white text-[50px]'>PURE transition</h1>
                <p className='text-white mt-4'>VERRE Gallery</p>
                <button className='uppercase bg-white py-[10px] px-[100px] mt-5'>Explore All</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Coustmer />
      {/* -------------- Perfectly controlled ----------------------- */}
      <section className='mt-12 pt-12'>
        <div className='my_container'>
          <div className='bg-[#F8F8F8] p-[20px]'>
            <div className='flex items-center justify-between'>
              <div className='w-8/12 px-[12px]'>
                <div className='flex'>
                  <div>
                    <img className='w-[70%]' src={star} alt="" />
                  </div>
                  <div>
                    <p className='uppercase text-[25px]'>Perfectly controlled glass fusing and thermoforming</p>
                    <p className='text-[14px]'>Consistency in manufacturing for more than twenty years, Proven protective packaging !</p>
                  </div>
                </div>
              </div>
              <div className='w-3/12 px-[12px]'>
                <div>
                  <button className='bg-[#009DD9] px-[60px] py-[12px] text-[20px] text-white'>MEET OUR EXPERTS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ------------------ our newletter -------------------- */}
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
              <form action="" className='mt-7'>
                <input className='input_newletter' type="text" name="" id="" placeholder='Enter Your email' />
                <button className='bg-[#009DD9] px-[50px] py-[9px] ms-4'>SUBSCRIBE</button>
              </form>
              <p>*By clicking 'SUBSCRIBE' you agree that you have read and understood Verre Gallery’sPrivacy Policy.</p>
            </div>

          </div>

        </div>
      </section>



      <Dilivery />
      <Footer />
    </>
  )
}

export default Home