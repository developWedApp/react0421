import React, {Component} from 'react'
import TodoItem from './TodoItem'
class TodoList extends Component {
    static defaultProps = {
        todos:[]
        
    }

    render(){
        const {todos} = this.props;
        const list = todos.map((item, index) => {
            return <TodoItem key={index} id={index+1} content={item} />
      
          })
      
        return list

        
    }
}

export default TodoList;