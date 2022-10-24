
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ThemePlugin = require('@alifd/next-theme-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  // mode: 'development',  
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  plugins: [
    // new MiniCssExtractPlugin({})
    // 添加 @alifd/next-theme-webpack-plugin，引入 normalize 样式以及自定义 icon 定义
    // new ThemePlugin({
    //     theme: '@alifd/theme-2'
    // }),
    // new ExtractTextPlugin('[name].css'),
  ],
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        loader: 'babel-loader',
        // include: [
        //   path.resolve(__dirname, 'src')
        // ],
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        //   plugins: [
        //     'add-module-exports',
        //     'transform-decorators-legacy',
        //     ['babel-plugin-import', {
        //         libraryName: '@alifd/next',
        //         style: true
        //      }],
        // ],
        }
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        // include: [
        // path.resolve(__dirname, 'src')
        // ],
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: true
            }
          },
          {
            loader: 'sass-loader', options: {
              // modules: true
            }
          },
        ]
        // use: ExtractTextPlugin.extract({
        //   use: [
        //       'css-loader',
        //       'fast-sass-loader',
        //       {
        //           // 添加 @alifd/next-theme-loader，引入自定义主题样式对应的 scss 变量
        //           loader: '@alifd/next-theme-loader',
        //           options: {
        //               theme: '@alifd/theme-2'
        //           },
        //       },
        //   ],
      // }),
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'demo'),
    },
    open: false,
    port: 8081,
  }
};