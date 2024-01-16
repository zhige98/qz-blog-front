const path = require('path')
const CracoLessPlugin = require('craco-less')
require('dotenv').config({ path: '.env.development' })

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  devServer: {
    proxy: {
      '/qz-blog-api': {
        target: process.env.REACT_APP_QZ_BLOG_URL
      },
      '/blog_files': {
        target: process.env.REACT_APP_QZ_BLOG_URL
      }
    }
  },
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
