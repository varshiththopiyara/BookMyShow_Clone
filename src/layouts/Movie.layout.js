import React from "react"

//components
import MovieNavbar from "../Navbar/movieNavbar.components";
const MovieLayout = (props) => {
return(
    <>
    <MovieNavbar/>
    
    {props.children} 
    </>
);

};

export default MovieLayout;