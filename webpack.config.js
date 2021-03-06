var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: [
    "./src/index.js"
  ],
  output: {
    path: __dirname + '/static',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader!sass-loader'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./src')
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline:true,
    port: 3000,
  },
  plugins: [
  ]
};
