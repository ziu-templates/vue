## {{ name }}
----------------------------
author: {{ author }} <br>
description: {{ author }}

<br>
###配置说明：
<br>
####1. ./config/index.js<br>
module.exports.build.assetsPublicPath -- 更改为项目pathname // 以斜杠开始并以斜杠结束，例如/xxx/xxx/ <br>
module.exports.dev.proxyTable -- 接口代理转发,按需要更改 <br>
<br>
####2. ./docs --- 项目文档<br>
|--api.md --- 更改为项目接口文档

####3. ./mock --- 模拟数据

域名
====
test: <br>
stag: <br>
prod: <br>

开发
====
appid：<br>
componentid: <br>
webpack build的域名前缀： 

路由
====

1.首页

* /index
* component: index

接口
====
[接口文档](./docs/api.md)
