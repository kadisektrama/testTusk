import React,{useState,useEffect} from "react"
import {Redirect} from "react-router-dom"
import "antd/dist/antd.css"
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
export class MyWish extends React.Component {
  constructor(props){
    super(props)
    this.state={
      x:false,
      current: 'mail',
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    console.log("");
    this.setState({x : !this.state.x})
    console.log(this.state.x)
    localStorage.setState("logged","false")
  }
  handleClick = e => {
            console.log('click ', e);
            this.setState({ current: e.key });
          };
  render(){
    const { current } = this.state;
    const { SubMenu } = Menu;
    if(this.state.x === true)
      return <Redirect to="/help" />
  return(
    <div>
            <div>Статьи</div>


    </div>
  )
}
}
