import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'

const initailState = {
    todos:["씻기"]
}

const ADD_TODO = 'ADD_TODO'

function todos(state=initailState, action){
    switch(action.type){
        case ADD_TODO:
            //assign 객채생성, 현재 state저장, 변경사항
            return Object.assign({},state,{
                todos:[...state.todos, action.content]
            });

        default:

            return state;
    }

}

const store = createStore(todos)
/**
 * {
 *  type:ADD_TODO,
 *  content:"anything"
 * }
 * 
 */
console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState());
    })
store.dispatch({
    type:ADD_TODO,
    content:"abc"
})

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
