/* config-overrides.js */
const {
  override,
  useEslintRc,
  overrideDevServer
} = require("customize-cra");


module.exports = {
  webpack: override(
    // usual webpack plugin
    useEslintRc()
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
