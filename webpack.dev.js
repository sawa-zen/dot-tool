const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'devtool.source-map',
  devServer: {
    contentBase: 'public',
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
  },
});
