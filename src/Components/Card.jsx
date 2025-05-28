import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import rating from "../assets/image/svg/rating.svg"

export default function Card({ img_1, img_2, img_3, img_4, heading_1, heading_2, heading_3, heading_4, description_1, price_1, price_2, price_3, price_4, rating_1, rating_2, rating_3, rating_4 }) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 1000, // 2 seconds
        // fade: true,
    };
    return (
        <>
            <div className="mt-12 pt-12">
                <div className="my_container">
                    <Slider {...settings}>
                        <div className=" w-3/12  px-[12px] h-full flex items-center justify-between">
                            <div>
                                <img src={img_1} alt="" />
                            </div>
                            <p className="uppercase text-[20px] text-black">{heading_1}</p>
                            <p className="uppercase text-[10px] text-black">{description_1}</p>
                            <p className="">{price_1}</p>
                            <div className="flex items-center">
                                <img src={rating} alt="" />
                                <p>{rating_1}</p>
                            </div>
                        </div>
                        <div className=" w-3/12  px-[12px]  h-full flex items-center justify-between ">
                            <img src={img_2} alt="" />
                            <p className="uppercase text-[20px] text-black">{heading_2}</p>
                            <p className="uppercase text-[10px] text-black">{description_1}</p>
                            <p className="">{price_2}</p>
                            <div className="flex items-center">
                                <img src={rating} alt="" />
                                <p>{rating_2}</p>
                            </div>
                        </div>
                        <div className=" w-3/12  px-[12px]  h-full flex items-center justify-between ">
                            <img src={img_3} alt="" />
                            <p className="uppercase text-[20px]">{heading_3}</p>
                            <p className="uppercase text-[10px] text-black">{description_1}</p>
                            <p className="">{price_3}</p>
                            <div className="flex items-center">
                                <img src={rating} alt="" />
                                <p>{rating_3}</p>
                            </div>
                        </div>
                        <div className=" w-3/12  px-[12px]  h-full flex items-center justify-between ">
                            <img src={img_4} alt="" />
                            <p className="uppercase text-[20px] text-black">{heading_4}</p>
                            <p className="uppercase text-[10px] text-black">{description_1}</p>
                            <p className="">{price_4}</p>
                            <div className="flex items-center">
                                <img src={rating} alt="" />
                                <p>{rating_4}</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}