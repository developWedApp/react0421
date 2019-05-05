import {createStore, applyMiddleware} from 'redux'
import userReducer from './userReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

function configureStore(){
    return createStore(userReducer, applyMiddleware(logger, thunk));
}

export {
    configureStore
}