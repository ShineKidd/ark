---
title: webpack
---

基于 webpack4.x 整理

### Getting Started

无需配置，`webpack` 能直接处理 js/json，支持 ES module

```bash
webpack src/entry.js -o dits/bundle.js --mode=development
```

`webpack` 默认读取工作目录下的 `webpack.config.js` 文件

## Config

### mode

production 模式下会自动压缩 js 代码

```js
{
  // mode: 'production',
  mode: 'develoment',
}
```

### entry

单文件入口，打包后只生成一个 chunk `main.js`

```js
{
  entry: 'src/index.js',
  // entry: ['src/index.js', 'public/index.html'],
}
```

多文件入口，打包后生成多个 chunk `page1.js` `page2.js` 可用于多页面打包

```js
{
  entry: {
    page1: 'src/page1/index.js',
    page2: 'src/page2/index.js',
  },
}
```


### output

```js
{
  output: {
    /* 指定目录 + 名称 */
    filename: 'js/[name].[contenthash:10].js',

    /* 指定打包结果统一输出目录 */
    path: resolve(__dirname, 'dist'),

    /* 所有资源引入路径的前缀 */
    publicPath: '/'，

    /**
     * 指定非入口 chunk 的命名规则
     * 如 import() 引入的资源，名字默认是 [数字].js
     */
    chunkFilename: '[name]_[chunkhash].chun.js',

    /* 向外暴露的变量名 */
    library: 'myTool',
    /* 输出哪种模块规范 */
    libraryTarget: 'commonjs', // amd | umd | global | window
  }
}
```

### loader

```js
{
  module: {
    /* 不参与解析的库 */
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      // 配置形式一
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {...}
          }
        ],
        sideEffects: true,
      },
      // 配置形式二
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 4096,
          outputPath: 'imgs',
        },
      },
    ]
  }
}
```

::: warning ⚠️
 写在后面的 loader 先执行，并将执行结果交由前一个 loader 处理
:::

### plugins

```js
{
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
}
```

### optimization

```js
{
  optimization: {
    /* 生产环境开启压缩 */
    minimize: isEnvProduction,
    splitChunks: {
      /**
       * 将 node_modules 的代码打包成一个单独的 chunk
       * 会自动分析多入口，并抽离公共的依赖
       */
      chunks: 'all',
      /* 当 chunk 大于 30k 才会被分割出来 */
      minSize: 30 * 1024,
      maxSize: 0,
      /* 依赖至少被引用 1次 */
      minChunks: 1,
      /* 按需加载时，并行加载文件的最大数量 */
      maxAsyncRequests: 5,
      /* 入口 js 文件最大并行请求数 */
      maxInitialRequests: 3,
      /* 命名连接符号 */
      automaticNameDelimiter: '~',
      /* 可以使用命名规则 */
      name: true,
      /* 分割 chunk 的组，以上规则对分组有效 */
      cacheGroups: {
        /* node_modules 目录下的包抽离到 vendors.js */
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        common: {
          minChunks: 2,
          priority: -20,
          /* 复用已提取过的模块，以免重复打包 */
          reuseExistingChunk: true,
        }
      }
    },
    /**
     * 当 chunkA 依赖 chunkB 时，
     * 当 chunkA 内记录了 chunkB 的 hash
     * chunkB hash 变化导致 chunkA 内容变化...连锁反应
     * 将模块记录的 hash 单独打包成一个文件，变化缩小在这个文件内
     */
    runtimeChunk: {
      name: entryPoint => `runtime~${entryPoint.name}`,
    },
    /**
     * 配置生产环境 js css 压缩方案
     * webpack 4.26.x 内部使用 terser-webpack-plugin 做代码压缩
     */
    minimizer: [
      /* 压缩 js */
      new TerserWebpackPlugin({
        cache: true,
        parallel: true, // 多进程
        sourceMap: false,
      }),
      /* 压缩 css */
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {...},
        cssProcessorPluginOptions: {...},
      }),
    ],
  },
}
```


### devServer

执行 `npx webpack-dev-server`，编译打包结果保存在内存，不输出文件，watch 文件变化后自动编译

```js
{
  /* 打包输出目录 ???? */
  conentBase: resolve(__dirname, 'dist'),

  // watchContentBase: true,
  watchOptions: {
    ignored: /[\\/]node_modules[\\/]/
  },
  /* 启用 gizp */
  compress: true,
  port: 8080,
  /* 在浏览器中打开 */
  open: true,
  /* HMR */
  hot: true,
  host: 'localhost',
  proxy: {
    /* 转发 /api/xxx 开头的请求到指定服务器 */
    '/api': {
      target: 'http://api.host.com:3000',
      /* 转发请求前，重写接口地址(去掉 /api 前缀) */
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  /* 不要显示启动服务器日志信息 */
  clientLogLevel: 'none',
  /* 只显示基本信息 */
  quiet: true,
  /* 出错了不要全屏提示 */
  overlay: false,
}
```

`style-loader` `vue-loader` 内部实现了 `HMR`，但 js 默认没有实现，修改 js 文件会导致所以模块重新编译

示例：当 `math.js` 内容变化时，实现 `math.js` 热更新

```js
import { add } from './math'

add(1, 1)

// 判断是否开启了 HMR
if (module.hot) {
  module.hot.accept('./math.js', function () {
    add(1, 1)
  })
}

```

### peformance

关闭 webpack 自带的性能分析（提高速度），一般我们使用其他插件做性能分析

```js
{
  performance: false
}
```

### devtool

```js
{
  devtool: 'source-map',
}
```

取值 | 效果 | source map 文件
--  |  --  | --
source-map           | 打印错误文件名和行数，能跳转到源代码出错位置 | 完整到 sourceMap 文件
inline-source-map    | 同上                            | 把所有 sourceMap 内联到 js 尾部，优势：构建速度快
eval-source-map      | 文件名错误，其他同上               | 每个 sourceMap 分别内联到每个 eval 函数中
hidden-source-map    | 打印错误文件名，但行数错误，会跳转到构建后码出错位置 |
nosources-source-map  | 打印错误文件名和行数，无法跳转到代码出错位置 | 无 sourceMap 文件
cheap-source-map     | 打印错误文件名和行数，能跳转到源代码位置，不能精确定位到错误所在列
cheap-module-source-map | 同上                          | 会将 loader 的 source map 加进来

速度 eval > inline > cheap

速度 `eval-cheap-source-map` > `eval-source-map`

调试友好 `source-map` > `cheap-module-source-map` > `cheap-source-map`



### externals

指定外部库，不进行打包处理

```js
{
  externals: {
    jquery: 'jQuery',
  }
}
```

### resolve

配置模块的解析规则

```js
{
  resolve: {
    /* 路径别名 */
    alias: {
      @: resolve(__dirname, 'src')
    },

    /* 路径名可省略的文件类型后缀, 注：同名文件会隐患 */
    extensions: ['.js', '.json', '.vue', 'jsx'],

    /* 除了 node_modules 外的其他目录中寻找依赖模块 */
    modules: [ 'node_modules', resolve(__dirname, '../my-modules') ]
  }
}
```



### resolveLoadrs

```js
{
  resolveLoadrs: {
    modules: ['node_modules', path.resolve(__dirname, 'my-loaders')]
  }
}
```


## node

webpack4 会把一些 node 模块打包进来，但是在浏览器端用不上

```js
{
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
}
```

## Official Loader


loader 本质上是一个函数


同步 loader 示例

```js
module.exports = function (content, map, meta) {
  // process content...

  // 直接返回处理结果或使用回调
  return content // or this.call(err, content, map?, meta?)
}
// 各个 loader 的 pitch 函数是按配置 loader 的顺序执行
// 这和 use 中 loader 的执行顺序相反
module.exports.pitch = function () {

}
```

异步 loader 示例（推荐）

```js
const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')
const schema = {
  type: 'object', // 参数类型
  properties: { // 配置项及其值的类型
    maxSize: { type: 'string', description: '最大xxx值' }
  },
  additionalProperties: true, // 是否允许存在额外的属性
}

module.exports = function (content, map, meta) {
  // 获取 loder 的 options 配置
  const options = getOptions(this)
  // 校验 options 配置是否正确
  validate(schema, options, { name: 'my loader' })

  const callback = this.async()

  setTimeout(() => {
    callback(err, content, map?, meta?)
  }, 1000)
}
```

### style-loader


### css-loader

### postcss-loader

```js
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader', {
    loader: 'postcss-loader',
    options: {
      /* 固定写法 */
      ident: 'postcss',
      plugins() {
        return [
          /**
           * 该插件用于解析(package.json) browserslist 的配置
           * 以构建兼容到指定浏览器的 css
           */
          required('postcss-preset-env')(),
        ]
      }
    }
  }]
}
```

`package.json` 中的配置

```json
{
  "browserslist": {
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "production": [
      ">2%",
      "not dead",
      "not op_mini all"
    ],
  }
}
```

::: warning ⚠️
 `postcss-preset-env` 依赖 `process.env.NODE_ENV` 读取 `browserslist` 对应的配置，应确保该值正确设置
:::



### less-loader


### url-loader

```js
{
  test: /\.(bmp|jpe?g|png|gif)$/,
  loader: 'url-loader',
  options: {
    /* 转 base64 的上限 */
    limit: 4096,

    /* 使用 es module 解析 */
    esModule: true，

    name: '[contenthash:10].[ext]',

    fallback: {
      loader: 'option-loader',
      options: {
        name: 'media/[name][hash:8].[ext]'
      }
    }
  }
}
```

### file-loader

和 `url-loader` 类似，但是不会转 `base64`

```js
{
  // test: /\.(woff)$/, 可以不指定
  exclude: /\.(css|less|scss|js|json|jpe?g|png|gif|)$/,
  loader: 'file-loader',
  options: {
    name: '[contenthash:10].[ext]',
  }
}
```


### eslint-loader

安装 `eslint` `eslint-plugin-import`

```js
{
  test: /\.js$/,
  loader: 'eslint-loader',
  exclude: /[\\/]node_modules[\\/]/, // 提高性能
  enforce: 'pre', // 必须优先执行，检查不通过就不走后面的 loader
  options: {
    /* 自动修复错误 */
    fix: true,
  },
}
```

安装 `eslint-config-airbnb-base` 并在 `package.json` 中配置

```js
{
  "eslintConfig": {
    "extends": "airbnb-base",
    "env": {
      "browser": true
    }
  }
}
```

::: tip 💡
  设置 `env.browser`，否则 eslint 会判定 `window` `document`  `navigator` 是未声明变量
:::


常用的行内规则

```js
// eslint-disable-next-line

/* global jQuery */
```


### babel-loader

安装 `@babel/core` (核心) `@babel/preset-env`（规则集） `core-js`（兼容 API）

> As of Babel 7.4.0, `@babel/polyfill` has been deprecated in favor of directly including `core-js/stable` (to polyfill ECMAScript features) and `...


```js
{
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /[\\/]node_modules[\\/]/,
  options: {
    /* 预设规则 */
    presets: [
      ['@babel/preset-env', {
        /* 只引入使用到的 polyfill */
        useBuiltIns: 'useage',

        /* 指定当前安装的版本 */
        corejs: { version: 3 },

        targets: {
          chrome: '60',
          firefox: '60',
          safari: '10',
          ie: '10',
          edge: '17'
        }
      }]
    ],
    /* 二次构建时，读取之前 的缓存 */
    cacheDirectory: true,
  }
}
```

`babel-loader` 本身支持缓存，可以不使用 `cache-loader`

### thread-loader

配合 `babel-loader` 开启多进程编译

```js
{
  test: /\.js$/,
  use: [
    {
      loader: 'thread-loader',
      options: {
        /* 进程个数 */
        workers:
      }
    },
    { loader: 'babel-loader', exclude: /[\\/]node_modules[\\/]/, options: {...} }
  ]
}
```

::: warning ⚠️
  进程启动大概 600ms ，进程之间通信也要消耗时间，如果项目非常小，没有必要使用
:::

### cache-loader


## Official Plugin

webpack 定义了很多编译过程中的钩子，这些钩子 Tapable 类的实现

```js
const { RawSource } = require('webpack-sources')
const { validate } = require('schema-utils')
const globby = require('globby')
const schema = {
  type: 'object',
  properties: {
    to: { type: 'string', description: '起始目录' } ,
    from: { type: 'string', description: '目标目录' } ,
    ignore: { type: 'array', description: '忽略文件' }
  },
  additionalProperties: false
}

class MyPlugin {
  constructor (options = {}) {
    validate(schema, options, { name: 'MyPlugin' })
    this.options = options
  }
  apply (compiler) {
    compiler.hooks.thisCompilation.tap('MyPlugin', function (compilation) {
      compilation.hooks.additionalAssets.tapAsync('MyPlugin', async function (cb) {
        // 手动添加文件
        compilation.emitAsset('a.txt', {
          size() { return 5 },
          source() { return 'hello' }
        })
        // 使用 webpack-sources 转化文件
        const data = fs.readFileSync(resolve(__dirname, 'b.text'), 'utf-8')
        compilation.emitAsset('b.text', new RawSource(data))

        // 复制指定目录的文件
        const baseDir = compiler.options.context
        const toDir = this.options.to || '.'
        const { from, ignore } = this.options
        const fromDir = path.isAbsolute(from) ? from : path.resolve(__dirname, this.options.from)
        const paths = await globby(fromDir, { ignore }) // 获取要复制的文件的路径
        for (const filePath of paths) {
          const data = fs.readFileSync(filePath, 'utf-8')
          const relativePath = path.basename(filePath)
          const filename = path.join(to, relativePath)
          compilation.emitAsset(filename, new RawRouce(data))
        }
        cb()
      })
    })
  }
}
module.exports = MyPlugin
```

测试 MyPlugin
```js
new MyPlugin({
  from: 'public',
  to: 'dist',
  ignore: ['**/index.html']
})

```

### html-webpack-plugin


```js
new HtmlWebpackPlugin({
  /* 指定 html 模版，不指定会自动生成 index.html */
  template: 'public/index.html',

  /* 压缩 */
  minify: {
    collapseWhiteSpace: true,
    removeComments: true,
  }
})
```

### inline-chunk-html-plugin

将 js 内联到 index.html 中

```js
isEnvProduction && new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.+\.js/])
```

### mini-css-extract-plugin

配合其内置的 loader ，可以提取 css 为外置连接引入

```js
// 设置 css loader
{
  test: /\.css$/,
  use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
}

// 添加 plugin
new MiniCssExtractPlugin({
  filename: 'css/app.css',
})
```


### @intervolga/optimize-cssnano-plugin



### optimize-css-assets-webpack-plugin

用于压缩 css 文件

```js
new OptimizeCssAssetsWebpackPlugin()
```

::: tip 💡
  行文中的 `resolve` 函数是 `path.resolve`
:::


### workbox-webpack-plugin

使用 serviceWorker 构建 PWA 渐进式网络开发应用程序，使用该插件生成 `service-worker.js` 配置文件

```js
{
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      /**
       * 帮助 serviceWorker 快速启动
       * 删除旧的 serviceWorker
       */
      clientsClaim: true,
      skipWaiting: true,
    })
  ]
}
```

在 main.js 注册 serviceWorker

```js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker')
      .then(console.log)
      .catch(console.error)
  })
}
```


### webpack.DllPlugin

对某些（第三方）库*预先*进行单独打包好，开发过程中之间引入打包结果，跳过该部分文件的打包，以提高构建速度

```js
// webpack.dll.js
const { resolve } = require('path')
const webapck = require('webpack')

module.exports = {
  entry: {
    dll: ['vue', 'vue-router', 'jQuery']
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'vendor'),
    library: '[name]_[hash]',
  },
  plugins: [
    /* 生成 manifest.json 提供生成 dll 的映射关系 */
    new webpack.DllPlugin({
      /* 同 output.library 配置 */
      name: '[name]_[hash]',
      path: resolve(__dirname, 'vendor/manifest.json'),
    })
  ],
  mode: 'production',
}
```

执行 `npx webpack --config webpack.dll.js` 打包生成 `dll.js` 和 `manifest.json`

修改 `webpack.config.js` 配置，应用打包结果

```js
{
  plugins: [
    /* webpack 根据 manifest 忽略已打包到 dll.js 中的文件 */
    new webpack.ReferencePlugin({
      manifest: resolve(__dirname, 'vendor/manifest.json'),
    }),
    /* 将预先打包好的 dll.js 插入到 inex.html 中  */
    new require('add-assets-html-webpack-plugin')({
      filepath: resolve(__dirname, 'vendor/dll.js')
    })
  ]
}
```

### webpack.DefinePlugin

```js
new webpack.DefinePlugin({
  NODE_ENV: JSON.stringify('production'),
  PUBLIC_URL: JSON.stringify('/'),
}),
```

### webpack.HotModuleReplacementPlugin

```js
isEnvProduction && new webpack.HotModuleReplacementPlugin()
```

### webpack.IgnorePlugin


```js
// https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
// or
new wepback.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-ch/)
```


### manifest-plugin



## Hash

类型         | 描述
--          | --
hash        | 每次构建都会变化（除非你不想缓存静态资源）
chunkhash   | 根据 chunk 生成，当 main.js 引入 css 时，css 内容变化，也会导致生成的 js 文件 hash 变化，且 hash 一样
contenthash | 根据文件内容生产 hash（可靠）

## Tree Shaking

前提：1. 使用 ES module 2. mode 设置为 production

`import "./style/index.less"` 被 shaking 掉了？！要正确配置项目 `package.json` 中的 `sideEffects` 字段，

```json
{
  "sideEffects": ["*.css", "*.less"]
}
```


## Code Split

使用 `import()` 语法，webpack 会自动将模块单独打包，可以实现运行时加载(lazy load) 和 浏览器空闲时加载(prefetch)

```js
/* 如果不指定 `webpackChunkName` 文件名是数字递增，不友好 */
import(/* webpackChunkName: math, webpackPrefetch: true */, './math')
  .then(function({ add }) {
    add(1, 2)
  })
```

::: warning ⚠️
 预加载需要浏览器支持，注意兼容性问题
:::


## Optimize


- 打包速度
  1. loader 使用 oneOf ，命中一个 loader 就不走其他 loader 了
     使用 `exclude` 排除 `node_modules` 之类的目录
  ```js
  {
    rules: [
      /* 有两种 loader 处理了 js文件，这里要提到 oneOf 外面，否则有一个不生效  */
      { test: /\.js$/, loader: 'eslint-loader', enforce: 'pre' },
      {
        oneOf: [
          { test: /\.js$/, loader: 'babel-loader' },
        ]
      }
    ]
  }
  ```

  2. 使用 `thread-loader` 开启多进程打包
  3. 使用 `webpack.DllPlugin` 预先打包好一些第三方库（这些依赖不会轻易更新），再打包时跳过这些库
  4. 配置 `externals` 某些文件走 CDN，直接跳过打包
  4. 配置 `devServer.watchOptions.ignored` 忽略某些目录(node_modules)
  5. 配置 `cache-loader` 缓存编译结果
  6. contenthas 是否比 has 更慢？



### development


- HMR
  1. devServer 开启 Hot Module Replace


- 调试体验
  1. 兼顾编译速度和调试友好，devtool 选择 `eval-source-map`（调试更好）或 `eval-cheap-module-source-map`（速度更快）


- 缓存
  1. `babel-loader` options 设置 `cacheDirectory: true`

### production

- 运行时性能

- 隐藏源码
  1. devtool 设置为 `nosources-source-map` 或 false 。切忌使用 inline- ，这会使代码体积变得很大！
  2. 混淆

- 加载速度
  1. 使用 ES module 以实现 tree shaking
  3. 静态资源预先 gzip（服务器需开启对应配置）
  4. 配置 `optimization: { splitChunks }` 抽离公共依赖为单独 chunk 降低代码变动缓存失效
  5. 使用 `import()` 实现懒加载、预加载
  6. 配置 externals ，配置 CDN


- 缓存
  1. 避免缓存失效：文件名不使用 `hash` `chunkhash`，启用 `runtimeChunk`
  2. 避免缓存不失效：静态资源输出文件名使用 `contenthash` 后缀，文件改动部署后，浏览器请求最新构建结果
