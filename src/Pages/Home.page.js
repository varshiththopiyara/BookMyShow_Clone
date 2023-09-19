import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.components";
import  Premier from "../components/Premier/Premier.components";
import PosterSlider from "../components/PosterSlider/PosterSlider.components";
import TempPosters from "../Config/TempPosters.config";
const Homepage=() => {
return( 
    <>
    <div className="flex flex-col gap-10">
    <div className="container mx-auto px-4">
            <Premier/>
        </div>
    
    <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 py-3">
            The Best Of Entertainment
        </h1>
    <EntertainmentCardSlider/>
   
    </div>
    <div className="bg-navcol-200 py-16 px-16">
        
        <div className="container mx-auto px-4">
        <div className="flex">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt="Premiere" className="w-full h-full "/>
        </div>
            <PosterSlider images={TempPosters} title="Premiers" subtitle="Brand New Releases Every Friday" isDark/>
        </div>
    </div>
    </div>
    <div className="container mx-auto px-4 py-3">
    <PosterSlider
    images={TempPosters}
    title="online Streaming Events" 
    isDark={false}
    />
    </div>
    <div className="container mx-auto px-4 py-3">
    <PosterSlider
    images={TempPosters}
    title="Outdoor Events" 
    isDark={false}
    />
    </div>
    </>

)

}

export default Homepage;