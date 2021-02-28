---
title: Tapable 库的实现
---

> see [webpack/tapable](https://github.com/webpack/tapable)


```js
const {
  SyncHook,
  SyncBailHook, // 一旦其中一个函数有返回值就退出
  AsyncParallelHook, // 异步并行
  AsyncSeriesHook, // 异步串行
} = require('tapable')

class Person {
  constructor() {
    this.hooks = {
      walk: new SyncHook(defArg: any[]),
      eat: new AsyncSeriesHook(defArg: any[]),
    }
  }
  tap () {
    this.hooks.walk.tap('syncA', function (arg) {

    })
    // 注册异步法一
    this.hooks.eat.tapAsync('asyncA', function (food1, food2, cb) {
      setTimeout(() => {
        cb()
      }, 1000)
    })
    // 注册异步法二
    this.hooks.eat.tapPromise('asyncB', function (food1, food2) {
      return new Promise(function (resolve, rejct) {

      })
    })
  }
  start () {
    this.hooks.walk.call('林间小道')
    this.hooks.eat.callAsync('粗菜淡饭', '五谷杂粮', function () {
      // all done
    })
  }
}
```
