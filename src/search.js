import React, { Component } from 'react';
import RatingStars from './rating';
export default class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            star:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/220px-Five-pointed_star.svg.png"
        }
    }

    //  Search(name){
    //     {this.props.MovieList.map(element=>element.movieName).filter(el =>el.startsWith(name))}


    // } 
    render(){
       console.log(this.props)
        return(
            <div className="search">
                
                <img src=""></img>
                <input type="text" className="input" placeholder="Find movies" value={this.state.searchMovie} onChange={(event) => this.props.handleSearch(event.target.value)}></input>
                <RatingStars rate={this.props.MovieList.searchRate} handleClick={this.props.handleClick} />
                
            </div>

        )
    }}