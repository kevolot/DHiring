/**
 * File: /src/api/index.js                                                    * 
 * Project: dhiring-client                                                    * 
 * Created Date: Friday August 30th 2019                                      * 
 * Author: zhengchengc <chen.zhengcheng@mailbox.org>                          * 
 * -----                                                                      * 
 * Last Modified: Friday August 30th 2019 1:02:28 pm                          * 
 * Modified By: zhengchengc at <chen.zhengcheng@mailbox.org>                  * 
 * -----                                                                      * 
 * Copyright (c) 2019 Olichid                                                 * 
 * ------------------------------------                                       * 
 * Live long and prosper!                                                     * 
 */
import ajax from './ajax';
// Register api
export const reqRegister = (user) => ajax('/register', user, 'POST');

// Login api
export const reqLogin = ({ username, password }) => ajax('/login', {username, password}, 'POST'); 

// Update user api
export const reqUpdateUser = (user) => ajax('/update', user, 'POST');