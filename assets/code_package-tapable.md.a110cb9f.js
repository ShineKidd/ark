import{_ as n,c as s,o as a,b as t}from"./app.b2e40202.js";const m='{"title":"Tapable \u5E93\u7684\u5B9E\u73B0","description":"","frontmatter":{"title":"Tapable \u5E93\u7684\u5B9E\u73B0"},"relativePath":"code/package-tapable.md","lastUpdated":1636875147163}',p={},o=t(`<blockquote><p>see <a href="https://github.com/webpack/tapable" target="_blank" rel="noopener noreferrer">webpack/tapable</a></p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  SyncHook<span class="token punctuation">,</span>
  SyncBailHook<span class="token punctuation">,</span> <span class="token comment">// \u4E00\u65E6\u5176\u4E2D\u4E00\u4E2A\u51FD\u6570\u6709\u8FD4\u56DE\u503C\u5C31\u9000\u51FA</span>
  AsyncParallelHook<span class="token punctuation">,</span> <span class="token comment">// \u5F02\u6B65\u5E76\u884C</span>
  AsyncSeriesHook<span class="token punctuation">,</span> <span class="token comment">// \u5F02\u6B65\u4E32\u884C</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;tapable&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks <span class="token operator">=</span> <span class="token punctuation">{</span>
      walk<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span>defArg<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      eat<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span>defArg<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">tap</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>walk<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;syncA&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// \u6CE8\u518C\u5F02\u6B65\u6CD5\u4E00</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>eat<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">&#39;asyncA&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">food1<span class="token punctuation">,</span> food2<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// \u6CE8\u518C\u5F02\u6B65\u6CD5\u4E8C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>eat<span class="token punctuation">.</span><span class="token function">tapPromise</span><span class="token punctuation">(</span><span class="token string">&#39;asyncB&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">food1<span class="token punctuation">,</span> food2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> rejct</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">start</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;\u6797\u95F4\u5C0F\u9053&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>eat<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span><span class="token string">&#39;\u7C97\u83DC\u6DE1\u996D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u4E94\u8C37\u6742\u7CAE&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// all done</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var y=n(p,[["render",e]]);export{m as __pageData,y as default};
