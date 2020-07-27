import React from 'react';
import s from "./App.module.css"
import axios from "axios"
import Menu from "./menu/Menu"
import {Main_page} from "./mainpage/main_page"
import {Help} from "./mainpage/help"
import {My_wish} from "./mainpage/my_wish"
import Security_customers from "./mainpage/security_customers"
import {Route} from "react-router-dom"
import Begin from "./mainpage/begin"
import {Registration} from "./mainpage/registration"


class App extends React.Component{
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


  componentWillMount(){
    const {select} = this.props;
    axios.get('/books.json').then(({data}) => { select(data)});
  }
  onClick(){
    const {selectReady} = this.props
    selectReady(false);
  }
render(){
  let tap = React.createRef();
  const {books,isReady} = this.props;

  return(
    <div>
      <Menu loggedform={this.props.loggedform} state={this.props.state}
      searching={this.props.searching} search={this.props.search}
      changestate={this.props.changestate} registrationon={this.props.registrationon}
      login={this.props.login}/>
      <Route exact path="/" render={() => <Main_page isReady={isReady}
        books={books} addBookToBox = {this.props.addBookToBox}
        box={this.props.box}/> }/>
      <Route path="/help" render={() => <Help /> }/>
      <Route path="/security_customers" render={() => <Security_customers/> }/>
      <Route path="/my_wish" render={() => <My_wish/> }/>
      <Route  path="/registration"
      render={() => <Registration registrationon={this.props.registrationon}
      loging={this.props.loggedform}/>}/>
    </div>
  )
}}

export default App
