const path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        loader: require.resolve('babel-loader'),
        test: /\.js$|jsx/,
        exclude: /node_modules/
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
};
