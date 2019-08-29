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
    state = {
        username:'',
        password:'',
        confirmp:'',
        type:'hunter', //Hunter or Boss
    };

    register = () => {
        console.log(this.state);
    };

    // process change of input date, update relative state
    handleChange = (name, val) => {

        // update state
        this.setState({
            [name]: val
        })
    };

    toLogin = () => {
        this.props.history.replace('/login');
    };

    render() {
        const { type } = this.state;
        return (
            <div>
                <NavBar>DHiring</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem placeholder='Please input username' onChange={val => {this.handleChange('username', val)}}>Username:</InputItem>
                        <InputItem placeholder='Please enter your password' type="password" onChange={val => {this.handleChange('password', val)}}>Password:</InputItem>
                        <InputItem placeholder='Please confirm password' type="password" onChange={val => {this.handleChange('confirmp', val)}}>Confirm:</InputItem>
                        <ListItem>
                            <span>User Type:</span>
                            &nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='hunter'} onChange={() => this.handleChange('type', 'hunter')}>Hunter</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='boss'}  onClick={() => this.handleChange('type', 'boss')}>Boss</Radio>
                        </ListItem>
                        <Button type="primary" onClick={this.register}>Register</Button>
                        <Button onClick={this.toLogin}>Login</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}