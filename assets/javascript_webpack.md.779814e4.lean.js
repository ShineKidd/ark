import{_ as n,c as s,o as a,b as e}from"./app.e632a585.js";const g='{"title":"webpack5","description":"","frontmatter":{"title":"webpack5"},"headers":[{"level":3,"title":"\u6301\u4E45\u7F13\u5B58","slug":"\u6301\u4E45\u7F13\u5B58"},{"level":3,"title":"\u5185\u7F6E loader","slug":"\u5185\u7F6E-loader"},{"level":3,"title":"\u652F\u6301 URIs","slug":"\u652F\u6301-uris"},{"level":3,"title":"chunkId","slug":"chunkid"},{"level":3,"title":"\u4E0D\u81EA\u52A8 polyfill nodejs \u5305","slug":"\u4E0D\u81EA\u52A8-polyfill-nodejs-\u5305"},{"level":3,"title":"tree shaking \u589E\u5F3A","slug":"tree-shaking-\u589E\u5F3A"},{"level":3,"title":"sideEffects","slug":"sideeffects"},{"level":3,"title":"module federation","slug":"module-federation"},{"level":3,"title":"Top await","slug":"top-await"}],"relativePath":"javascript/webpack.md","lastUpdated":1635690391842}',t={},p=e(`__VP_STATIC_START__<p>\u4E09\u5927\u53D8\u5316</p><ol><li>\u6301\u4E45\u7F13\u5B58</li><li>tree shaking \u589E\u5F3A</li><li>module federation</li></ol><h3 id="\u6301\u4E45\u7F13\u5B58" tabindex="-1">\u6301\u4E45\u7F13\u5B58 <a class="header-anchor" href="#\u6301\u4E45\u7F13\u5B58" aria-hidden="true">#</a></h3><div class="language-js webpack.config.js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  devtool<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  entry<span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  watch<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  cache<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;memory&#39;</span><span class="token punctuation">,</span> <span class="token comment">// memory|filesystem</span>
    cacheDirectory<span class="token operator">:</span>  path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;node_modules/.cahce/webpack&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
    port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>cache type \u8BBE\u7F6E\u4E3A filesystem \u548C cnpm \u4E0D\u517C\u5BB9</p></div><h3 id="\u5185\u7F6E-loader" tabindex="-1">\u5185\u7F6E loader <a class="header-anchor" href="#\u5185\u7F6E-loader" aria-hidden="true">#</a></h3><p>raw-loader file-loader url-loader</p><div class="language-js"><pre><code>module<span class="token operator">:</span> <span class="token punctuation">{</span>
  rules<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.png$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">&#39;asset/resoucre&#39;</span><span class="token punctuation">,</span> <span class="token comment">// file-loader</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.text$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">&#39;asset/soucre&#39;</span><span class="token punctuation">,</span> <span class="token comment">// raw-loader</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ico$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">&#39;asset/inline&#39;</span><span class="token punctuation">,</span> <span class="token comment">// url-loader \u5C0F\u4E8E\u6307\u5B9A\u503C\uFF0C\u9ED8\u8BA4 base64</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="\u652F\u6301-uris" tabindex="-1">\u652F\u6301 URIs <a class="header-anchor" href="#\u652F\u6301-uris" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> title <span class="token keyword">from</span> <span class="token string">&#39;data:text/javascript,export default &quot;title&quot;&#39;</span>
</code></pre></div><h3 id="chunkid" tabindex="-1">chunkId <a class="header-anchor" href="#chunkid" aria-hidden="true">#</a></h3><p>webpack4 \u9ED8\u8BA4\u662F\u81EA\u7136\u6570\u9012\u589E\uFF08natural\uFF09\uFF0C\u4E0D\u5408\u7406</p><div class="language-js"><pre><code>entry<span class="token operator">:</span> <span class="token punctuation">{</span>
  main<span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
  chunkIds<span class="token operator">:</span> <span class="token string">&#39;deterministic&#39;</span><span class="token punctuation">,</span> <span class="token comment">// natural|named|deterministic</span>
  moduleIds<span class="token operator">:</span> <span class="token string">&#39;deterministic&#39;</span><span class="token punctuation">,</span> <span class="token comment">// natural|named|deterministic</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
output<span class="token operator">:</span> <span class="token punctuation">{</span>
  filename<span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5165\u53E3\u6587\u4EF6\u6253\u5305\u540D</span>
  chunkFilename<span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u975E\u5165\u53E3\u6587\u4EF6\uFF0C\u5982\u5F02\u6B65\u52A0\u8F7D\u6587\u4EF6\u6253\u5305\u540D</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="\u4E0D\u81EA\u52A8-polyfill-nodejs-\u5305" tabindex="-1">\u4E0D\u81EA\u52A8 polyfill nodejs \u5305 <a class="header-anchor" href="#\u4E0D\u81EA\u52A8-polyfill-nodejs-\u5305" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5411\u4E0B\u517C\u5BB9</span>
  fallback<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;stream&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&#39;stream&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&#39;buffer&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6216\u8005</span>
  <span class="token comment">// fallback: {</span>
  <span class="token comment">//   &#39;crypto&#39;: require.resolve(&#39;crypto-browserify&#39;),</span>
  <span class="token comment">//   &#39;stream&#39;: require.resolve(&#39;stream-browserify&#39;),</span>
  <span class="token comment">//   &#39;buffer&#39;: require.resolve(&#39;buffer&#39;),</span>
  <span class="token comment">// }</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="tree-shaking-\u589E\u5F3A" tabindex="-1">tree shaking \u589E\u5F3A <a class="header-anchor" href="#tree-shaking-\u589E\u5F3A" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
  usedExports<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="sideeffects" tabindex="-1">sideEffects <a class="header-anchor" href="#sideeffects" aria-hidden="true">#</a></h3><div class="language-json package.json"><pre><code><span class="token property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*.css&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre></div><h3 id="module-federation" tabindex="-1">module federation <a class="header-anchor" href="#module-federation" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// remote webpack.config.js</span>
plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;remoteVar&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u66B4\u9732\u7684\u5168\u5C40\u53D8\u91CF\u540D</span>
    filename<span class="token operator">:</span> <span class="token string">&#39;remoteEntry.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5305\u7684\u5165\u53E3\u6587\u4EF6</span>
    exposes<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&#39;./NewsList.vue&#39;</span><span class="token operator">:</span> <span class="token string">&#39;./scr/components/NewsList.vue&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u66B4\u9732\u7684\u5171\u4EAB\u7EC4\u4EF6</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    shared<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5171\u4EAB\u7684\u5E93</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
<span class="token comment">// host webpack.config.js</span>
plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;host&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u66B4\u9732\u7684\u5168\u5C40\u53D8\u91CF\u540D</span>
    filename<span class="token operator">:</span> <span class="token string">&#39;hostEntry.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5305\u7684\u5165\u53E3\u6587\u4EF6</span>
    remotes<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&#39;remote&#39;</span><span class="token operator">:</span> <span class="token string">&#39;remoteVar@http://localhost:8080/remoteEntry.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u66B4\u9732\u7684\u5171\u4EAB\u7EC4\u4EF6</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    shared<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5171\u4EAB\u7684\u5E93</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>shard \u662F\u591A\u7248\u672C\u5171\u5B58\uFF0C\u5185\u90E8\u505A\u7248\u672C\u68C0\u67E5\uFF0C\u9ED8\u8BA4\u5728\u6240\u6709\u7248\u672C\u4E2D\u9009\u62E9\u6700\u9AD8\u7248\u672C</p></div><h3 id="top-await" tabindex="-1">Top await <a class="header-anchor" href="#top-await" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">const</span> NewsList <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;remote/NewsList.vue&#39;</span><span class="token punctuation">)</span>
</code></pre></div>__VP_STATIC_END__`,24),o=[p];function c(l,r,i,u,k,d){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{g as __pageData,h as default};
