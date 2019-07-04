import React, { Component } from 'react'
export default class PopUp extends Component{
    constructor(props){
        super(props)
        this.state={
            image:"",
            name:"",
            duration:"",
            type:"",
            rating:""

        }

    }
    movieImage = e =>{
        this.setState({ image: e.target.value });
    }
    movieName = e =>{
        this.setState({ name: e.target.value })
    }
    movieDuration = e =>{
        this.setState({ duration : e.target.value })
    }
    movieType = e =>{
        this.setState({ type : e.target.value})

    }
    movieRating = e =>{
        this.setState({ rating : e.target.value })
    }
    render(){
        return(
            <div className="bg-modal" style={{ display: (this.props.isVisible) ? 'flex' : 'none' }}>
                <div className="modal-content">
                    <p  onClick={this.props.modal} className="close">+</p>
                    <img className="movie-add-img" src="https://cdn2.iconfinder.com/data/icons/interactive-shadow-pack/100/_-5-512.png" />
                    <div >
                        <input type="text" value={this.state.image} onChange={this.movieImage} placeholder="Insert image"/>
                        <input type="text" value={this.state.name} onChange={this.movieName} placeholder="Movie Title"/>
                        <input type="text" value={this.state.duration} onChange={this.movieDuration} placeholder="Duration of the movie"/>
                        <input type="text" value={this.state.type} onChange={this.movieType} placeholder="Type of film"/>
                        <input type="text" value={this.state.rating} onChange={this.movieRating} placeholder="rating"/>
                        <button className="button" onClick={() =>{
                            
                            
                            this.props.addMovie({
                                movieImage: this.state.image,
                                movieName: this.state.name,
                                movieDuration: this.state.duration,
                                movieType: this.state.type,
                                rating: this.state.rating
                                
                            });
                            this.props.modal()
                            

                        }}>ADD FILM</button>
                    </div>
                
                </div>
            </div>
        )
    }

}