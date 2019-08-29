/**
 * File: /src/containers/register/register.jsx                                * 
 * Project: dhiring-client                                                    * 
 * Created Date: Thursday August 29th 2019                                    * 
 * Author: zhengchengc <chen.zhengcheng@mailbox.org>                          * 
 * -----                                                                      * 
 * Last Modified: Thursday August 29th 2019 1:43:39 am                        * 
 * Modified By: zhengchengc at <chen.zhengcheng@mailbox.org>                  * 
 * -----                                                                      * 
 * Copyright (c) 2019 Olichid                                                 * 
 * ------------------------------------                                       * 
 * Register router component                                                  * 
 */
import React, { Component } from 'react';
import { NavBar,WingBlank, List, InputItem, WhiteSpace, Radio, Button } from 'antd-mobile';
import Logo from '../../components/logo/logo';

const ListItem = List.Item;


export default class Register extends Component {
    render() {
        return (
            <div>
                <NavBar>DHiring</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem>Username:</InputItem>
                        <InputItem type="password">Password:</InputItem>
                        <InputItem type="password">Confirm:</InputItem>
                        <ListItem>
                            <span>User Type:</span>
                            <Radio>Hunter</Radio>
                            <Radio>Boss</Radio>
                        </ListItem>
                        <Button type="primary">Register</Button>
                        <Button>Login</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}