import{_ as n,c as s,o as a,b as p}from"./app.b2e40202.js";const m='{"title":"webpack","description":"","frontmatter":{"title":"webpack"},"headers":[{"level":3,"title":"Getting Started","slug":"getting-started"},{"level":2,"title":"Config","slug":"config"},{"level":3,"title":"mode","slug":"mode"},{"level":3,"title":"entry","slug":"entry"},{"level":3,"title":"output","slug":"output"},{"level":3,"title":"loader","slug":"loader"},{"level":3,"title":"plugins","slug":"plugins"},{"level":3,"title":"optimization","slug":"optimization"},{"level":3,"title":"devServer","slug":"devserver"},{"level":3,"title":"peformance","slug":"peformance"},{"level":3,"title":"devtool","slug":"devtool"},{"level":3,"title":"externals","slug":"externals"},{"level":3,"title":"resolve","slug":"resolve"},{"level":3,"title":"resolveLoadrs","slug":"resolveloadrs"},{"level":2,"title":"node","slug":"node"},{"level":2,"title":"Official Loader","slug":"official-loader"},{"level":3,"title":"style-loader","slug":"style-loader"},{"level":3,"title":"css-loader","slug":"css-loader"},{"level":3,"title":"postcss-loader","slug":"postcss-loader"},{"level":3,"title":"less-loader","slug":"less-loader"},{"level":3,"title":"url-loader","slug":"url-loader"},{"level":3,"title":"file-loader","slug":"file-loader"},{"level":3,"title":"eslint-loader","slug":"eslint-loader"},{"level":3,"title":"babel-loader","slug":"babel-loader"},{"level":3,"title":"thread-loader","slug":"thread-loader"},{"level":3,"title":"cache-loader","slug":"cache-loader"},{"level":2,"title":"Official Plugin","slug":"official-plugin"},{"level":3,"title":"html-webpack-plugin","slug":"html-webpack-plugin"},{"level":3,"title":"inline-chunk-html-plugin","slug":"inline-chunk-html-plugin"},{"level":3,"title":"mini-css-extract-plugin","slug":"mini-css-extract-plugin"},{"level":3,"title":"@intervolga/optimize-cssnano-plugin","slug":"intervolga-optimize-cssnano-plugin"},{"level":3,"title":"optimize-css-assets-webpack-plugin","slug":"optimize-css-assets-webpack-plugin"},{"level":3,"title":"workbox-webpack-plugin","slug":"workbox-webpack-plugin"},{"level":3,"title":"webpack.DllPlugin","slug":"webpack-dllplugin"},{"level":3,"title":"webpack.DefinePlugin","slug":"webpack-defineplugin"},{"level":3,"title":"webpack.HotModuleReplacementPlugin","slug":"webpack-hotmodulereplacementplugin"},{"level":3,"title":"webpack.IgnorePlugin","slug":"webpack-ignoreplugin"},{"level":3,"title":"manifest-plugin","slug":"manifest-plugin"},{"level":2,"title":"Hash","slug":"hash"},{"level":2,"title":"Tree Shaking","slug":"tree-shaking"},{"level":2,"title":"Code Split","slug":"code-split"},{"level":2,"title":"Optimize","slug":"optimize"},{"level":3,"title":"development","slug":"development"},{"level":3,"title":"production","slug":"production"}],"relativePath":"javascript/webpack-5.md","lastUpdated":1636875147167}',t={},e=p(`__VP_STATIC_START__<p>\u57FA\u4E8E webpack4.x \u6574\u7406</p><h3 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h3><p>\u65E0\u9700\u914D\u7F6E\uFF0C<code>webpack</code> \u80FD\u76F4\u63A5\u5904\u7406 js/json\uFF0C\u652F\u6301 ES module</p><div class="language-bash"><pre><code>webpack src/entry.js -o dits/bundle.js --mode<span class="token operator">=</span>development
</code></pre></div><p><code>webpack</code> \u9ED8\u8BA4\u8BFB\u53D6\u5DE5\u4F5C\u76EE\u5F55\u4E0B\u7684 <code>webpack.config.js</code> \u6587\u4EF6</p><h2 id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-hidden="true">#</a></h2><h3 id="mode" tabindex="-1">mode <a class="header-anchor" href="#mode" aria-hidden="true">#</a></h3><p>production \u6A21\u5F0F\u4E0B\u4F1A\u81EA\u52A8\u538B\u7F29 js \u4EE3\u7801</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">// mode: &#39;production&#39;,</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;develoment&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="entry" tabindex="-1">entry <a class="header-anchor" href="#entry" aria-hidden="true">#</a></h3><p>\u5355\u6587\u4EF6\u5165\u53E3\uFF0C\u6253\u5305\u540E\u53EA\u751F\u6210\u4E00\u4E2A chunk <code>main.js</code></p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  entry<span class="token operator">:</span> <span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// entry: [&#39;src/index.js&#39;, &#39;public/index.html&#39;],</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u591A\u6587\u4EF6\u5165\u53E3\uFF0C\u6253\u5305\u540E\u751F\u6210\u591A\u4E2A chunk <code>page1.js</code> <code>page2.js</code> \u53EF\u7528\u4E8E\u591A\u9875\u9762\u6253\u5305</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  entry<span class="token operator">:</span> <span class="token punctuation">{</span>
    page1<span class="token operator">:</span> <span class="token string">&#39;src/page1/index.js&#39;</span><span class="token punctuation">,</span>
    page2<span class="token operator">:</span> <span class="token string">&#39;src/page2/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="output" tabindex="-1">output <a class="header-anchor" href="#output" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token punctuation">{</span>
  output<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u6307\u5B9A\u76EE\u5F55 + \u540D\u79F0 */</span>
    filename<span class="token operator">:</span> <span class="token string">&#39;js/[name].[contenthash:10].js&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">/* \u6307\u5B9A\u6253\u5305\u7ED3\u679C\u7EDF\u4E00\u8F93\u51FA\u76EE\u5F55 */</span>
    path<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">/* \u6240\u6709\u8D44\u6E90\u5F15\u5165\u8DEF\u5F84\u7684\u524D\u7F00 */</span>
    publicPath<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>\uFF0C

    <span class="token comment">/**
     * \u6307\u5B9A\u975E\u5165\u53E3 chunk \u7684\u547D\u540D\u89C4\u5219
     * \u5982 import() \u5F15\u5165\u7684\u8D44\u6E90\uFF0C\u540D\u5B57\u9ED8\u8BA4\u662F [\u6570\u5B57].js
     */</span>
    chunkFilename<span class="token operator">:</span> <span class="token string">&#39;[name]_[chunkhash].chun.js&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">/* \u5411\u5916\u66B4\u9732\u7684\u53D8\u91CF\u540D */</span>
    library<span class="token operator">:</span> <span class="token string">&#39;myTool&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">/* \u8F93\u51FA\u54EA\u79CD\u6A21\u5757\u89C4\u8303 */</span>
    libraryTarget<span class="token operator">:</span> <span class="token string">&#39;commonjs&#39;</span><span class="token punctuation">,</span> <span class="token comment">// amd | umd | global | window</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="loader" tabindex="-1">loader <a class="header-anchor" href="#loader" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u4E0D\u53C2\u4E0E\u89E3\u6790\u7684\u5E93 */</span>
    noParse<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(vue|vue-router|vuex|vuex-router-sync)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// \u914D\u7F6E\u5F62\u5F0F\u4E00</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        sideEffects<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u914D\u7F6E\u5F62\u5F0F\u4E8C</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpe?g|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        loader<span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        options<span class="token operator">:</span> <span class="token punctuation">{</span>
          limit<span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
          outputPath<span class="token operator">:</span> <span class="token string">&#39;imgs&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u26A0\uFE0F</p><p>\u5199\u5728\u540E\u9762\u7684 loader \u5148\u6267\u884C\uFF0C\u5E76\u5C06\u6267\u884C\u7ED3\u679C\u4EA4\u7531\u524D\u4E00\u4E2A loader \u5904\u7406</p></div><h3 id="plugins" tabindex="-1">plugins <a class="header-anchor" href="#plugins" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="optimization" tabindex="-1">optimization <a class="header-anchor" href="#optimization" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token punctuation">{</span>
  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u751F\u4EA7\u73AF\u5883\u5F00\u542F\u538B\u7F29 */</span>
    minimize<span class="token operator">:</span> isEnvProduction<span class="token punctuation">,</span>
    splitChunks<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">/**
       * \u5C06 node_modules \u7684\u4EE3\u7801\u6253\u5305\u6210\u4E00\u4E2A\u5355\u72EC\u7684 chunk
       * \u4F1A\u81EA\u52A8\u5206\u6790\u591A\u5165\u53E3\uFF0C\u5E76\u62BD\u79BB\u516C\u5171\u7684\u4F9D\u8D56
       */</span>
      chunks<span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">/* \u5F53 chunk \u5927\u4E8E 30k \u624D\u4F1A\u88AB\u5206\u5272\u51FA\u6765 */</span>
      minSize<span class="token operator">:</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
      maxSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token comment">/* \u4F9D\u8D56\u81F3\u5C11\u88AB\u5F15\u7528 1\u6B21 */</span>
      minChunks<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token comment">/* \u6309\u9700\u52A0\u8F7D\u65F6\uFF0C\u5E76\u884C\u52A0\u8F7D\u6587\u4EF6\u7684\u6700\u5927\u6570\u91CF */</span>
      maxAsyncRequests<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token comment">/* \u5165\u53E3 js \u6587\u4EF6\u6700\u5927\u5E76\u884C\u8BF7\u6C42\u6570 */</span>
      maxInitialRequests<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token comment">/* \u547D\u540D\u8FDE\u63A5\u7B26\u53F7 */</span>
      automaticNameDelimiter<span class="token operator">:</span> <span class="token string">&#39;~&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">/* \u53EF\u4EE5\u4F7F\u7528\u547D\u540D\u89C4\u5219 */</span>
      name<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">/* \u5206\u5272 chunk \u7684\u7EC4\uFF0C\u4EE5\u4E0A\u89C4\u5219\u5BF9\u5206\u7EC4\u6709\u6548 */</span>
      cacheGroups<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">/* node_modules \u76EE\u5F55\u4E0B\u7684\u5305\u62BD\u79BB\u5230 vendors.js */</span>
        vendors<span class="token operator">:</span> <span class="token punctuation">{</span>
          test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          priority<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        common<span class="token operator">:</span> <span class="token punctuation">{</span>
          minChunks<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          priority<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token comment">/* \u590D\u7528\u5DF2\u63D0\u53D6\u8FC7\u7684\u6A21\u5757\uFF0C\u4EE5\u514D\u91CD\u590D\u6253\u5305 */</span>
          reuseExistingChunk<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/**
     * \u5F53 chunkA \u4F9D\u8D56 chunkB \u65F6\uFF0C
     * \u5F53 chunkA \u5185\u8BB0\u5F55\u4E86 chunkB \u7684 hash
     * chunkB hash \u53D8\u5316\u5BFC\u81F4 chunkA \u5185\u5BB9\u53D8\u5316...\u8FDE\u9501\u53CD\u5E94
     * \u5C06\u6A21\u5757\u8BB0\u5F55\u7684 hash \u5355\u72EC\u6253\u5305\u6210\u4E00\u4E2A\u6587\u4EF6\uFF0C\u53D8\u5316\u7F29\u5C0F\u5728\u8FD9\u4E2A\u6587\u4EF6\u5185
     */</span>
    runtimeChunk<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">name</span><span class="token operator">:</span> <span class="token parameter">entryPoint</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">runtime~</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entryPoint<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/**
     * \u914D\u7F6E\u751F\u4EA7\u73AF\u5883 js css \u538B\u7F29\u65B9\u6848
     * webpack 4.26.x \u5185\u90E8\u4F7F\u7528 terser-webpack-plugin \u505A\u4EE3\u7801\u538B\u7F29
     */</span>
    minimizer<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">/* \u538B\u7F29 js */</span>
      <span class="token keyword">new</span> <span class="token class-name">TerserWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        cache<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        parallel<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u591A\u8FDB\u7A0B</span>
        sourceMap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">/* \u538B\u7F29 css */</span>
      <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        cssProcessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        cssProcessorPluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="devserver" tabindex="-1">devServer <a class="header-anchor" href="#devserver" aria-hidden="true">#</a></h3><p>\u6267\u884C <code>npx webpack-dev-server</code>\uFF0C\u7F16\u8BD1\u6253\u5305\u7ED3\u679C\u4FDD\u5B58\u5728\u5185\u5B58\uFF0C\u4E0D\u8F93\u51FA\u6587\u4EF6\uFF0Cwatch \u6587\u4EF6\u53D8\u5316\u540E\u81EA\u52A8\u7F16\u8BD1</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">/* \u6253\u5305\u8F93\u51FA\u76EE\u5F55 ???? */</span>
  conentBase<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// watchContentBase: true,</span>
  watchOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    ignored<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/* \u542F\u7528 gizp */</span>
  compress<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
  <span class="token comment">/* \u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 */</span>
  open<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/* HMR */</span>
  hot<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  host<span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
  proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u8F6C\u53D1 /api/xxx \u5F00\u5934\u7684\u8BF7\u6C42\u5230\u6307\u5B9A\u670D\u52A1\u5668 */</span>
    <span class="token string">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      target<span class="token operator">:</span> <span class="token string">&#39;http://api.host.com:3000&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">/* \u8F6C\u53D1\u8BF7\u6C42\u524D\uFF0C\u91CD\u5199\u63A5\u53E3\u5730\u5740(\u53BB\u6389 /api \u524D\u7F00) */</span>
      pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/* \u4E0D\u8981\u663E\u793A\u542F\u52A8\u670D\u52A1\u5668\u65E5\u5FD7\u4FE1\u606F */</span>
  clientLogLevel<span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/* \u53EA\u663E\u793A\u57FA\u672C\u4FE1\u606F */</span>
  quiet<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">/* \u51FA\u9519\u4E86\u4E0D\u8981\u5168\u5C4F\u63D0\u793A */</span>
  overlay<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>style-loader</code> <code>vue-loader</code> \u5185\u90E8\u5B9E\u73B0\u4E86 <code>HMR</code>\uFF0C\u4F46 js \u9ED8\u8BA4\u6CA1\u6709\u5B9E\u73B0\uFF0C\u4FEE\u6539 js \u6587\u4EF6\u4F1A\u5BFC\u81F4\u6240\u4EE5\u6A21\u5757\u91CD\u65B0\u7F16\u8BD1</p><p>\u793A\u4F8B\uFF1A\u5F53 <code>math.js</code> \u5185\u5BB9\u53D8\u5316\u65F6\uFF0C\u5B9E\u73B0 <code>math.js</code> \u70ED\u66F4\u65B0</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./math&#39;</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// \u5224\u65AD\u662F\u5426\u5F00\u542F\u4E86 HMR</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">&#39;./math.js&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="peformance" tabindex="-1">peformance <a class="header-anchor" href="#peformance" aria-hidden="true">#</a></h3><p>\u5173\u95ED webpack \u81EA\u5E26\u7684\u6027\u80FD\u5206\u6790\uFF08\u63D0\u9AD8\u901F\u5EA6\uFF09\uFF0C\u4E00\u822C\u6211\u4EEC\u4F7F\u7528\u5176\u4ED6\u63D2\u4EF6\u505A\u6027\u80FD\u5206\u6790</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  performance<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="devtool" tabindex="-1">devtool <a class="header-anchor" href="#devtool" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token punctuation">{</span>
  devtool<span class="token operator">:</span> <span class="token string">&#39;source-map&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th>\u53D6\u503C</th><th>\u6548\u679C</th><th>source map \u6587\u4EF6</th></tr></thead><tbody><tr><td>source-map</td><td>\u6253\u5370\u9519\u8BEF\u6587\u4EF6\u540D\u548C\u884C\u6570\uFF0C\u80FD\u8DF3\u8F6C\u5230\u6E90\u4EE3\u7801\u51FA\u9519\u4F4D\u7F6E</td><td>\u5B8C\u6574\u5230 sourceMap \u6587\u4EF6</td></tr><tr><td>inline-source-map</td><td>\u540C\u4E0A</td><td>\u628A\u6240\u6709 sourceMap \u5185\u8054\u5230 js \u5C3E\u90E8\uFF0C\u4F18\u52BF\uFF1A\u6784\u5EFA\u901F\u5EA6\u5FEB</td></tr><tr><td>eval-source-map</td><td>\u6587\u4EF6\u540D\u9519\u8BEF\uFF0C\u5176\u4ED6\u540C\u4E0A</td><td>\u6BCF\u4E2A sourceMap \u5206\u522B\u5185\u8054\u5230\u6BCF\u4E2A eval \u51FD\u6570\u4E2D</td></tr><tr><td>hidden-source-map</td><td>\u6253\u5370\u9519\u8BEF\u6587\u4EF6\u540D\uFF0C\u4F46\u884C\u6570\u9519\u8BEF\uFF0C\u4F1A\u8DF3\u8F6C\u5230\u6784\u5EFA\u540E\u7801\u51FA\u9519\u4F4D\u7F6E</td><td></td></tr><tr><td>nosources-source-map</td><td>\u6253\u5370\u9519\u8BEF\u6587\u4EF6\u540D\u548C\u884C\u6570\uFF0C\u65E0\u6CD5\u8DF3\u8F6C\u5230\u4EE3\u7801\u51FA\u9519\u4F4D\u7F6E</td><td>\u65E0 sourceMap \u6587\u4EF6</td></tr><tr><td>cheap-source-map</td><td>\u6253\u5370\u9519\u8BEF\u6587\u4EF6\u540D\u548C\u884C\u6570\uFF0C\u80FD\u8DF3\u8F6C\u5230\u6E90\u4EE3\u7801\u4F4D\u7F6E\uFF0C\u4E0D\u80FD\u7CBE\u786E\u5B9A\u4F4D\u5230\u9519\u8BEF\u6240\u5728\u5217</td><td></td></tr><tr><td>cheap-module-source-map</td><td>\u540C\u4E0A</td><td>\u4F1A\u5C06 loader \u7684 source map \u52A0\u8FDB\u6765</td></tr></tbody></table><p>\u901F\u5EA6 eval &gt; inline &gt; cheap</p><p>\u901F\u5EA6 <code>eval-cheap-source-map</code> &gt; <code>eval-source-map</code></p><p>\u8C03\u8BD5\u53CB\u597D <code>source-map</code> &gt; <code>cheap-module-source-map</code> &gt; <code>cheap-source-map</code></p><h3 id="externals" tabindex="-1">externals <a class="header-anchor" href="#externals" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u5916\u90E8\u5E93\uFF0C\u4E0D\u8FDB\u884C\u6253\u5305\u5904\u7406</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  externals<span class="token operator">:</span> <span class="token punctuation">{</span>
    jquery<span class="token operator">:</span> <span class="token string">&#39;jQuery&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="resolve" tabindex="-1">resolve <a class="header-anchor" href="#resolve" aria-hidden="true">#</a></h3><p>\u914D\u7F6E\u6A21\u5757\u7684\u89E3\u6790\u89C4\u5219</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u8DEF\u5F84\u522B\u540D */</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      @<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">/* \u8DEF\u5F84\u540D\u53EF\u7701\u7565\u7684\u6587\u4EF6\u7C7B\u578B\u540E\u7F00, \u6CE8\uFF1A\u540C\u540D\u6587\u4EF6\u4F1A\u9690\u60A3 */</span>
    extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jsx&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">/* \u9664\u4E86 node_modules \u5916\u7684\u5176\u4ED6\u76EE\u5F55\u4E2D\u5BFB\u627E\u4F9D\u8D56\u6A21\u5757 */</span>
    modules<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">,</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../my-modules&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="resolveloadrs" tabindex="-1">resolveLoadrs <a class="header-anchor" href="#resolveloadrs" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token punctuation">{</span>
  resolveLoadrs<span class="token operator">:</span> <span class="token punctuation">{</span>
    modules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;my-loaders&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-hidden="true">#</a></h2><p>webpack4 \u4F1A\u628A\u4E00\u4E9B node \u6A21\u5757\u6253\u5305\u8FDB\u6765\uFF0C\u4F46\u662F\u5728\u6D4F\u89C8\u5668\u7AEF\u7528\u4E0D\u4E0A</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  node<span class="token operator">:</span> <span class="token punctuation">{</span>
    module<span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
    dgram<span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
    dns<span class="token operator">:</span> <span class="token string">&#39;mock&#39;</span><span class="token punctuation">,</span>
    fs<span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
    http2<span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
    net<span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
    tls<span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
    child_process<span class="token operator">:</span> <span class="token string">&#39;empty&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="official-loader" tabindex="-1">Official Loader <a class="header-anchor" href="#official-loader" aria-hidden="true">#</a></h2><p>loader \u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u51FD\u6570</p><p>\u540C\u6B65 loader \u793A\u4F8B</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// process content...</span>

  <span class="token comment">// \u76F4\u63A5\u8FD4\u56DE\u5904\u7406\u7ED3\u679C\u6216\u4F7F\u7528\u56DE\u8C03</span>
  <span class="token keyword">return</span> content <span class="token comment">// or this.call(err, content, map?, meta?)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5404\u4E2A loader \u7684 pitch \u51FD\u6570\u662F\u6309\u914D\u7F6E loader \u7684\u987A\u5E8F\u6267\u884C</span>
<span class="token comment">// \u8FD9\u548C use \u4E2D loader \u7684\u6267\u884C\u987A\u5E8F\u76F8\u53CD</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">pitch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u5F02\u6B65 loader \u793A\u4F8B\uFF08\u63A8\u8350\uFF09</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getOptions <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;loader-utils&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> validate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;schema-utils&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u53C2\u6570\u7C7B\u578B</span>
  properties<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u914D\u7F6E\u9879\u53CA\u5176\u503C\u7684\u7C7B\u578B</span>
    maxSize<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&#39;\u6700\u5927xxx\u503C&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  additionalProperties<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5141\u8BB8\u5B58\u5728\u989D\u5916\u7684\u5C5E\u6027</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content<span class="token punctuation">,</span> map<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6 loder \u7684 options \u914D\u7F6E</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token comment">// \u6821\u9A8C options \u914D\u7F6E\u662F\u5426\u6B63\u786E</span>
  <span class="token function">validate</span><span class="token punctuation">(</span>schema<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;my loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> content<span class="token punctuation">,</span> map<span class="token operator">?</span><span class="token punctuation">,</span> meta<span class="token operator">?</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="style-loader" tabindex="-1">style-loader <a class="header-anchor" href="#style-loader" aria-hidden="true">#</a></h3><h3 id="css-loader" tabindex="-1">css-loader <a class="header-anchor" href="#css-loader" aria-hidden="true">#</a></h3><h3 id="postcss-loader" tabindex="-1">postcss-loader <a class="header-anchor" href="#postcss-loader" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token punctuation">{</span>
  test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  use<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    loader<span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">/* \u56FA\u5B9A\u5199\u6CD5 */</span>
      ident<span class="token operator">:</span> <span class="token string">&#39;postcss&#39;</span><span class="token punctuation">,</span>
      <span class="token function">plugins</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
          <span class="token comment">/**
           * \u8BE5\u63D2\u4EF6\u7528\u4E8E\u89E3\u6790(package.json) browserslist \u7684\u914D\u7F6E
           * \u4EE5\u6784\u5EFA\u517C\u5BB9\u5230\u6307\u5B9A\u6D4F\u89C8\u5668\u7684 css
           */</span>
          <span class="token function">required</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-preset-env&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>package.json</code> \u4E2D\u7684\u914D\u7F6E</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;development&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;last 1 chrome version&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;last 1 firefox version&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;last 1 safari version&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;production&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&gt;2%&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;not dead&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;not op_mini all&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u26A0\uFE0F</p><p><code>postcss-preset-env</code> \u4F9D\u8D56 <code>process.<wbr>env.NODE_ENV</code> \u8BFB\u53D6 <code>browserslist</code> \u5BF9\u5E94\u7684\u914D\u7F6E\uFF0C\u5E94\u786E\u4FDD\u8BE5\u503C\u6B63\u786E\u8BBE\u7F6E</p></div><h3 id="less-loader" tabindex="-1">less-loader <a class="header-anchor" href="#less-loader" aria-hidden="true">#</a></h3><h3 id="url-loader" tabindex="-1">url-loader <a class="header-anchor" href="#url-loader" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token punctuation">{</span>
  test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(bmp|jpe?g|png|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  loader<span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u8F6C base64 \u7684\u4E0A\u9650 */</span>
    limit<span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>

    <span class="token comment">/* \u4F7F\u7528 es module \u89E3\u6790 */</span>
    esModule<span class="token operator">:</span> <span class="token boolean">true</span>\uFF0C

    name<span class="token operator">:</span> <span class="token string">&#39;[contenthash:10].[ext]&#39;</span><span class="token punctuation">,</span>

    fallback<span class="token operator">:</span> <span class="token punctuation">{</span>
      loader<span class="token operator">:</span> <span class="token string">&#39;option-loader&#39;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;media/[name][hash:8].[ext]&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="file-loader" tabindex="-1">file-loader <a class="header-anchor" href="#file-loader" aria-hidden="true">#</a></h3><p>\u548C <code>url-loader</code> \u7C7B\u4F3C\uFF0C\u4F46\u662F\u4E0D\u4F1A\u8F6C <code>base64</code></p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">// test: /\\.(woff)$/, \u53EF\u4EE5\u4E0D\u6307\u5B9A</span>
  exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(css|less|scss|js|json|jpe?g|png|gif|)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  loader<span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;[contenthash:10].[ext]&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="eslint-loader" tabindex="-1">eslint-loader <a class="header-anchor" href="#eslint-loader" aria-hidden="true">#</a></h3><p>\u5B89\u88C5 <code>eslint</code> <code>eslint-plugin-import</code></p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  loader<span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
  exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// \u63D0\u9AD8\u6027\u80FD</span>
  enforce<span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u987B\u4F18\u5148\u6267\u884C\uFF0C\u68C0\u67E5\u4E0D\u901A\u8FC7\u5C31\u4E0D\u8D70\u540E\u9762\u7684 loader</span>
  options<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u81EA\u52A8\u4FEE\u590D\u9519\u8BEF */</span>
    fix<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5B89\u88C5 <code>eslint-config-airbnb-base</code> \u5E76\u5728 <code>package.json</code> \u4E2D\u914D\u7F6E</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string">&quot;eslintConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;airbnb-base&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u{1F4A1}</p><p>\u8BBE\u7F6E <code>env.browser</code>\uFF0C\u5426\u5219 eslint \u4F1A\u5224\u5B9A <code>window</code> <code>document</code> <code>navigator</code> \u662F\u672A\u58F0\u660E\u53D8\u91CF</p></div><p>\u5E38\u7528\u7684\u884C\u5185\u89C4\u5219</p><div class="language-js"><pre><code><span class="token comment">// eslint-disable-next-line</span>

<span class="token comment">/* global jQuery */</span>
</code></pre></div><h3 id="babel-loader" tabindex="-1">babel-loader <a class="header-anchor" href="#babel-loader" aria-hidden="true">#</a></h3><p>\u5B89\u88C5 <code>@babel/core</code> (\u6838\u5FC3) <code>@babel/preset-env</code>\uFF08\u89C4\u5219\u96C6\uFF09 <code>core-js</code>\uFF08\u517C\u5BB9 API\uFF09</p><blockquote><p>As of Babel 7.4.0, <code>@babel/polyfill</code> has been deprecated in favor of directly including <code>core-js/stable</code> (to polyfill ECMAScript features) and \`...</p></blockquote><div class="language-js"><pre><code><span class="token punctuation">{</span>
  test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  loader<span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
  exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u9884\u8BBE\u89C4\u5219 */</span>
    presets<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token comment">/* \u53EA\u5F15\u5165\u4F7F\u7528\u5230\u7684 polyfill */</span>
        useBuiltIns<span class="token operator">:</span> <span class="token string">&#39;useage&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">/* \u6307\u5B9A\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C */</span>
        corejs<span class="token operator">:</span> <span class="token punctuation">{</span> version<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

        targets<span class="token operator">:</span> <span class="token punctuation">{</span>
          chrome<span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
          firefox<span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
          safari<span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
          ie<span class="token operator">:</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span>
          edge<span class="token operator">:</span> <span class="token string">&#39;17&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">/* \u4E8C\u6B21\u6784\u5EFA\u65F6\uFF0C\u8BFB\u53D6\u4E4B\u524D \u7684\u7F13\u5B58 */</span>
    cacheDirectory<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>babel-loader</code> \u672C\u8EAB\u652F\u6301\u7F13\u5B58\uFF0C\u53EF\u4EE5\u4E0D\u4F7F\u7528 <code>cache-loader</code></p><h3 id="thread-loader" tabindex="-1">thread-loader <a class="header-anchor" href="#thread-loader" aria-hidden="true">#</a></h3><p>\u914D\u5408 <code>babel-loader</code> \u5F00\u542F\u591A\u8FDB\u7A0B\u7F16\u8BD1</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  use<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      loader<span class="token operator">:</span> <span class="token string">&#39;thread-loader&#39;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">/* \u8FDB\u7A0B\u4E2A\u6570 */</span>
        workers<span class="token operator">:</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> loader<span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span> exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> options<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u26A0\uFE0F</p><p>\u8FDB\u7A0B\u542F\u52A8\u5927\u6982 600ms \uFF0C\u8FDB\u7A0B\u4E4B\u95F4\u901A\u4FE1\u4E5F\u8981\u6D88\u8017\u65F6\u95F4\uFF0C\u5982\u679C\u9879\u76EE\u975E\u5E38\u5C0F\uFF0C\u6CA1\u6709\u5FC5\u8981\u4F7F\u7528</p></div><h3 id="cache-loader" tabindex="-1">cache-loader <a class="header-anchor" href="#cache-loader" aria-hidden="true">#</a></h3><h2 id="official-plugin" tabindex="-1">Official Plugin <a class="header-anchor" href="#official-plugin" aria-hidden="true">#</a></h2><p>webpack \u5B9A\u4E49\u4E86\u5F88\u591A\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u7684\u94A9\u5B50\uFF0C\u8FD9\u4E9B\u94A9\u5B50 Tapable \u7C7B\u7684\u5B9E\u73B0</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> RawSource <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-sources&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> validate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;schema-utils&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> globby <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;globby&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">,</span>
  properties<span class="token operator">:</span> <span class="token punctuation">{</span>
    to<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&#39;\u8D77\u59CB\u76EE\u5F55&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">,</span>
    from<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&#39;\u76EE\u6807\u76EE\u5F55&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">,</span>
    ignore<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;array&#39;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&#39;\u5FFD\u7565\u6587\u4EF6&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  additionalProperties<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">validate</span><span class="token punctuation">(</span>schema<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;MyPlugin&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
  <span class="token punctuation">}</span>
  <span class="token function">apply</span> <span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>thisCompilation<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;MyPlugin&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      compilation<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>additionalAssets<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">&#39;MyPlugin&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u624B\u52A8\u6DFB\u52A0\u6587\u4EF6</span>
        compilation<span class="token punctuation">.</span><span class="token function">emitAsset</span><span class="token punctuation">(</span><span class="token string">&#39;a.txt&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">&#39;hello&#39;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// \u4F7F\u7528 webpack-sources \u8F6C\u5316\u6587\u4EF6</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;b.text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
        compilation<span class="token punctuation">.</span><span class="token function">emitAsset</span><span class="token punctuation">(</span><span class="token string">&#39;b.text&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">RawSource</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment">// \u590D\u5236\u6307\u5B9A\u76EE\u5F55\u7684\u6587\u4EF6</span>
        <span class="token keyword">const</span> baseDir <span class="token operator">=</span> compiler<span class="token punctuation">.</span>options<span class="token punctuation">.</span>context
        <span class="token keyword">const</span> toDir <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>to <span class="token operator">||</span> <span class="token string">&#39;.&#39;</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> from<span class="token punctuation">,</span> ignore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options
        <span class="token keyword">const</span> fromDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">isAbsolute</span><span class="token punctuation">(</span>from<span class="token punctuation">)</span> <span class="token operator">?</span> from <span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>from<span class="token punctuation">)</span>
        <span class="token keyword">const</span> paths <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">globby</span><span class="token punctuation">(</span>fromDir<span class="token punctuation">,</span> <span class="token punctuation">{</span> ignore <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u8981\u590D\u5236\u7684\u6587\u4EF6\u7684\u8DEF\u5F84</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> filePath <span class="token keyword">of</span> paths<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">const</span> relativePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
          <span class="token keyword">const</span> filename <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> relativePath<span class="token punctuation">)</span>
          compilation<span class="token punctuation">.</span><span class="token function">emitAsset</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">RawRouce</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyPlugin
</code></pre></div><p>\u6D4B\u8BD5 MyPlugin</p><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">MyPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  from<span class="token operator">:</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">,</span>
  to<span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span>
  ignore<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/index.html&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="html-webpack-plugin" tabindex="-1">html-webpack-plugin <a class="header-anchor" href="#html-webpack-plugin" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">/* \u6307\u5B9A html \u6A21\u7248\uFF0C\u4E0D\u6307\u5B9A\u4F1A\u81EA\u52A8\u751F\u6210 index.html */</span>
  template<span class="token operator">:</span> <span class="token string">&#39;public/index.html&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">/* \u538B\u7F29 */</span>
  minify<span class="token operator">:</span> <span class="token punctuation">{</span>
    collapseWhiteSpace<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    removeComments<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="inline-chunk-html-plugin" tabindex="-1">inline-chunk-html-plugin <a class="header-anchor" href="#inline-chunk-html-plugin" aria-hidden="true">#</a></h3><p>\u5C06 js \u5185\u8054\u5230 index.html \u4E2D</p><div class="language-js"><pre><code>isEnvProduction <span class="token operator">&amp;&amp;</span> <span class="token keyword">new</span> <span class="token class-name">InlineChunkHtmlPlugin</span><span class="token punctuation">(</span>HtmlWebpackPlugin<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">runtime.+\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="mini-css-extract-plugin" tabindex="-1">mini-css-extract-plugin <a class="header-anchor" href="#mini-css-extract-plugin" aria-hidden="true">#</a></h3><p>\u914D\u5408\u5176\u5185\u7F6E\u7684 loader \uFF0C\u53EF\u4EE5\u63D0\u53D6 css \u4E3A\u5916\u7F6E\u8FDE\u63A5\u5F15\u5165</p><div class="language-js"><pre><code><span class="token comment">// \u8BBE\u7F6E css loader</span>
<span class="token punctuation">{</span>
  test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  use<span class="token operator">:</span> <span class="token punctuation">[</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6DFB\u52A0 plugin</span>
<span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  filename<span class="token operator">:</span> <span class="token string">&#39;css/app.css&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="intervolga-optimize-cssnano-plugin" tabindex="-1">@intervolga/optimize-cssnano-plugin <a class="header-anchor" href="#intervolga-optimize-cssnano-plugin" aria-hidden="true">#</a></h3><h3 id="optimize-css-assets-webpack-plugin" tabindex="-1">optimize-css-assets-webpack-plugin <a class="header-anchor" href="#optimize-css-assets-webpack-plugin" aria-hidden="true">#</a></h3><p>\u7528\u4E8E\u538B\u7F29 css \u6587\u4EF6</p><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u{1F4A1}</p><p>\u884C\u6587\u4E2D\u7684 <code>resolve</code> \u51FD\u6570\u662F <code>path.resolve</code></p></div><h3 id="workbox-webpack-plugin" tabindex="-1">workbox-webpack-plugin <a class="header-anchor" href="#workbox-webpack-plugin" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 serviceWorker \u6784\u5EFA PWA \u6E10\u8FDB\u5F0F\u7F51\u7EDC\u5F00\u53D1\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F7F\u7528\u8BE5\u63D2\u4EF6\u751F\u6210 <code>service-worker.js</code> \u914D\u7F6E\u6587\u4EF6</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">WorkboxWebpackPlugin<span class="token punctuation">.</span>GenerateSW</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">/**
       * \u5E2E\u52A9 serviceWorker \u5FEB\u901F\u542F\u52A8
       * \u5220\u9664\u65E7\u7684 serviceWorker
       */</span>
      clientsClaim<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      skipWaiting<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728 main.js \u6CE8\u518C serviceWorker</p><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;serviceWorker&#39;</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;/service-worker&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="webpack-dllplugin" tabindex="-1">webpack.DllPlugin <a class="header-anchor" href="#webpack-dllplugin" aria-hidden="true">#</a></h3><p>\u5BF9\u67D0\u4E9B\uFF08\u7B2C\u4E09\u65B9\uFF09\u5E93<em>\u9884\u5148</em>\u8FDB\u884C\u5355\u72EC\u6253\u5305\u597D\uFF0C\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u4E4B\u95F4\u5F15\u5165\u6253\u5305\u7ED3\u679C\uFF0C\u8DF3\u8FC7\u8BE5\u90E8\u5206\u6587\u4EF6\u7684\u6253\u5305\uFF0C\u4EE5\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6</p><div class="language-js"><pre><code><span class="token comment">// webpack.dll.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webapck <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  entry<span class="token operator">:</span> <span class="token punctuation">{</span>
    dll<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jQuery&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  output<span class="token operator">:</span> <span class="token punctuation">{</span>
    filename<span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;vendor&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    library<span class="token operator">:</span> <span class="token string">&#39;[name]_[hash]&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/* \u751F\u6210 manifest.json \u63D0\u4F9B\u751F\u6210 dll \u7684\u6620\u5C04\u5173\u7CFB */</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">/* \u540C output.library \u914D\u7F6E */</span>
      name<span class="token operator">:</span> <span class="token string">&#39;[name]_[hash]&#39;</span><span class="token punctuation">,</span>
      path<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;vendor/manifest.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6267\u884C <code>npx webpack --config webpack.dll.js</code> \u6253\u5305\u751F\u6210 <code>dll.js</code> \u548C <code>manifest.json</code></p><p>\u4FEE\u6539 <code>webpack.config.js</code> \u914D\u7F6E\uFF0C\u5E94\u7528\u6253\u5305\u7ED3\u679C</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/* webpack \u6839\u636E manifest \u5FFD\u7565\u5DF2\u6253\u5305\u5230 dll.js \u4E2D\u7684\u6587\u4EF6 */</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      manifest<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;vendor/manifest.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">/* \u5C06\u9884\u5148\u6253\u5305\u597D\u7684 dll.js \u63D2\u5165\u5230 inex.html \u4E2D  */</span>
    <span class="token keyword">new</span> <span class="token class-name">require</span><span class="token punctuation">(</span><span class="token string">&#39;add-assets-html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      filepath<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;vendor/dll.js&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="webpack-defineplugin" tabindex="-1">webpack.DefinePlugin <a class="header-anchor" href="#webpack-defineplugin" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token constant">PUBLIC_URL</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="webpack-hotmodulereplacementplugin" tabindex="-1">webpack.HotModuleReplacementPlugin <a class="header-anchor" href="#webpack-hotmodulereplacementplugin" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>isEnvProduction <span class="token operator">&amp;&amp;</span> <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="webpack-ignoreplugin" tabindex="-1">webpack.IgnorePlugin <a class="header-anchor" href="#webpack-ignoreplugin" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// https://github.com/jmblog/how-to-optimize-momentjs-with-webpack</span>
<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\.\\/locale$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">moment$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token comment">// or</span>
<span class="token keyword">new</span> <span class="token class-name">wepback<span class="token punctuation">.</span>ContextReplacementPlugin</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">moment[/\\\\]locale$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">zh-ch</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
</code></pre></div><h3 id="manifest-plugin" tabindex="-1">manifest-plugin <a class="header-anchor" href="#manifest-plugin" aria-hidden="true">#</a></h3><h2 id="hash" tabindex="-1">Hash <a class="header-anchor" href="#hash" aria-hidden="true">#</a></h2><table><thead><tr><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>hash</td><td>\u6BCF\u6B21\u6784\u5EFA\u90FD\u4F1A\u53D8\u5316\uFF08\u9664\u975E\u4F60\u4E0D\u60F3\u7F13\u5B58\u9759\u6001\u8D44\u6E90\uFF09</td></tr><tr><td>chunkhash</td><td>\u6839\u636E chunk \u751F\u6210\uFF0C\u5F53 main.js \u5F15\u5165 css \u65F6\uFF0Ccss \u5185\u5BB9\u53D8\u5316\uFF0C\u4E5F\u4F1A\u5BFC\u81F4\u751F\u6210\u7684 js \u6587\u4EF6 hash \u53D8\u5316\uFF0C\u4E14 hash \u4E00\u6837</td></tr><tr><td>contenthash</td><td>\u6839\u636E\u6587\u4EF6\u5185\u5BB9\u751F\u4EA7 hash\uFF08\u53EF\u9760\uFF09</td></tr></tbody></table><h2 id="tree-shaking" tabindex="-1">Tree Shaking <a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a></h2><p>\u524D\u63D0\uFF1A1. \u4F7F\u7528 ES module 2. mode \u8BBE\u7F6E\u4E3A production</p><p><code>import &quot;./style/index.less&quot;</code> \u88AB shaking \u6389\u4E86\uFF1F\uFF01\u8981\u6B63\u786E\u914D\u7F6E\u9879\u76EE <code>package.json</code> \u4E2D\u7684 <code>sideEffects</code> \u5B57\u6BB5\uFF0C</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*.css&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.less&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="code-split" tabindex="-1">Code Split <a class="header-anchor" href="#code-split" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>import()</code> \u8BED\u6CD5\uFF0Cwebpack \u4F1A\u81EA\u52A8\u5C06\u6A21\u5757\u5355\u72EC\u6253\u5305\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u8FD0\u884C\u65F6\u52A0\u8F7D(lazy load) \u548C \u6D4F\u89C8\u5668\u7A7A\u95F2\u65F6\u52A0\u8F7D(prefetch)</p><div class="language-js"><pre><code><span class="token comment">/* \u5982\u679C\u4E0D\u6307\u5B9A \`webpackChunkName\` \u6587\u4EF6\u540D\u662F\u6570\u5B57\u9012\u589E\uFF0C\u4E0D\u53CB\u597D */</span>
<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;math&quot;, webpackPrefetch: true */</span><span class="token punctuation">,</span> <span class="token string">&#39;./math&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> add <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u26A0\uFE0F</p><p>\u9884\u52A0\u8F7D\u9700\u8981\u6D4F\u89C8\u5668\u652F\u6301\uFF0C\u6CE8\u610F\u517C\u5BB9\u6027\u95EE\u9898</p></div><h2 id="optimize" tabindex="-1">Optimize <a class="header-anchor" href="#optimize" aria-hidden="true">#</a></h2><ul><li><p>\u6253\u5305\u901F\u5EA6</p><ol><li>loader \u4F7F\u7528 oneOf \uFF0C\u547D\u4E2D\u4E00\u4E2A loader \u5C31\u4E0D\u8D70\u5176\u4ED6 loader \u4E86 \u4F7F\u7528 <code>exclude</code> \u6392\u9664 <code>node_modules</code> \u4E4B\u7C7B\u7684\u76EE\u5F55</li></ol><div class="language-js"><pre><code><span class="token punctuation">{</span>
  rules<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/* \u6709\u4E24\u79CD loader \u5904\u7406\u4E86 js\u6587\u4EF6\uFF0C\u8FD9\u91CC\u8981\u63D0\u5230 oneOf \u5916\u9762\uFF0C\u5426\u5219\u6709\u4E00\u4E2A\u4E0D\u751F\u6548  */</span>
    <span class="token punctuation">{</span> test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> loader<span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span> enforce<span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      oneOf<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> loader<span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u4F7F\u7528 <code>thread-loader</code> \u5F00\u542F\u591A\u8FDB\u7A0B\u6253\u5305</li><li>\u4F7F\u7528 <code>webpack.DllPlugin</code> \u9884\u5148\u6253\u5305\u597D\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\uFF08\u8FD9\u4E9B\u4F9D\u8D56\u4E0D\u4F1A\u8F7B\u6613\u66F4\u65B0\uFF09\uFF0C\u518D\u6253\u5305\u65F6\u8DF3\u8FC7\u8FD9\u4E9B\u5E93</li><li>\u914D\u7F6E <code>externals</code> \u67D0\u4E9B\u6587\u4EF6\u8D70 CDN\uFF0C\u76F4\u63A5\u8DF3\u8FC7\u6253\u5305</li><li>\u914D\u7F6E <code>devServer.watchOptions.ignored</code> \u5FFD\u7565\u67D0\u4E9B\u76EE\u5F55(node_modules)</li><li>\u914D\u7F6E <code>cache-loader</code> \u7F13\u5B58\u7F16\u8BD1\u7ED3\u679C</li><li>contenthas \u662F\u5426\u6BD4 has \u66F4\u6162\uFF1F</li></ol></li></ul><h3 id="development" tabindex="-1">development <a class="header-anchor" href="#development" aria-hidden="true">#</a></h3><ul><li><p>HMR</p><ol><li>devServer \u5F00\u542F Hot Module Replace</li></ol></li><li><p>\u8C03\u8BD5\u4F53\u9A8C</p><ol><li>\u517C\u987E\u7F16\u8BD1\u901F\u5EA6\u548C\u8C03\u8BD5\u53CB\u597D\uFF0Cdevtool \u9009\u62E9 <code>eval-source-map</code>\uFF08\u8C03\u8BD5\u66F4\u597D\uFF09\u6216 <code>eval-cheap-module-source-map</code>\uFF08\u901F\u5EA6\u66F4\u5FEB\uFF09</li></ol></li><li><p>\u7F13\u5B58</p><ol><li><code>babel-loader</code> options \u8BBE\u7F6E <code>cacheDirectory: true</code></li></ol></li></ul><h3 id="production" tabindex="-1">production <a class="header-anchor" href="#production" aria-hidden="true">#</a></h3><ul><li><p>\u8FD0\u884C\u65F6\u6027\u80FD</p></li><li><p>\u9690\u85CF\u6E90\u7801</p><ol><li>devtool \u8BBE\u7F6E\u4E3A <code>nosources-source-map</code> \u6216 false \u3002\u5207\u5FCC\u4F7F\u7528 inline- \uFF0C\u8FD9\u4F1A\u4F7F\u4EE3\u7801\u4F53\u79EF\u53D8\u5F97\u5F88\u5927\uFF01</li><li>\u6DF7\u6DC6</li></ol></li><li><p>\u52A0\u8F7D\u901F\u5EA6</p><ol><li>\u4F7F\u7528 ES module \u4EE5\u5B9E\u73B0 tree shaking</li><li>\u9759\u6001\u8D44\u6E90\u9884\u5148 gzip\uFF08\u670D\u52A1\u5668\u9700\u5F00\u542F\u5BF9\u5E94\u914D\u7F6E\uFF09</li><li>\u914D\u7F6E <code>optimization: { splitChunks }</code> \u62BD\u79BB\u516C\u5171\u4F9D\u8D56\u4E3A\u5355\u72EC chunk \u964D\u4F4E\u4EE3\u7801\u53D8\u52A8\u7F13\u5B58\u5931\u6548</li><li>\u4F7F\u7528 <code>import()</code> \u5B9E\u73B0\u61D2\u52A0\u8F7D\u3001\u9884\u52A0\u8F7D</li><li>\u914D\u7F6E externals \uFF0C\u914D\u7F6E CDN</li></ol></li><li><p>\u7F13\u5B58</p><ol><li>\u907F\u514D\u7F13\u5B58\u5931\u6548\uFF1A\u6587\u4EF6\u540D\u4E0D\u4F7F\u7528 <code>hash</code> <code>chunkhash</code>\uFF0C\u542F\u7528 <code>runtimeChunk</code></li><li>\u907F\u514D\u7F13\u5B58\u4E0D\u5931\u6548\uFF1A\u9759\u6001\u8D44\u6E90\u8F93\u51FA\u6587\u4EF6\u540D\u4F7F\u7528 <code>contenthash</code> \u540E\u7F00\uFF0C\u6587\u4EF6\u6539\u52A8\u90E8\u7F72\u540E\uFF0C\u6D4F\u89C8\u5668\u8BF7\u6C42\u6700\u65B0\u6784\u5EFA\u7ED3\u679C</li></ol></li></ul>__VP_STATIC_END__`,138),o=[e];function c(l,u,i,r,k,d){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{m as __pageData,h as default};
