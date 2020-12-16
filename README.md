# 进入项目目录
```
cd 项目目录
```

## 初始化项目
```
npm install
```

### 本地启动服务
```
npm run serve

在vue.config.js中配置了域名转发http://sapi.ngrok2.xiaomiqiu.cn
将localhost:8080/api/carInfo转发到http://sapi.ngrok2.xiaomiqiu.cn/api/carInfo
需要该域名接口支持跨域请求，否则被拦截
如域名变更，修改为对应域名即可
```

### 本地打包，产出编译到dist文件夹下
```
npm run build
```

api为相对路径，
例如，前端部署在：http://woshiyuming.com
则前端访问后端地址为：http://woshiyuming.com/api/carInfo


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
