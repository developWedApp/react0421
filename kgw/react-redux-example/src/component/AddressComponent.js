import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeAddress} from '../redux/userReducer'
class AddressComponent extends Component {

    static defaultProps = {
        address:'default address'
    }

    render(){
        return <div>
            {this.props.address}
            <button onClick={this.props.changeAddress}>ChangeAddress</button>
        </div>

    }

}
const mapStateToProps = (state) =>{
    return {
        address:state.address
    }
}
const mapdispatchToProps = (dispatch) => {
    return {
        changeAddress: () => dispatch(changeAddress("new Address"))
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(AddressComponent);