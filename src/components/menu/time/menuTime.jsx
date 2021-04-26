import React from "react"

const { Component } = React;
export class Time extends Component{
  constructor(props){
    super(props)
    this.state = {
      date:new Date()
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({date:new Date() }) },1000)
  }
  render(){

    return(
      <div>{this.state.date.toLocaleTimeString()}</div>

    )
  }
}
