module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        // 本地启服调试时，将本地请求转发到后端，url修改为对应的后端域名
        proxy: {
            '/api': {
                target: 'http://192.168.43.162:8088',//192.168.253.5:8088  172.25.8.13:8088  192.168.0.107

                changeOrigin: true,
                pathRewrite: {
                    '^/api/': '/api/'
                }
            }
        }
    }
};
