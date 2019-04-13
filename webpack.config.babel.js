import path from 'path'

import { isProd } from './src/config'

const buildConfig = (inName, outName) => ({
  entry: [
    `./src/game/${inName}.js`,
  ],
  output: {
    filename: `${outName}.js`,
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3001,
    contentBase: path.join(__dirname, './docs'),
    watchContentBase: true,
  },
  mode: isProd ? 'production' : 'development',
})

export default [buildConfig('index', 'bundle'), buildConfig('debug', 'debug')]
