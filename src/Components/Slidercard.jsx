import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";



export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // 2 seconds
        // fade: true,
    };
    return (
        <>
            <div>
                <Navbar />
                <Slider {...settings}>
                    {Array(5)
                        .fill()
                        .map((_, index) => (
                            <div key={index} className="bg_homeImg !flex flex-col justify-end custom_vh pb-[85px] m-auto">
                                <div className="my_container ">
                                    <div className=" text-center">
                                        <p className="text-[50px] font-normal text-[white] font-serif  uppercase leading-[67px] w-[70%] m-auto">
                                            Introducing Our Newest Glass Creations!
                                        </p>
                                        <p className="text-2xl font-Helvetica font-normal text-white mt-4">
                                            Elevate your space with our latest collection of premium glass
                                            basins
                                        </p>
                                        <div>
                                            <button className="3xl font-normal font-Helvetica text-white bg-[#009DD9] py-[19px] px-[78px] inline-block mt-[46px] cursor-pointer">
                                                SHOP NOW
                                            </button>
                                        </div>

                                        <p className=" text-2xl font-Helvetica font-normal text-white mt-[32px]">
                                            NEW IN
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
}