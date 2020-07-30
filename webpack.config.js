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
          use: [ 
            "style-loader",
            "css-loader"
          ]
        }
      ]
    }
  }
}

module.exports = config;