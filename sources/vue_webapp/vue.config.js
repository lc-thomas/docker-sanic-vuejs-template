module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/style/variables.scss";`
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 80,
    disableHostCheck: true,
    hot: true,
    watchOptions: { 
      aggregateTimeout: 300, 
      poll: true 
    },
    proxy: {
      '^/api': {
        target: 'http://sanic_server:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }
}