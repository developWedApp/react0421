import React, {Component} from 'react'
import { throwStatement } from '@babel/types';

class TodoItem extends Component {
    
    onClick = (index) => {
        this.props.onClick(this.props.index)
    }

    render(){
        const {id, content} = this.props;
      
        return <div className="todo" onClick={this.onClick}>{id} {content}</div>

        
    }
}

export default TodoItem;