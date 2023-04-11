const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  name: 'Craig Crawler',
  mode: 'development',
  //mode: 'production',
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
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
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
};

module.exports = config;