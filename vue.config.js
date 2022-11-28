/* eslint-disable import/extensions,import/no-unresolved */
const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  devServer: {
    // 代理跨域（mock 不需要配置跨域，直接能访问）
    host: '0.0.0.0',
    port: '8080',
    proxy: {
      '/api': {
        // 目标地址(easymock:https://mock.mengxuegu.com/mock/6359dad78c51366598ff4b1c)
        // 备用地址(fastmock:https://www.fastmock.site/mock/661e5fcc775d88185f2191085b5384c4)
        target: 'https://mock.mengxuegu.com/mock/6359dad78c51366598ff4b1c',
        changeOrigin: true,
        // 将/api去掉
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
});
