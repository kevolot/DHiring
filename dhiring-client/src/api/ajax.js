/**
 * File: /src/api/ajax.js                                                     * 
 * Project: dhiring-client                                                    * 
 * Created Date: Friday August 30th 2019                                      * 
 * Author: zhengchengc <chen.zhengcheng@mailbox.org>                          * 
 * -----                                                                      * 
 * Last Modified: Friday August 30th 2019 12:53:35 pm                         * 
 * Modified By: zhengchengc at <chen.zhengcheng@mailbox.org>                  * 
 * -----                                                                      * 
 * Copyright (c) 2019 Olichid                                                 * 
 * ------------------------------------                                       * 
 * Live long and prosper!                                                     * 
 */
import axios from 'axios';

export default function ajax(url, data={}, type='GET'){
    if (type==='GET') { // send GET request
        // data: {username:tom, password:123}
        // paramStr: username=tom&password=123
        let paramStr = '';
        Object.keys(data).forEach(key => {
            paramStr += key + '=' + data[key] + '&'
        });
        if (paramStr) {
            paramStr.substring(0, paramStr.length-1);
        }
        return axios.get(url + '?' + paramStr);
    } else { // send POST request
        return axios.post(url, data);
    }
}