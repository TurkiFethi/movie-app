import React from "react";
import "./App.css";
import Search from "./search";
import ListCard from "./listCard";
import PopUp from "./popUp";
import RatingStars from "./rating";


class App extends React.Component {
  state = {
    isVisible : false,
    tabMovieList:  [

      {
        movieImage:
          "//images.adrise.tv/WaPr3WeXbtZ1r8atGnzRgJdnBQ0=/400x574/smart/img.adrise.tv/3a644ce1-91f9-4047-a586-c652442d0198.jpg",
        movieName: "The Nut Job (2014)",
        movieDuration: "1 hr 25 min",
        movieType: "Adventure, Animation, Comedy",
        rating:3
      },
      {
        movieImage:
          "//images.adrise.tv/DzJAwM0ezmLPo_Xn25s-eGd5qv0=/400x574/smart/img.adrise.tv/abbe7c37-2d92-46b4-99c7-7ec65e1a32cc.jpg",
        movieName: "Secrets (2017)",
        movieDuration: "1 hr 51 min",
        movieType: "Drama, Romance",
        rating:3
      },
      {
        movieImage:
          "//images.adrise.tv/NEZNIBjoQr8QkX8YoY-krs9akGU=/400x574/smart/img.adrise.tv/c413027b-10f5-4e5b-b83c-d2f7aee063ed.png",
        movieName: "Streets (2010)",
        movieDuration: "1 hr 28 min",
        movieType: "Drama, Crime",
        rating:3
      },
      {
        movieImage:
          "//images.adrise.tv/6VYifPzj6ymcdkKkoVavQTKrenQ=/400x574/smart/img.adrise.tv/5b5bbe41-36a2-4af8-a871-dd4732a75794.jpg",
        movieName: "Blunted House",
        movieDuration: "1 hr 30 min",
        movieType: "Comedy",
        rating:1
      },
      {
        movieImage:
          "//images.adrise.tv/6VYifPzj6ymcdkKkoVavQTKrenQ=/400x574/smart/img.adrise.tv/5b5bbe41-36a2-4af8-a871-dd4732a75794.jpg",
        movieName: "Blunted House",
        movieDuration: "1 hr 30 min",
        movieType: "Comedy",
        rating:5
      },
      {
        movieImage:
          "//images.adrise.tv/6VYifPzj6ymcdkKkoVavQTKrenQ=/400x574/smart/img.adrise.tv/5b5bbe41-36a2-4af8-a871-dd4732a75794.jpg",
        movieName: "Blunted House",
        movieDuration: "1 hr 30 min",
        movieType: "Comedy",
        rating:4
      },
      {
        movieImage:
          "//images.adrise.tv/6VYifPzj6ymcdkKkoVavQTKrenQ=/400x574/smart/img.adrise.tv/5b5bbe41-36a2-4af8-a871-dd4732a75794.jpg",
        movieName: "Blunted House",
        movieDuration: "1 hr 30 min",
        movieType: "Comedy",
        rating:3
      },
      {
        movieImage:
          "//images.adrise.tv/6VYifPzj6ymcdkKkoVavQTKrenQ=/400x574/smart/img.adrise.tv/5b5bbe41-36a2-4af8-a871-dd4732a75794.jpg",
        movieName: "Blunted House",
        movieDuration: "1 hr 30 min",
        movieType: "Comedy",
        rating:2
      }
    ],
    searchRate:0,
    searchMovie: ""

  }
  modal = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  addNewMovie = (newMovie) => {
    this.setState({
      tabMovieList: this.state.tabMovieList.concat(newMovie)
    })
  }
  


  changeSearch = (searched) => {
    this.setState({
      searchMovie:searched
    })
   // {this.state.tabMovieList.map(element=>element.movieName).filter(el =>el.startsWith("The"))}
  }
  

  handleRating = (newRating) => {
    this.setState({
      searchRate:newRating
    })
  }
  

  render() {
    return (
      <div className="body">
        <div>
        <Search MovieList={this.state} handleSearch={this.changeSearch} handleClick={this.handleRating} />
        
        <ListCard MovieList={this.state} modal={this.modal}   searchRate={this.state.searchRate}/>
        
        </div>
        <div style={{ position:'relative'}}>
        <PopUp isVisible={this.state.isVisible} modal={this.modal} addMovie={this.addNewMovie}/>
        </div>
      </div>
    );
  }
}

export default App;
