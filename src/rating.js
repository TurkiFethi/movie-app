import React, { Component } from 'react';
export default class RatingStars extends Component{
    constructor(props){
        super(props)
      
    }
    render(){
        console.log(this.props.handleClick)
        let tabRate=[]
        for (let i=0;i<5;i++){
            this.props.rate>i?
            tabRate.push(<span onClick={()=>this.props.handleClick(i!=0?i+1:i)}>★</span>):
            tabRate.push(<span onClick={()=>this.props.handleClick(i+1)}>☆</span>)

        }
        return(
           <div>{tabRate}</div>
        )
    }}