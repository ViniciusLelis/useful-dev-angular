module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:44345',
          pathRewrite: {'^/api' : ''}
        }
      }
    }
  }