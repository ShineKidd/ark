import{_ as n,c as a,o as s,b as t}from"./app.e632a585.js";const v='{"title":"vue vue-router vuex","description":"","frontmatter":{"title":"vue vue-router vuex"},"headers":[{"level":2,"title":"vue 2.x","slug":"vue-2-x"},{"level":3,"title":"jsx","slug":"jsx"},{"level":3,"title":"\u51FD\u6570\u5F0F\u7EC4\u4EF6","slug":"\u51FD\u6570\u5F0F\u7EC4\u4EF6"},{"level":2,"title":"vuex 3.x","slug":"vuex-3-x"},{"level":3,"title":"\u52A8\u6001\u6CE8\u5165 modlue","slug":"\u52A8\u6001\u6CE8\u5165-modlue"},{"level":2,"title":"vue-router 3.x","slug":"vue-router-3-x"},{"level":3,"title":"\u8DEF\u7531\u5F02\u6B65\u7EC4\u4EF6\u7684\u5B9E\u73B0","slug":"\u8DEF\u7531\u5F02\u6B65\u7EC4\u4EF6\u7684\u5B9E\u73B0"},{"level":3,"title":"\u5982\u4F55\u91CD\u7F6E\u8DEF\u7531","slug":"\u5982\u4F55\u91CD\u7F6E\u8DEF\u7531"},{"level":2,"title":"vue 3.x","slug":"vue-3-x"}],"relativePath":"javascript/vue.md","lastUpdated":1635690391842}',p={},o=t(`__VP_STATIC_START__<h2 id="vue-2-x" tabindex="-1">vue 2.x <a class="header-anchor" href="#vue-2-x" aria-hidden="true">#</a></h2><p>\u6E32\u67D3\u6D41\u7A0B</p><p>new Vue -&gt; init -&gt; $mount -&gt; compile(\u53EF\u5728\u6784\u5EFA\u5DE5\u5177 vue-loader \u5B8C\u6210) -&gt; render -&gt; vnode -&gt; patch -&gt; DOM</p><h3 id="jsx" tabindex="-1">jsx <a class="header-anchor" href="#jsx" aria-hidden="true">#</a></h3><h3 id="\u51FD\u6570\u5F0F\u7EC4\u4EF6" tabindex="-1">\u51FD\u6570\u5F0F\u7EC4\u4EF6 <a class="header-anchor" href="#\u51FD\u6570\u5F0F\u7EC4\u4EF6" aria-hidden="true">#</a></h3><h2 id="vuex-3-x" tabindex="-1">vuex 3.x <a class="header-anchor" href="#vuex-3-x" aria-hidden="true">#</a></h2><h3 id="\u52A8\u6001\u6CE8\u5165-modlue" tabindex="-1">\u52A8\u6001\u6CE8\u5165 modlue <a class="header-anchor" href="#\u52A8\u6001\u6CE8\u5165-modlue" aria-hidden="true">#</a></h3><h2 id="vue-router-3-x" tabindex="-1">vue-router 3.x <a class="header-anchor" href="#vue-router-3-x" aria-hidden="true">#</a></h2><h3 id="\u8DEF\u7531\u5F02\u6B65\u7EC4\u4EF6\u7684\u5B9E\u73B0" tabindex="-1">\u8DEF\u7531\u5F02\u6B65\u7EC4\u4EF6\u7684\u5B9E\u73B0 <a class="header-anchor" href="#\u8DEF\u7531\u5F02\u6B65\u7EC4\u4EF6\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h3><blockquote><p><a href="https://marskid.net/2018/11/11/vue-router-lazy-loading/" target="_blank" rel="noopener noreferrer">https://marskid.net/2018/11/11/vue-router-lazy-loading/</a></p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> LoadingView <span class="token operator">=</span> <span class="token punctuation">{</span>
  functional<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;Loading...&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ErrorView <span class="token operator">=</span> <span class="token punctuation">{</span>
  functional<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;Unexception Error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createLazy</span> <span class="token punctuation">(</span><span class="token parameter">component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">View</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    component<span class="token punctuation">,</span>
    loading<span class="token operator">:</span> LoadingView<span class="token punctuation">,</span>
    error<span class="token operator">:</span> ErrorView<span class="token punctuation">,</span>
    delay<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    timeout<span class="token operator">:</span> <span class="token number">3000</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    functional<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>View<span class="token punctuation">,</span> data<span class="token punctuation">,</span> chilren<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">createLazy</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/user/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u7EC4\u4EF6\u5185\u7684\u8DEF\u7531\u5BFC\u822A\u5B88\u536B\u5931\u6548\uFF01</p></div><h3 id="\u5982\u4F55\u91CD\u7F6E\u8DEF\u7531" tabindex="-1">\u5982\u4F55\u91CD\u7F6E\u8DEF\u7531 <a class="header-anchor" href="#\u5982\u4F55\u91CD\u7F6E\u8DEF\u7531" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">createRouter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">routes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    routes<span class="token punctuation">,</span>
    <span class="token function">scrollBehavior</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> savedPos</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">resetRouter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newRouter <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  router<span class="token punctuation">.</span>matcher <span class="token operator">=</span> newRouter<span class="token punctuation">.</span>matcher
  <span class="token keyword">if</span> <span class="token punctuation">(</span>router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u8FD9\u91CC\u4F7F\u7528\u4E86\u975E\u6807\u51C6 API\uFF01</p></div><h2 id="vue-3-x" tabindex="-1">vue 3.x <a class="header-anchor" href="#vue-3-x" aria-hidden="true">#</a></h2><ul><li>\u66F4\u6613\u7EF4\u62A4\u7684\u4EE3\u7801 monorepo\uFF0C\u6A21\u5757\u4E4B\u95F4\u4F9D\u8D56\u660E\u786E\uFF0C\u804C\u8D23\u9C9C\u660E\uFF0C\u53EF\u5355\u72EC\u5F15\u5165\u6A21\u5757\uFF08tree-shaking\uFF09</li><li>\u66F4\u597D\u7684 typescript \u652F\u6301</li><li>\u7F16\u8BD1\u65F6\u4F18\u5316\uFF0C\u6807\u8BB0\u9759\u6001\u8282\u70B9\uFF0C\u4EE5\u5B9E\u73B0 patch \u8FC7\u7A0B\u53EA\u6BD4\u8F83\u52A8\u6001\u8282\u70B9, \u4F18\u5316 slot \uFF0C\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\u7F13\u5B58\u4F18\u5316</li><li>proxy \u66F4\u597D\u7684\u6570\u636E\u52AB\u6301\u6027\u80FD</li><li>\u91CD\u5199\u4E86 diff \u7B97\u6CD5</li><li>\u7EC4\u5408 API \uFF0C\u66F4\u597D\u7684\u903B\u8F91\u590D\u7528\uFF0C\u4EE3\u7801\u7EC4\u7EC7\u548C\u7C7B\u578B\u652F\u6301\uFF08mixin \u5B58\u5728\u547D\u540D\u51B2\u7A81\u3001\u6570\u636E\u6765\u6E90\u4E0D\u6E05\u6670\uFF09</li></ul>__VP_STATIC_END__`,17),e=[o];function c(u,l,i,r,k,d){return s(),a("div",null,e)}var x=n(p,[["render",c]]);export{v as __pageData,x as default};
