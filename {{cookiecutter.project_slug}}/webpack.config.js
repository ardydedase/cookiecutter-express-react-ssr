/* eslint-disable no-undef */
const path = require('path');

const config = {
  entry: {
    vendor: ['@babel/polyfill', 'react'],
    home: ['./ts_dist/components/home/index.js'],
    repos: ['./ts_dist/components/repos/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*'],
  },
};

module.exports = config;
