---
title: vue vue-router vuex
---

## vue

### jsx


### 函数式组件




## vuex


### 动态注入 modlue



## vue-router

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
