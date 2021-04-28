import React from "react"
import s from "./Menu.module.scss"

export class Log extends React.Component {
    constructor(props){
      super(props);
      this.onClick = this.onClick.bind(this)
      this.state = {
        ref1:React.createRef(),
        ref2:React.createRef()
      }
     }
    onClick = () => {
        console.log(this.props.users)
        let name = this.props.users.find(item => item.login === this.state.ref1.current.value &&
              item.password === this.state.ref2.current.value)
        if(name){
            console.log("TRUE")

            this.props.logged("")
            localStorage.setItem('logged', "true");
        }else{
            console.log("FALSE")
            alert("Неправильные данные")
        }

      }
    render(){
      return(
      <div>
         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog" role="document">
             <div class="modal-content">
               <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLabel">Вход в аккаунт</h5>
                 <button type="button" class="close"  data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                 </button>
               </div>
               <div class="modal-body">
                 <form>
                   <div class="form-group">
                     <label for="recipient-name" class="col-form-label">Логин:</label>
                     <input type="text" class="form-control" ref={this.state.ref1} id="recipient-name"/>
                   </div>
                   <div class="form-group">
                     <label for="message-text" class="col-form-label">Пароль:</label>
                     <input type="text" class="form-control" ref={this.state.ref2} id="recipient-name"/>
                   </div>
                 </form>
               </div>
               <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Вернуться</button>
                 <button type="button" onClick={this.onClick} data-dismiss="modal" class="btn btn-primary">Войти</button>
               </div>
             </div>
           </div>
         </div>



      </div>
      )
    }
}