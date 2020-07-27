import React from "react"
import Items from "./items/item"
import {Route} from "react-router-dom"
import s from "./main_page.module.css"
import TrashBox from "./items/trashBox"

export class Main_page extends React.Component {
  constructor(props){
    super(props);
    this.state={
      opening:false,
      ref1:React.createRef()
    };
    this.change = this.change.bind(this);
    this.onClick = this.onClick.bind(this);
    this.box = this.box.bind(this)
  }

  change() {
    console.log(this.state.ref1.current.value);
  }
  onClick() {
    console.log('')
  }
  box(props) {
    console.log("box open")
    this.setState({opening : !this.state.opening})
    console.log(this.state.opening)

  }
  render(){
  return(
  <div className={s.all}>
    <div className={s.search}>
      <button className = {s.styleForButton} onClick={this.onClick}>Search</button>
      <input className={s.strInput} ref={this.ref1} value={this.props.search} onChange={this.change}></input>
      <img className={s.imageBox}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapZUpSMtOJiYZKSqjGEhaDLZWmIo89tIaddPat7jrGzbAHcQUfA&s"
      alt="box" width="15px" height="15px" onClick={this.box}></img>
    </div>
    {this.state.opening ? <TrashBox box={this.props.box}/> : ""}
  <Items isReady={this.props.isReady} books={this.props.books}
  addBookToBox = {this.props.addBookToBox}/>
  </div>
  )
}
}
