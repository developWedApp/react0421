import React, {Component} from 'react'
import {connect} from 'react-redux'
class AgeComponent extends Component {

    static defaultProps = {
        age:'default age'
    }

    render(){
        return <div>
            {this.props.age}
        </div>

    }

}
const mapStateToProps = (state) =>{
    return {
        age:state.age
    }

}

export default connect(mapStateToProps, null)(AgeComponent);