import React from "react"
export class Help extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text:"some",
      upd:false
    };
    this.updates = this.updates.bind(this);
    this.change = this.change.bind(this)
  }

  updates(props) {
    this.setState({
    upd : !this.state.upd
  })
    console.log("!")
  };
  change(){
    this.setState({text:"fdg"})
  }
  render(){
  return(
    <div>
      <p><b>HELP</b></p>
      <button onClick={this.updates}>Обновить</button>
      <button onClick={this.change}>Change_a_text</button>
      <div>
        {!this.state.upd?
          "Loading...":
          "загружаем..."
        }
      </div>
      <div>
        {this.state.text}
      </div>

    </div>
    )
  }
}
