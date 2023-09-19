import React from "react";
import HeroSlider from "react-slick";

//component
import { NextArrow, PrevArrow } from "./Arrow.components";

// import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {

    const settingsLg = {
        arrows:true,
        autoplay:true,
        centerMode:true,
        slidesToShow:1,
        slidesToScroll:1,
        centerPadding:"300px",
        infinite:true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    }
    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };

      const images = [
        "https://images.unsplash.com/photo-1694845481810-53aba757a6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1682695798256-28a674122872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://plus.unsplash.com/premium_photo-1663840297123-29164230cc9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1694823925781-61293d74cace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      ];

      return (
        <>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
            {
                images.map((image)=> (
                    <div className="w-full  h-64 md:h-80 py-3">
                        <img src = {image} alt="testing" className="w-full h-full rounded"/>
                    </div>
                ))
            }
        </HeroSlider>

        </div>
        <div className="hidden lg:block">
            <HeroSlider {...settingsLg}>
            {
                images.map((image)=> (
                    <div className="w-full h-96 px-2 py-3">
                        <img src = {image} alt="testing" className="w-full h-full rounded"/>
                    </div>
                ))
            }
            </HeroSlider>

        </div>
        </>
      )
}

export default HeroCarousel;