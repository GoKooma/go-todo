const path = require('path');
require('dotenv').config();
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, './styles'),
        use: ['style-loader', 'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env",],
              },
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: ''
  },
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  watch: process.env.NODE_ENV === 'development' ? true : false,
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'build') },
      ],
    }),
  ],
}