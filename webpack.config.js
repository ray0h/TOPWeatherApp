const path = require("path");

const config = () => {
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
  }
}

module.exports = config;