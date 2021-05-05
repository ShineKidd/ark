---
title: webpack5
---

三大变化

1. 持久缓存
2. tree shaking 增强
3. module federation


### 持久缓存

```js webpack.config.js
module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  watch: true,
  cache: {
    type: 'memory', // memory|filesystem
    cacheDirectory:  path.resolve(__dirname, 'node_modules/.cahce/webpack')
  },
  devServer: {
    port: 8080,
  }
}
```

::: warning
cache type 设置为 filesystem 和 cnpm 不兼容
:::


### 内置 loader

raw-loader file-loader url-loader

```js
module: {
  rules: [
    {
      test: /\.png$/,
      type: 'asset/resoucre', // file-loader
    },
    {
      test: /\.text$/,
      type: 'asset/soucre', // raw-loader
    },
    {
      test: /\.ico$/,
      type: 'asset/inline', // url-loader 小于指定值，默认 base64

    }
  ]
}

```

### 支持 URIs

```js
import title from 'data:text/javascript,export default "title"'
```


### chunkId

webpack4 默认是自然数递增（natural），不合理

```js
entry: {
  main: './src/index.js',
},
optimization: {
  chunkIds: 'deterministic', // natural|named|deterministic
  moduleIds: 'deterministic', // natural|named|deterministic
},
output: {
  filename: '[name].js', // 入口文件打包名
  chunkFilename: '[name].js', // 非入口文件，如异步加载文件打包名
},
```


### 不自动 polyfill nodejs 包


```js
resolve: {
  // 向下兼容
  fallback: {
    'stream': false,
    'stream': false,
    'buffer': false,
  },
  // 或者
  // fallback: {
  //   'crypto': require.resolve('crypto-browserify'),
  //   'stream': require.resolve('stream-browserify'),
  //   'buffer': require.resolve('buffer'),
  // }
}
```


### tree shaking 增强


```js
optimization: {
  usedExports: true,
}
```

### sideEffects

```json package.json
"sideEffects": ["*.css"],

```
### module federation

```js
// remote webpack.config.js
plugins: [
  new ModuleFederationPlugin({
    name: 'remoteVar', // 暴露的全局变量名
    filename: 'remoteEntry.js', // 打包的入口文件
    exposes: {
      './NewsList.vue': './scr/components/NewsList.vue', // 暴露的共享组件
    },
    shared: ['vue', 'vue-router'], // 共享的库
  })
]
// host webpack.config.js
plugins: [
  new ModuleFederationPlugin({
    name: 'host', // 暴露的全局变量名
    filename: 'hostEntry.js', // 打包的入口文件
    remotes: {
      'remote': 'remoteVar@http://localhost:8080/remoteEntry.js', // 暴露的共享组件
    },
    shared: ['vue', 'vue-router'], // 共享的库
  })
]
```

:::tip
shard 是多版本共存，内部做版本检查，默认在所有版本中选择最高版本
:::


### Top await

```js
const NewsList = await import('remote/NewsList.vue')
```
