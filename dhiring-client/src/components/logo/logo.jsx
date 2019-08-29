/**
 * File: /src/components/logo/logo.jsx                                        * 
 * Project: dhiring-client                                                    * 
 * Created Date: Thursday August 29th 2019                                    * 
 * Author: zhengchengc <chen.zhengcheng@mailbox.org>                          * 
 * -----                                                                      * 
 * Last Modified: Thursday August 29th 2019 9:34:17 am                        * 
 * Modified By: zhengchengc at <chen.zhengcheng@mailbox.org>                  * 
 * -----                                                                      * 
 * Copyright (c) 2019 Olichid                                                 * 
 * ------------------------------------                                       * 
 * Live long and prosper!                                                     * 
 */
import React from 'react';

import './logo.less';
import logo from './icon8.png';

export default function Logo() {
    return (
        <div className="logo-container">
            <img src={logo} alt="logo" className='logo-img' />
        </div>
    )
}