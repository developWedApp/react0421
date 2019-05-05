import axios from 'axios'

const initialState = {
    user: {
        name: 'new name',
        age: 0,
        address: 'new address'
    },
    isloading: false,
}

const GET_USER_REQUEST = 'GET_USER_REQUEST'
const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
const GET_USER_FAILED = 'GET_USER_FAILED'

function getUserRequest() {
    return {
        type: GET_USER_REQUEST,
        isloading: true
    }
}

function getUserSuccess(user) {
    return {
        type: GET_USER_SUCCESS,
        isloading: false,
        user: user
    }
}
function getUserFailed() {
    return {
        type: GET_USER_FAILED,
        isloading: false
    }
}

function getUser() {
    return (dispatch) => {
        dispatch(getUserRequest());

        axios.get("http://localhost:4000")
            .then((response) => {
                dispatch(getUserSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getUserFailed());

            })
    }
}
function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_REQUEST:
            return Object.assign({}, state, {
               isloading: action.isloading
            });
        case GET_USER_SUCCESS:
            return Object.assign({}, state, {
                user: Object.assign({}, state.user, action.user),
                isloading: action.isloading
            });
        case GET_USER_FAILED:
            return Object.assign({}, state, {
                isloading: action.isloading
            });


        default:
            return state;


    }
}
export default userReducer;
export {
    getUser
}