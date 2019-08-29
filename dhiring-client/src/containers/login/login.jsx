/**
 * File: /src/containers/login/login.jsx                                      * 
 * Project: dhiring-client                                                    * 
 * Created Date: Thursday August 29th 2019                                    * 
 * Author: zhengchengc <chen.zhengcheng@mailbox.org>                          * 
 * -----                                                                      * 
 * Last Modified: Thursday August 29th 2019 1:47:09 am                        * 
 * Modified By: zhengchengc at <chen.zhengcheng@mailbox.org>                  * 
 * -----                                                                      * 
 * Copyright (c) 2019 Olichid                                                 * 
 * ------------------------------------                                       * 
 * Login router component                                                     * 
 */
import React, { Component } from 'react';
import { NavBar,WingBlank, List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import Logo from '../../components/logo/logo';

const ListItem = List.Item;


export default class Login extends Component {
    state = {
        username:'',
        password:'',
    };

    login = () => {
        console.log(this.state);
    };

    // process change of input date, update relative state
    handleChange = (name, val) => {

        // update state
        this.setState({
            [name]: val
        })
    };

    toRegister = () => {
        this.props.history.replace('/register');
    };

    render() {
        return (
            <div>
                <NavBar>DHiring</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem placeholder='Please input username' onChange={val => {this.handleChange('username', val)}}>Username:</InputItem>
                        <InputItem placeholder='Please enter your password' type="password" onChange={val => {this.handleChange('password', val)}}>Password:</InputItem>
                        <Button type="primary" onClick={this.login}>Login</Button>
                        <Button onClick={this.toRegister}>Sign Up</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}