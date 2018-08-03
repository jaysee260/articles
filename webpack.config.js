const commonConfig = require('./build-utils/webpack.common.js');
const webpackMerge = require('webpack-merge');

module.exports = (env) => {

  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  const mergedConfig = webpackMerge(commonConfig, envConfig);

  return mergedConfig;

}