module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  devServer: {
    proxy: {
      // 接口服务地址
      "/v1": {
        target: "http://172.20.10.5:3000", // 家
        // target: 'http://192.168.100.79:3000', // 公司
        ws: true,
        changeOrigin: true
      },
      // socket服务地址
      "/ws": {
        target: "http://172.20.10.5:8082",
        ws: true,
        changeOrigin: true
      }
    }
  }
}