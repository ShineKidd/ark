---
title: nodejs 服务性能优化
---

计算机性能优化的本质
- 减少不必要的计算(也可提前计算，降低延迟感)
- 空间换时间


## ab 压力测试

- 在客户端模拟并发请求

```bash
ab http://127.0.0.1:300 -c200 -n1600 # 查看并发量、吞吐量
```

- 在服务端监控 cup 内存 硬盘状态

```bash
top # cpu 监测
iostat # 磁盘 io 监测
```


## 服务运行性能

- 使用 node 自带工具进行调试

```bash
node --prof entry.js # 生成日志文件
node --prof-process xx.log > profile.txx # 处理日志文件，产生分析结果
```

- 使用 chrome devtools 进行可视化调试

```bash
node --inspect-brk entry.js
```


在 chrome 地址栏输入 chrome://inspect ，进入调试

- 使用 [clinic.js](https://www.npmjs.com/package/clinic)


## 常见性能问题

- 中间件中，频繁凡调用某些耗时的方法，如 `fs.readFileSync()`
- nodejs 底层调用 c++ ，会把字符串转成 buffer

```js
const buffer = fs.readFileSync(__dirname, '/srouce/index.html'/* , 'utf-8' */)
mount('/', async (ctx) => {
  ctx.status = 200
  ctx.body = buffer // 直接返回 buffer 免了来回转换，提升性能
  ctx.type = 'html' // 指定类型，浏览器会执行下载操作
})
```
