import { FETCH_USER_LIST, DELETE_USER_LIST, ADD_USER_LIST, EDIT_USER_LIST, UPDATE_USER_LIST } from './types';

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
    };
};
export const getEdit = (name) => {
    return {
        type: EDIT_USER_LIST,
        payload:name,
    };
};
export const updateUser = (user) => {
    return {
        type: UPDATE_USER_LIST,
        user:user,
        payload:user.name,
    };
};