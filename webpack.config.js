require('dotenv').config();
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// console.log(process.env.NODE_ENV);
const config = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/docs`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpege: {
                progressive: true,
                quality: 80,
              },
              optipng: {
                optimizationLevel: 7,
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
    // contentBase: DIST_FOLDER,
    // port:8888,
    // proxy:{
    //   '/api':{
    //     target:{
    //       host: "localhost",
    //       protocol: 'http:',
    //       port: 8080
    //     },
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      favicon: 'assets/favicon.ico',
    })
    // new webpack.EnvironmentPlugin(['NODE_ENV', 'API_KEY', 'HOST']),
  ],
};

module.exports = config; 
