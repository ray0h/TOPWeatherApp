const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

const config = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev,next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {})

  return {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.join(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.css$/, 
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      ]
    },
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin(envKeys),
    ],
  }
}

module.exports = config;