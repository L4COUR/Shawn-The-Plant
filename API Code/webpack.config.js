const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

/* Build path */
const _BUILD = path.join(__dirname, "build/");
const _SRC = path.join(__dirname, "src/");

/* Production flag */
const isProd = process.env.NODE_ENV === "prod";

/* Environment */
const baseEnv = path.join(__dirname, ".env");
const specifiedEnv = `${baseEnv}.${process.env.NODE_ENV}`;
const finalEnv = dotenv.config({
  path: fs.existsSync(specifiedEnv) ? specifiedEnv : baseEnv
}).parsed;

const envKeys = Object.keys(finalEnv).reduce((acc, key) => {
  acc[`process.env.${key}`] = JSON.stringify(finalEnv[key]);
  return acc;
}, {
  "process.env.isProd": isProd,
  "process.env.version": JSON.stringify(require("./package.json").version)
});

console.log("Build with env: ", envKeys, "/n");

/* Other resources also needed to be bundled */
const other_resources = [
  // "favicon.ico",
  "img"
];

module.exports = {
  entry: {
    app: path.join(_SRC, "Index.bs.js"),
  },
  mode: isProd ? "production" : "development",
  output: {
    filename: '[name].js',
    path: _BUILD
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(_SRC, "index.html"),
      inject: false
    }),
    new CopyWebpackPlugin(
      other_resources.map(res => ({ from: "./src/" + res, to: "./" + res }))
    ),
    new webpack.DefinePlugin(envKeys)
  ],
  devServer: {
    contentBase: _BUILD,
    port: 8000,
    proxy: {
      "/api": {
        target: "http://192.168.0.100",
        secure: false
      }
    },
    historyApiFallback: {
      rewrites: other_resources.map(res => ({ from: res, to: _SRC + res }))
    },
    index: ""
  }
};
