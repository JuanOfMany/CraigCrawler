const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var mode = process.env.NODE_ENV || 'development';

const config = {
  name: 'Craig Crawler',
  mode: mode,
  mode: 'production',
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: ['src', 'node_modules'],
  },
  externals: {
    puppeteer: "require('puppeteer')",
},
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

module.exports = config;