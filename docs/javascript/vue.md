---
title: vue vue-router vuex
---

## vue 2.x

渲染流程

new Vue -> init -> $mount -> compile(可在构建工具 vue-loader 完成) -> render -> vnode -> patch -> DOM



### jsx

### 函数式组件




## vuex 3.x


### 动态注入 modlue



## vue-router 3.x

### 路由异步组件的实现

> https://marskid.net/2018/11/11/vue-router-lazy-loading/

```js
const LoadingView = {
  functional: true,
  props: {},
  render (h, context) {
    return h('div', {}, 'Loading...')
  },
}

const ErrorView = {
  functional: true,
  props: {},
  render (h, context) {
    return h('div', {}, 'Unexception Error')
  },
}

function createLazy (component) {
  const View = () => ({
    component,
    loading: LoadingView,
    error: ErrorView,
    delay: 200,
    timeout: 3000
  })

  return Promise.resolve({
    functional: true,
    render (h, { data, children }) => h(View, data, chilren),
  })
}

const routes = [
  {
    path: '/user',
    component: () => createLazy(import('@/views/user/index.vue')),
  },
]
```

:::warning
组件内的路由导航守卫失效！
:::


### 如何重置路由

```js
const createRouter = (routes) => {
  return new VueRouter({
    routes,
    scrollBehavior (to, from, savedPos) {
      return { x: 0, y: 0 }
    },
  })
}

const resetRouter = () => {
  const newRouter = createRouter([]),
  router.matcher = newRouter.matcher
  if (router.currentRoute.path !== '/') {
    router.push('/')
  }
}
```

:::warning
这里使用了非标准 API！
:::


## vue 3.x

- 更易维护的代码 monorepo，模块之间依赖明确，职责鲜明，可单独引入模块（tree-shaking）
- 更好的 typescript 支持
- 编译时优化，标记静态节点，以实现 patch 过程只比较动态节点, 优化 slot ，事件监听函数缓存优化
- proxy 更好的数据劫持性能
- 重写了 diff 算法
- 组合 API ，更好的逻辑复用，代码组织和类型支持（mixin 存在命名冲突、数据来源不清晰）
