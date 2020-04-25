const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    library: 'DataStructures',
    libraryTarget: 'umd',
    filename: 'DataStructures.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
}
