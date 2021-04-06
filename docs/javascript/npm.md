---
title: npm
---

npm 从 cli 环境变量，npmrc 文件获取配置信息
## .npmrc

```bash
projectRootDir/.npmrc
~/.npmrc
```

指定的包配置特定的源

```bash
# @babel/{a,b,c..} 走这个源下载 npm 包
@babel:registry=http://192.168.31.16:4873
@vue:registry=http://192.168.31.56:4877
```
## package.json

设置 `"private": true` 防止包被发到公网

- types typings



## package-lock.json

