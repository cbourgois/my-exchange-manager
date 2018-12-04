const path = require('path');
const merge = require('webpack-merge');
const _ = require('lodash');

const { config } = require('@ovh-ux/manager-webpack-config')({
  template: './src/index.html',
  basePath: './src',
  lessPath: [
    './node_modules',
  ],
  root: path.resolve(__dirname, './src/app'),

});

// merge the configuration and export it
module.exports = merge(config, {
  entry: _.assign({
    main: './src/index.js',
  }),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].bundle.js',
  },
});
