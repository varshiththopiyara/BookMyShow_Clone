import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/Poster.components";

//config
import settings from "../../Config/PosterCarousel.config";

//images
import PremierImages from "../../Config/TempPosters.config";


export const Premier =()=>{
    
    return (
        <>
        <div className="flex flex-col items-start ">
            <h3 className="text-white text-xl font-bold">Premieres</h3>
            <p className="text-white text-sm">Brand new release every Friday</p>
        </div>
        <Slider {...settings}>
            {PremierImages.map((image)=> (
                <Poster {...image} isDark />
            ))}

        </Slider>
        </>
    )

}
export default Premier;