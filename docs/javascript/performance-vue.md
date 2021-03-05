---
title: vue 性能优化
---

问题：单页应用，加载速度慢，首页白屏时间长

Document Content Load

First Paint  ==> `<div id="app"></div>` 骨架屏

First Contentful Paint ==> 静态 dom 生成

First Meaningful Paint  ==> ajax 数据回来

Time To Interactive

(Largest Contentful Paint)


### 优化点：

1. v-for

如果页面有交互出发列表变化，需要指定唯一的 key 值

2. keep-alive

include 属性设置要缓存的组件名

3. 按需引入组件

4. 路由分割


### SSR Vs 同构

SSR 服务端渲染（php、jsp）

预渲染：通过无头浏览器预先执行代码，生成 html 内容（骨架屏）

同构：一套代码客户端，服务端同时使用（vue、react、nuxt）中间 node 层预渲染页面（并发时服务压力大）

cdn 请求时间片

quickLink


DNS:
dns-preftch
preconnect

prefetch
preload
prerender
