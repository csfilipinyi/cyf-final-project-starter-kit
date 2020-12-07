const { merge } = require("webpack-merge");

const common = require("./common.config");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:3100",
    },
  },
});
