/**
 * File: /config-overrides.js                                                 * 
 * Project: dhiring-client                                                    * 
 * Created Date: Wednesday, August 28th 2019, 2:30:27 pm                      * 
 * Author: zhengchengc <chen.zhengcheng@mailbox.org>                          * 
 * -----                                                                      * 
 * Last Modified: Wednesday August 28th 2019 2:30:27 pm                       * 
 * Modified By: zhengchengc at <chen.zhengcheng@mailbox.org>                  * 
 * -----                                                                      * 
 * Copyright (c) 2019 Olichid                                                 * 
 * ------------------------------------                                       * 
 * Live long and prosper!                                                     * 
 */

const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports("import", {
      libraryName: "antd-mobile", libraryDirectory: "es", style: true // change importing css to less
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#1DA57A" }
    })
  );