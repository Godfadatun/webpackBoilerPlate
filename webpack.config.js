var path = require('path')
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },

    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015'
                    ]
                }
                
            },
            {
                test: /\.(scss|css)$/,
                loader: 'style-loader!css-loader!sass-loader',
            }
        ]
    }   
}