const path = require('path');

module.exports = {
    entry: './src/index.js', // Import core-js and regenerator-runtime in the entry file instead of polyfilling
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: ['transform-object-rest-spread']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/',
        watchContentBase: true,
        port: 9090
    },
    devtool: 'cheap-source-map'
}