const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-unused-vars
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
  entry: ["regenerator-runtime/runtime.js", "./index.js"],
  mode: "development",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
    library: "ChatbotWidget",
    libraryTarget: "umd",
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpg|png|gif|svg|woff|ttf|eot)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      title: "Demo Page",
      // Load a custom template (lodash by default)
      template: "public/webpack_template.html",
    }),
  ],
};
