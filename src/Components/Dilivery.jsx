import React from 'react';
import diliverimg from '../assets/image/svg/package.svg'
import refresh from '../assets/image/svg/Refresh.svg'
import daimond from '../assets/image/svg/Dimond.svg'
import lock from '../assets/image/svg/Lock.svg'

const Features = () => {
    return (
        <section className='mt-12 pt-12'>
            <div className="bg-[#2B2B2B]  py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <img className='w-[10%]' src={diliverimg} alt="" />
                        <h3 className="text-sm font-semibold uppercase text-[#DFCEBC] mt-3">Free Delivery</h3>
                        <p className="text-xs mt-3 text-[#FAFAFA] w-[50%]">DHL express delivery worldwide</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className='w-[10%]' src={refresh} alt="" />
                        <h3 className="text-sm font-semibold uppercase text-[#DFCEBC] mt-3">Satisfied or Refund</h3>
                        <p className="text-xs mt-3 text-[#FAFAFA] w-[50%]">Genuine returns & refunds process</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className='w-[10%]' src={daimond} alt="" />
                        <h3 className="text-sm font-semibold uppercase text-[#DFCEBC] mt-3">Lifetime Warranty</h3>
                        <p className="text-xs mt-3 text-[#FAFAFA] w-[50%]">On discoloration & thermal shocks</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className='w-[10%]' src={lock} alt="" />
                        <h3 className="text-sm font-semibold uppercase text-[#DFCEBC] mt-3">Secure Payments</h3>
                        <p className="text-xs mt-3 text-[#FAFAFA] w-[50%]">DHL express delivery worldwide</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
