import {createStore} from 'redux';
import {userReducer} from './userReducer'

function configureStore(){
    return createStore(userReducer);


}

export {
    configureStore
}