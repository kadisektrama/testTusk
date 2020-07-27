import React from "react"
import {Redirect} from "react-router-dom"
export class My_wish extends React.Component {
  constructor(props){
    super(props)
    this.state={
      x:false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    console.log("sosi");
    this.setState({x : !this.state.x})
    console.log(this.state.x)
  }
  render(){
    if(this.state.x == true)
      return <Redirect to="/help" />
  return(
    <div>
      <p><b>MY_WISH</b></p>
      <p>{this.state.x}</p>
      <button onClick={this.onClick}>checked</button>
    </div>
  )
}
}
