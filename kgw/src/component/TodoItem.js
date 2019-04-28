import React, {Component} from 'react'

class TodoItem extends Component {
    

    render(){
        const {id, content} = this.props;
      
        return <div className="todo">{id} {content}</div>

        
    }
}

export default TodoItem;