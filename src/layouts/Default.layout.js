import React from "react"

//components
import Navbar from "../../src/Navbar/Navbar.components.js";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.components.js";

const DefaultLayout = (props) => {
return(
    <>
    <Navbar/>
    <HeroCarousel/>
    {props.children} 
    </>
);

};

export default DefaultLayout;