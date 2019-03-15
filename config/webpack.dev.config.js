const merge = require('webpack-merge');
const common = require('../webpack.base.config');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const path = require('path');

const CONFIG = {
    entry: ['webpack/hot/poll?100', `./src/main.ts`],
    watch: true,
    externals: [
        nodeExternals({
            whitelist: ['webpack/hot/poll?100'],
        }),
    ],
    mode: 'development',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        port: 3001,
        contentBase: './dist'
    }
}

module.exports = merge(common, CONFIG)

