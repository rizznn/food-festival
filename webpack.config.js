const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const path = require("path");
const { ProvidePlugin } = require("webpack");

plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder
    })
],

module.exports = {

entry: './assets/js/script.js',

output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'main.bundle.js'
},

mode: 'development'
};