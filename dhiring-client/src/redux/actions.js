/**
 * File: /src/redux/actions.js                                                * 
 * Project: dhiring-client                                                    * 
 * Created Date: Thursday August 29th 2019                                    * 
 * Author: zhengchengc <chen.zhengcheng@mailbox.org>                          * 
 * -----                                                                      * 
 * Last Modified: Thursday August 29th 2019 8:58:29 am                        * 
 * Modified By: zhengchengc at <chen.zhengcheng@mailbox.org>                  * 
 * -----                                                                      * 
 * Copyright (c) 2019 Olichid                                                 * 
 * ------------------------------------                                       * 
 * Contain several action creators: sync actions and async actions            * 
 */
import { reqRegister, reqLogin } from '../api';
import { AUTH_SUCCESS, ERROR_MSG } from './action-types';

// authorisation succeed sync action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user});
// error message sync action
const errorMessage = (msg) => ({type: ERROR_MSG, data: msg});

// register async action
 export const register = (user) => {
    const { username, password, confirmp, type } = user;
    // inspect frontend form, if doesn't pass, return a sync action with errorMessage
    if(!username){
        return errorMessage('Username should be input!');
    } else if (password !== confirmp){
        return errorMessage('Password doesn\'t match');
    }
    // form data is legal, return a async action to send ajax request
    return async dispatch => {
        // send register async ajax request
        const response = await reqRegister(user);
        const result = response.data;
        if (result.code===0) { // succeed
            // dispatch successful action
            dispatch(authSuccess(result.data));
        } else { // fail
            // dispatch error message
            dispatch(errorMessage(result.msg));
        }
    }
 }

 // login async action
 export const login = (user) => {
    const { username, password } = user;
    // inspect frontend form, if doesn't pass, return a sync action with errorMessage
    if(!username){
        return errorMessage('Username should be input!');
    } else if (!password){
        return errorMessage('Please input password!');
    }
    return async dispatch => {
        // send login async ajax request
        const response = await reqLogin(user);
        const result = response.data;
        if (result.code===0) { // succeed
            // dispatch successful action
            dispatch(authSuccess(result.data));
        } else { // fail
        // dispatch error message
        dispatch(errorMessage(result.msg));
        }
    }
}