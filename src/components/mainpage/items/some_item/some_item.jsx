import React from "react"

import s from "./some_item.module.scss"

class App extends React.Component {
  constructor(props){
    super(props);

    }
    click(a){

        localStorage.setItem("currentBook",a)
    }

    render(){
            return(
             <div className={s.int}>
             <li >{this.props.id + 1}  {this.props.title}  <br />
             <img className={s.im} src={this.props.image} alt="sosi xyu" /> <br />
             <div className={s.average}><span className={s.t}>Цена: {this.props.price}
             </span><a onClick={()=>{this.click(this.props.id)}} href={`/book/${this.props.id}`} className={s.b}>Читать...</a></div>
              </li>
              </div>
             )
    }
}



export default App;
