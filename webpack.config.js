const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: __dirname +'/app/index.js',
  mode:'development',
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname +'/build',
  },
  plugins: [
    new HtmlWebpackPlugin({template: __dirname+'/app/index.html'})
  ],
  devServer: {
    port: 7000
  }
}
module.exports = config;
