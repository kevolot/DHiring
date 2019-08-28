/**
 * File: /src/index.js                                                        * 
 * Project: dhiring-client                                                    * 
 * Created Date: Wednesday, August 28th 2019, 2:16:41 pm                      * 
 * Author: zhengchengc <chen.zhengcheng@mailbox.org>                          * 
 * -----                                                                      * 
 * Last Modified: Wednesday August 28th 2019 2:16:41 pm                       * 
 * Modified By: zhengchengc at <chen.zhengcheng@mailbox.org>                  * 
 * -----                                                                      * 
 * Copyright (c) 2019 Olichid                                                 * 
 * ------------------------------------                                       * 
 * Live long and prosper!                                                     * 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Register from './containers/register/register';
import Main from './containers/main/main';
import Login from './containers/login/login';

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route component={Main} />
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'));