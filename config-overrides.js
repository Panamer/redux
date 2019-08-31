/* config-overrides.js */
const {
  override,
  fdisableEsLint
} = require("customize-cra");


module.exports = {
  webpack: override(
    // usual webpack plugin
    disableEsLint()
  ),
  devServer: overrideDevServer(config => {
    config.proxy = {
      '/smcAdmin': {
        target: '/',
        changeOrigin: true
        // pathRewrite: {
        //   '^/smcAdmin': '/smcAdmin'
        // }
      }
    }
    return config
  })
};
