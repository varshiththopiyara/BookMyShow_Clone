import React from "react";
import { Route, Routes } from "react-router-dom";
// import Movie from "../Pages/Movie.page";

//Layouts
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ component:Component, ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
      <Routes>
        <Route
          {...rest}
          component={(props) => (
            <MovieLayout>
                {/* <Movie/> */}
              <Component {...props} />
            </MovieLayout>
          )
        }
        />
      </Routes>
    </>
  );
};

export default MovieHOC;
