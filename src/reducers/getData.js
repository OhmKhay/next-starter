import {     
    GET_DATA,
} from '../actions/actionTypes';
const INITIAL_STATE = {
    loading: false,
    data: []
}
export const getData = (state = INITIAL_STATE, action) => {
 const { type, payload } = action;

    switch (type) {
        case GET_DATA:
            return {
                ...state,
                data: payload,
                loading: false
            };  
        default:
            return state;
    }
};