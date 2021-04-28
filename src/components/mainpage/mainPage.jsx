import React from "react"
import Items from "./items/item"
import s from "./mainPage.module.scss"
import TrashBox from "./items/trashBox"

export class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      opening:false,
      ref1:React.createRef()
    };

    this.box = this.box.bind(this)
  }

  box(props) {
    console.log("box open")
    this.setState({opening : !this.state.opening})
    console.log(this.state.opening)

  }
  render(){

  return(
  <div className="container">
        <div className="row">
            <div className="col-12 shadow">
                  <div className={s.all}>
                    <div className={s.search}>

                      <img className={s.imageBox}
                      alt=""  onClick={this.box}></img>
                    </div>
                    {this.state.opening ? <TrashBox box={this.props.box}/> : ""}
                  <Items isReady={this.props.isReady} books={this.props.books}
                  addBookToBox = {this.props.addBookToBox}/>
            </div>
        </div>
    </div>
  </div>
  )
}
}
