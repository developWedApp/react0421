import React, {Component} from 'react'

class Payment extends Component {
    static defaultProps = {
        payment:0,
        onReset: ()=> {}
    }

    

    render(){

        const {payment} = this.props;
        return(
            <div>
                <div>{payment}</div>
                <button onCLick={this.props.onReset}>초기화</button>

            </div>
        );

    }
}

export default Payment;