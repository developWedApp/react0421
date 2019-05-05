import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from './redux/userReducer'

class App extends Component{
  
  static defaultProps = {
    name:'default name',
    age:0,
    address:'default address'
  }

  componentDidMount(){
    this.props.getUser()
  }
  render(){
    const {name, age, address} = this.props;
    return (
      <div>
        <div>
          <h1>
            {name}
          </h1>
        </div>
        <div>
          {age}
        </div>
        <div>
          {address}
        </div>
      </div>
    )

  }

}

const mapStateToProps = (state) =>{
  return {
    name:state.user.name,
    age:state.user.age,
    address:state.user.address
  }
}
const matDispatchToProps = (dispatch) => {
  return {
    getUser: ()=>dispatch(getUser())
  }

}
export default connect(mapStateToProps ,matDispatchToProps)(App);
