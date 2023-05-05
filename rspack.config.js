const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.jsx",
  },
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: "less-loader",
          },
        ],
        type: "css",
      },
      {
        test: /\.png$/,
        type: "asset",
      },
    ],
  },
  target: ["es2015", "web"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  builtins: {
    html: [{ template: "./src/index.html" }],
    react: {
      refresh: true,
    },
  },
};
