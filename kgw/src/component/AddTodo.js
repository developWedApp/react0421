import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content:""
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
          })
    }

    onClick = ()=>{
        console.log(this.state.content);
        this.props.add(this.state.content);
        // this.add(this.state.content);
      }

    render() {
        const {content} = this.state;
        return <div>
            <input className="input-content" name="content" value={content} onChange={this.onChange} />
            <button className="bt" onClick={this.onClick}>추가</button>
        </div>


    }
}

export default AddTodo;