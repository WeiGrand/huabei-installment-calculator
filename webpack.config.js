const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  target: "web",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./lib"),
    filename: "main.js",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "./lib")],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
