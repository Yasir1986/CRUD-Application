import { FETCH_USER_LIST, DELETE_USER_LIST, ADD_USER_LIST } from './types';

export const getUsers = () =>  {
 return {
     type: FETCH_USER_LIST,
 };
};

export const addUsers = (data) =>  {
    return {
        type: ADD_USER_LIST,
        payload: data,
    };
};

export const getDelete = (name) => {
    return {
        type: DELETE_USER_LIST,
        payload:name,
    }
}