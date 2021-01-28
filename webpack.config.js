let path = require('path');
let webpack = require('webpack');
module.exports = {
    /* 入口文件 */
    entry: './src/index.js',
    /* 模式 */
    mode:"development",
    /* 出口文件 */
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
  
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            use:{
                loader:"babel-loader",
                options:{
                    presets:[
                        "env"
                    ]
                }
            },
        }]
    },
    devServer: {
        disableHostCheck: true,
        inline: true,
        port: 8181
    },
}
