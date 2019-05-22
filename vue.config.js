const path = require('path')
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')

module.exports = {
  // publicPath: './',
  crossorigin: 'anonymous',
  integrity: true,
  configureWebpack: {
    plugins: [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, './shell'),
        staticDir: path.resolve(__dirname, './dist'),
        routes: ['/'],
        minify: false
      })
    ]
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].minify = false
        return args
      })
  }
}
