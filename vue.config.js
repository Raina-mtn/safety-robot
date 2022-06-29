const packageName = require("./package.json").name;
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'major' // page title

const { VUE_APP_PROT, NODE_ENV, VUE_APP_PROXY_KEY, VUE_APP_BASE_DOMIN, ANALYZE } = process.env
module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    headers:{
      'Access-Control-Allow-Origin': '*' // 允许跨域
    },
    liveReload: true,
    hot: true,
    port: VUE_APP_PROT,
    open: true,
    compress: true, //代码压缩
    proxy: {
      [`/${VUE_APP_PROXY_KEY}`]: {
        target: VUE_APP_BASE_DOMIN,
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          [`^/${VUE_APP_PROXY_KEY}`]: ''
        }
      }
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css$/, 
        filename: '[path].gz[query]',
        minRatio: 1,
        threshold: 10240,
        deleteOriginalAssets: false
      })
    ],
    output: {
      library: packageName, // 主应用注册微应用的名称，一般同项目名保持一致
      libraryTarget: "umd"
    },
  },
  chainWebpack(config) {
    config.plugins.delete('prefetch')
    config.when(NODE_ENV === 'production', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization
        .splitChunks({
          chunks: 'all',
          cacheGroups: {
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial'
            },
            elementUI: {
              name: 'chunk-elementUI',
              priority: 20,
              test: /[\\/]node_modules[\\/]_?element-ui(.*)/ 
            },
            echarts: {
              name: 'chunk-echarts', 
              priority: 20, 
              test: /[\\/]node_modules[\\/]_?echarts(.*)/
            },
            commons: {
              name: 'chunk-commons',
              test: resolve('src/components'),
              minChunks: 3, 
              priority: 5,
              reuseExistingChunk: true
            }
          }
        })
        .end()
      config.optimization.runtimeChunk('single').end()
      if (ANALYZE === 'true') {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
      }
    })
  }
}
