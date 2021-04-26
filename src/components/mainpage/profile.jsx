import React from "react"

export class Profile extends React.Component {
    constructor(props){
      super(props);
      this.onClick = this.onClick.bind(this)
     }
    onClick(){
        this.props.unlogged("")
    }
    render(){
      return(
        <div>
        <p><b center>Profile!</b></p>
        <br/>
        <button onClick={this.onClick}>Sign out</button>
        </div>
      )
    }
}
