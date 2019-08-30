/**
 * File: /src/redux/reducers.js                                               * 
 * Project: dhiring-client                                                    * 
 * Created Date: Thursday August 29th 2019                                    * 
 * Author: zhengchengc <chen.zhengcheng@mailbox.org>                          * 
 * -----                                                                      * 
 * Last Modified: Thursday August 29th 2019 8:56:47 am                        * 
 * Modified By: zhengchengc at <chen.zhengcheng@mailbox.org>                  * 
 * -----                                                                      * 
 * Copyright (c) 2019 Olichid                                                 * 
 * ------------------------------------                                       * 
 * Contain several reducer function:                                          * 
 * take in old state and specific action, return a new state                  *
 */
import { combineReducers } from 'redux';

const initUser = {
    username: '',
    type:'', // hunter or boss
    msg:'' // error message
}

// reducer to produce user state
function user(state=initUser, action) {
    switch(action.type) {

        default:
            return state;
    }
}

export default combineReducers({
    
});  // structure of exposed state: {xxx:0, yyy:0}