import React, { Component } from 'react'
import ListCard from './listCard'
import PopUp from './popUp';
export default class AddMovie extends Component{
    constructor(props){
        super()
        this.state={

        }
    }
    render(){
        
        return(
            <div>
                <img  className="add-image" onClick={this.props.modal} src="https://cdn2.iconfinder.com/data/icons/small-buttons/64/Button_pressed_with_add_icon-512.png"/>
           </div>
        )
    }
}