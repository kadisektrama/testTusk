import {connect} from "react-redux"
import {select,selectReady,addBookToBox,changestate,registrationon,login} from "../redux/actions/selectAction"
import App from "../components/App"

const mapStateToProps = ({books,trashBox,login}) => ({
   books:books.items,
   isReady:books.isReady,
   search:books.search,
   box:trashBox.box,
   searching:books.searching,
   state:trashBox.state,
   loggedform:login.logged
})
const matchDispatchToProps = dispatch => ({
   select:payload => dispatch(select(payload)),
   selectReady:payload => dispatch(selectReady(payload)),
   addBookToBox:payload => dispatch(addBookToBox(payload)),
   changestate:dispatch(changestate()),
   registrationon:payload => dispatch(registrationon(payload)),
   login:payload => dispatch(login(payload))

})

export default connect(mapStateToProps,matchDispatchToProps)(App)