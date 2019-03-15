const path = require('path');

const CONFIG = {
    target: 'node',
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
    },
}

module.exports = CONFIG;