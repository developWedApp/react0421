import React, { Component } from 'react';
import TodoList from './component/TodoList'
import AddTodo from './component/AddTodo'
import './App.css';


class App extends Component {


  state = {
    todos: ["씻기"]
  }

  add = (content)=>{
    this.setState({
      todos: [...this.state.todos, content]
    })
  }
  render() {
    const { todos } = this.state;

    return (
      <div className="container">
        <div className="section">
          <TodoList todos={todos} />
        </div>
        <div className="section">
          <AddTodo add={this.add}/> 
        </div>

      </div>
    );

  }
}

export default App;
