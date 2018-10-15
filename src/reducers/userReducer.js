import { FETCH_USER_LIST, DELETE_USER_LIST,  ADD_USER_LIST, EDIT_USER_LIST } from '../actions/types';

const initialState = {
 users:[
     {
         name:"Saidur",
         email:"swesaon@gmail.com",
         country:"Bangladesh",
     },
     {
        name:"Rahman",
        email:"swesaon@gmail.com",
        country:"Finland",
    },
    ],
};
export default function(state=initialState, action){
    switch(action.type){
        case FETCH_USER_LIST:
        return {
            ...state,
        };
        case ADD_USER_LIST:
        return {
            ...state,
            users:[...state.users,action.payload],
        };
        case DELETE_USER_LIST:
        return {
            ...state,
            users: state.users.filter(user => user.name!==action.payload)
        };
        case EDIT_USER_LIST:
        return {
            ...state,
            users: state.users.map(user => user.name===action.payload ? {...user,isEditing: !user.isEditing}:user)
        };
        default:
        return state;
    }
}