const path = require('path');

module.exports = {
    entry: './src',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js'
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};
