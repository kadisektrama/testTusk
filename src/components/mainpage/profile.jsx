import React from "react"

export class Profile extends React.Component {
    constructor(props){
      super(props);
        this.onClick = this.onClick.bind(this)
     }
    onClick(){
             localStorage.setItem('logged', "false");
             window.location.reload();
         }
    render(){
      return(
        <div>
        <p><b center>Profile!</b></p>

        <br/>

        </div>
      )
    }
}
