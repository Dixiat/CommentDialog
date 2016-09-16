var path = require('path');

module.exports = {
    entry:{
        'main':'./src/main.js'
    },
    output: {
        path:'./build',
        filename:'bundle.js'
    },
    module: {
        loaders: [
            {
                test:/\.jsx?$/,
                loader:'babel',
                query: {
                    presets:['es2015','react']
                }
            },
            { test: /\.css$/,loader:'style!css'}
        ]
    },
    
};