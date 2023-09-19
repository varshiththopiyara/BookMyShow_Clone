import React from "react";
import {Route,Routes} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Layout



//component
import Temp from "./components/temp"


//Pages
import Homepage from "./Pages/Home.page";
import Movie from "./Pages/Movie.page";


// import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DefaultLayout from "./layouts/Default.layout";

function App() {
  return (
    <> 
    <Routes><Route/></Routes>
      <DefaultHOC path="/" exact component ={Temp}/>
      <MovieHOC path="/movie/:id" exact  component={Movie}/>
      <DefaultLayout/>
      <Homepage/>
      

      
    </>
  );
} 
export default App;
