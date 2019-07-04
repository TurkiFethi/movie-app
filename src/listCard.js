import React, { Component } from "react";
import RatingStars from "./rating";
import AddMovie from "./addMovie";
import PopUp from "./popUp";
function ListCard(props) {
  console.log(props.MovieList.searchMovie)
  return (
    
    <div className="movie-card">
      {props.MovieList.tabMovieList
      .filter(el =>(el.movieName.toUpperCase().startsWith(props.MovieList.searchMovie.toUpperCase()))&&(props.MovieList.searchRate==0||el.rating==props.MovieList.searchRate))
      .map((el, i) => (
        <div className="card">
          <RatingStars rate={el.rating} />
          
          
          <img className="image" src={el.movieImage} />
          <div className="description border">
            <a className="name_film" href="#">
              {el.movieName}
              
            </a>
            <p className="description_film">{el.movieName}</p>
            <p className="description_film">{el.movieDuration}</p>
            <p className="description_film">{el.movieType}</p>
          </div>
        </div>
      ))}

      <AddMovie modal={props.modal}/>
    </div>
  );
}
export default ListCard;
