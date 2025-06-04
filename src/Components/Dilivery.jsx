import React from 'react';
import diliverimg from '../assets/image/svg/package.svg'
import refresh from '../assets/image/svg/Refresh.svg'
import daimond from '../assets/image/svg/Dimond.svg'
import lock from '../assets/image/svg/Lock.svg'

const Features = () => {
    return (
        <section className='mt-12 pt-12'>
            <div className="bg-[#2B2B2B]  py-10">
                <div className="my_container">
                    <div className='flex items-center justify-between flex-wrap'>
                        <div className="w-12/12 sm:w-6/12 lg:w-3/12  px-[12px] flex items-center justify-content-center flex-col ">
                            <img className='w-[10%]' src={diliverimg} alt="" />
                            <h3 className="text-sm font-semibold uppercase text-[#DFCEBC] mt-3">Free Delivery</h3>
                            <p className="text-xs mt-3 text-[#FAFAFA] ">DHL express delivery worldwide</p>
                        </div>
                        <div className="w-12/12 sm:w-6/12 lg:w-3/12  px-[12px] mt-12 sm:mt-0 flex items-center justify-content-center flex-col">
                            <img className='w-[10%]' src={refresh} alt="" />
                            <h3 className="text-sm font-semibold uppercase text-[#DFCEBC] mt-3">Satisfied or Refund</h3>
                            <p className="text-xs mt-3 text-[#FAFAFA] ">Genuine returns & refunds process</p>
                        </div>
                        <div className="w-12/12 sm:w-6/12 lg:w-3/12 px-[12px] mt-12 lg:mt-0 flex items-center justify-content-center flex-col">
                            <img className='w-[10%]' src={daimond} alt="" />
                            <h3 className="text-sm font-semibold uppercase text-[#DFCEBC] mt-3">Lifetime Warranty</h3>
                            <p className="text-xs mt-3 text-[#FAFAFA] ">On discoloration & thermal shocks</p>
                        </div>
                        <div className="w-12/12 sm:w-6/12 lg:w-3/12  px-[12px] mt-12 lg:mt-0 flex items-center justify-content-center flex-col">
                            <img className='w-[10%]' src={lock} alt="" />
                            <h3 className="text-sm font-semibold uppercase text-[#DFCEBC] mt-3">Secure Payments</h3>
                            <p className="text-xs mt-3 text-[#FAFAFA] ">DHL express delivery worldwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
