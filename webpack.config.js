const path = require('path');
const merge = require('webpack-merge');
const _ = require('lodash');

const glob = require('glob');

const { config } = require('@ovh-ux/manager-webpack-config')({
  template: './src/index.html',
  basePath: './src',
  lessPath: [
    './node_modules',
  ],
  root: path.resolve(__dirname, './src/app'),
  assets: {
    files: [
      { from: path.resolve(__dirname, './node_modules/ovh-module-exchange/src/exchange/**/*.html'), context: 'node_modules/ovh-module-exchange/src' },
    ],
  },
});

let bundles = {};
// Module exchange
bundles.exchange = [].concat(
  glob.sync('./node_modules/ovh-module-exchange/src/exchange/**/*.module.js'),
  glob.sync('./node_modules/ovh-module-exchange/src/exchange/**/!(*.module).js'),
);

// merge the configuration and export it
module.exports = merge(config, {
  entry: _.assign({
    main: './src/index.js',
  }, bundles),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].bundle.js',
  },
});
