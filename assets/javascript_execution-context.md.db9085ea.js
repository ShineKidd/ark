import{_ as n,c as s,o as a,b as t}from"./app.8a965c85.js";const g='{"title":"Execution Context","description":"","frontmatter":{"title":"Execution Context"},"headers":[{"level":2,"title":"Concepts","slug":"concepts"},{"level":2,"title":"Scope","slug":"scope"},{"level":3,"title":"Hoisting","slug":"hoisting"},{"level":3,"title":"Scope Chain","slug":"scope-chain"},{"level":2,"title":"Execution Context","slug":"execution-context"},{"level":3,"title":"Closure","slug":"closure"},{"level":3,"title":"This","slug":"this"}],"relativePath":"javascript/execution-context.md","lastUpdated":1636853987097}',o={},p=t(`<h2 id="concepts" tabindex="-1">Concepts <a class="header-anchor" href="#concepts" aria-hidden="true">#</a></h2><p><strong>JavaScript \u662F\u300C\u5F31\u7C7B\u578B\u300D\u300C\u52A8\u6001\u300D\u8BED\u8A00</strong></p><div class="language-js"><pre><code><span class="token comment">// \u9690\u5F0F\u7C7B\u578B\u8F6C\u6362</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
bar <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment">// \u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u624D\u68C0\u67E5\u6570\u636E\u7C7B\u578B</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span> <span class="token operator">?</span> <span class="token string">&#39;foo&#39;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>JavaScript (\u76EE\u524D)\u6709 8 \u79CD\u6570\u636E\u7C7B\u578B</strong></p><div class="language-js"><pre><code>Number String Boolean Symbol BigInt Object <span class="token keyword">null</span> <span class="token keyword">undefined</span>
</code></pre></div><p><strong>JavaScript \u6267\u884C\u524D\u9700\u8981\u7F16\u8BD1</strong></p><p>\u8BCD\u6CD5\u5206\u6790\u3001\u8BED\u6CD5\u89E3\u6790\u3001\u4EE3\u7801\u4F18\u5316\u3001\u4EE3\u7801\u751F\u6210</p><p>Uncaught SyntaxError: Unexpected token</p><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-hidden="true">#</a></h2><p><strong>\u4EC0\u4E48\u662F\u4F5C\u7528\u57DF</strong></p><p>\u4F5C\u7528\u57DF\u662F\u6307\u5728\u7A0B\u5E8F\u4E2D\u5B9A\u4E49\u53D8\u91CF\u7684\u533A\u57DF\uFF0C\u8BE5\u4F4D\u7F6E\u51B3\u5B9A\u4E86\u53D8\u91CF\u7684\u751F\u547D\u5468\u671F\u3002\u901A\u4FD7\u5730\u7406\u89E3\uFF0C\u4F5C\u7528\u57DF\u5C31\u662F\u53D8\u91CF\u4E0E\u51FD\u6570\u7684\u53EF\u8BBF\u95EE\u8303\u56F4\uFF0C\u5373\u4F5C\u7528\u57DF\u63A7\u5236\u7740\u53D8\u91CF\u548C\u51FD\u6570\u7684\u53EF\u89C1\u6027\u548C\u751F\u547D\u5468\u671F</p><p><strong>4 (\u4E3B\u8981\u7684)\u79CD\u4F5C\u7528\u57DF</strong></p><p>\u5168\u5C40\u4F5C\u7528\u57DF &amp; \u51FD\u6570\u4F5C\u7528\u57DF</p><div class="language-js"><pre><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">123</span>
    bar <span class="token operator">=</span> <span class="token number">456</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> doc<span class="token punctuation">,</span> <span class="token keyword">undefined</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
      bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> document<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">)</span>
<span class="token comment">// =&gt; 123 456</span>
<span class="token comment">// =&gt; undefined</span>
</code></pre></div><p>ES6 \u5757\u7EA7\u4F5C\u7528\u57DF</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; undefined</span>
<span class="token comment">// =&gt; 0</span>
<span class="token comment">// =&gt; 1</span>
<span class="token comment">// =&gt; 2</span>
</code></pre></div><p>eval \u4F5C\u7528\u57DF</p><div class="language-js"><pre><code><span class="token string">&#39;use strict&#39;</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
<span class="token function">eval</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  var bar = &#39;foo&#39;
  console.log(bar)
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span>
<span class="token comment">// =&gt; foo</span>
<span class="token comment">// =&gt; bar</span>
<span class="token comment">// =&gt; undefined</span>
</code></pre></div><h3 id="hoisting" tabindex="-1">Hoisting <a class="header-anchor" href="#hoisting" aria-hidden="true">#</a></h3><p><strong>\u6309\u5E8F\u6267\u884C\u4E48\uFF1F</strong></p><div class="language-js"><pre><code><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
<span class="token comment">// =&gt; undefined</span>
<span class="token comment">// =&gt; undefined</span>

<span class="token comment">/** Vs **/</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
<span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u58F0\u660E\u5F0F\u3001\u8868\u8FBE\u5F0F\u5B9A\u4E49\u51FD\u6570\u7684\u533A\u522B</strong></p><div class="language-js"><pre><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; foo</span>
<span class="token comment">// =&gt; 123</span>
<span class="token comment">// =&gt; undefined</span>

<span class="token comment">/** Vs **/</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// =&gt; 123</span>
<span class="token comment">// =&gt; undefined</span>
</code></pre></div><p><strong>\u5728 if \u8BED\u53E5\u4E2D\u5B9A\u4E49\u7684\u51FD\u6570</strong></p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">,</span> bar<span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo ~&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; undefined true undefined true</span>
<span class="token comment">// =&gt; Uncaught TypeError: foo is not a function</span>
</code></pre></div><h3 id="scope-chain" tabindex="-1">Scope Chain <a class="header-anchor" href="#scope-chain" aria-hidden="true">#</a></h3><p>JavasSript \u7684\u4F5C\u7528\u57DF\u5C5E\u4E8E\u300C\u8BCD\u6CD5\u4F5C\u7528\u57DF\u300D\u6216\u53EB\u300C\u9759\u6001\u4F5C\u7528\u57DF\u300D</p><p><strong>\u4F5C\u7528\u57DF\u94FE</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;golobal&#39;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; golobal</span>
<span class="token comment">// =&gt; undefined</span>
</code></pre></div><p><strong>\u7B80\u5355\u8868\u793A\u8C03\u7528\u6808</strong></p><div class="language-"><pre><code>             Call Stack
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u2502
\u2502    bar: \u2502                    \u2502   \u2502
\u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2502
\u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u2502
\u2502    foo: \u2502var name = &#39;foo&#39;    \u2502   \u2502
\u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2502
\u2502         \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u2502
\u2502         \u2502var name = &#39;global&#39; \u2502   \u2502
\u2502 global: \u2502function bar        \u2502   \u2502
\u2502         \u2502function foo        \u2502   \u2502
\u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
</code></pre></div><p><strong>\u5757\u7EA7\u4F5C\u7528\u57DF\u5982\u4F55\u5B9E\u73B0</strong></p><p>var \u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u5B58\u5728\u7740\u53D8\u91CF\u8986\u76D6\u3001\u53D8\u91CF\u6C61\u67D3\u7684\u95EE\u9898\uFF0CES6 \u5F15\u5165\u5757\u7EA7\u4F5C\u7528\u57DF</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">10</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
  <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">22</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;golobal&#39;</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">6</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; golobal 6</span>
<span class="token comment">// =&gt; undefined</span>
</code></pre></div><div class="language-"><pre><code>                    Call Stack
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
\u2502       \u2502   variable env         lexical env     \u2502  \u2502
\u2502       \u2502 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502
\u2502       \u2502 \u2502                \u2502 \u2502let name = &#39;bar&#39; \u2502 \u2502  \u2502
\u2502   bar \u2502 \u2502                \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502
\u2502       \u2502 \u2502                \u2502 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502
\u2502       \u2502 \u2502                \u2502 \u2502let age = 10     \u2502 \u2502  \u2502
\u2502       \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502
\u2502       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
\u2502       \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
\u2502       \u2502   variable env         lexical env     \u2502  \u2502
\u2502   foo \u2502 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502
\u2502       \u2502 \u2502var name = &#39;foo&#39;\u2502 \u2502let age = 22     \u2502 \u2502  \u2502
\u2502       \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502
\u2502       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
\u2502       \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
\u2502       \u2502   variable env          lexical env    \u2502  \u2502
\u2502       \u2502 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502
\u2502 global\u2502 \u2502var name = &#39;global&#39;\u2502 \u2502 let age = 6  \u2502 \u2502  \u2502
\u2502       \u2502 \u2502function bar       \u2502 \u2502              \u2502 \u2502  \u2502
\u2502       \u2502 \u2502function foo       \u2502 \u2502              \u2502 \u2502  \u2502
\u2502       \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502
\u2502       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
</code></pre></div><p><code>let</code> <code>const</code> \u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u4F7F\u7528\u4E86\u5C0F\u578B\u7684\u6808\u7ED3\u6784\u8FDB\u884C\u4FDD\u5B58</p><h2 id="execution-context" tabindex="-1">Execution Context <a class="header-anchor" href="#execution-context" aria-hidden="true">#</a></h2><p>\u5F53\u51FD\u6570\u8C03\u7528\u65F6</p><ol><li>\u521B\u5EFA\u9636\u6BB5</li></ol><ul><li>\u521D\u59CB\u5316\u4F5C\u7528\u57DF\u94FE(Scope Chain)</li><li>\u521B\u5EFA\u53D8\u91CF\u5BF9\u8C61(Variable Object)\uFF0C\u7528\u4E8E\u4FDD\u5B58\u58F0\u660E\u7684\u51FD\u6570\u548C\u53D8\u91CF</li><li>\u521B\u5EFA arguments \u5BF9\u8C61\uFF0C\u6D45\u62F7\u8D1D arguments \u5BF9\u8C61</li><li>\u626B\u63CF\u51FD\u6570\u5185\u90E8 <ul><li>\u5148\u626B\u63CF function \u58F0\u660E\u7684\u51FD\u6570 <ul><li>\u5982\u679C VO \u4E2D\u4E0D\u5B58\u5728\uFF0C\u5219\u4EE5\u51FD\u6570\u540D\u4E3A\u5C5E\u6027\uFF0C\u503C\u4E3A\u8BE5\u51FD\u6570\u5728\u5185\u5B58\u4E2D\u7684\u5730\u5740</li><li>\u53D1\u73B0 function \u58F0\u660E\u7684&quot;\u540C\u540D&quot;\u51FD\u6570\uFF0C\u5219\u8986\u76D6 VO \u4E2D\u5DF2\u6709\u7684\u5C5E\u6027\u7684\u503C</li></ul></li><li>\u518D\u626B\u63CF var \u58F0\u660E\u7684\u53D8\u91CF <ul><li>\u5982\u679C\u53D8\u91CF\u540D\u5728 VO \u4E2D\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA VO \u5C5E\u6027\uFF0C\u521D\u59CB\u5316\u503C\u4E3A undefined</li><li>\u5982\u679C\u53D8\u91CF\u540D\u5728 VO \u4E2D\u5DF2\u5B58\u5728\uFF0C\u5219\u5FFD\u7565\uFF0C\u7EE7\u7EED\u5F80\u4E0B\u626B\u63CF</li></ul></li></ul></li><li>\u786E\u5B9A this \u7684\u503C</li></ul><ol start="2"><li>\u6FC0\u6D3B\u3001\u4EE3\u7801\u6267\u884C\u9636\u6BB5</li></ol><ul><li>\u7ED9\u53D8\u91CF\u8D4B\u503C\u3001\u6267\u884C\u4EE3\u7801</li></ul><p>var \u548C function \u58F0\u660E\u540C\u540D\u60C5\u51B5\u4EE5\u53CA function \u91CD\u590D\u58F0\u660E\u60C5\u51B5</p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">90</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token comment">// =&gt; \u0192 foo () { console.log(123) }</span>
<span class="token comment">// =&gt; 90</span>
<span class="token comment">// =&gt; undefined</span>
</code></pre></div><p>\u62BD\u8C61\u8868\u793A\u6267\u884C\u4E0A\u4E0B\u6587</p><div class="language-js"><pre><code><span class="token keyword">var</span> baz <span class="token operator">=</span> <span class="token string">&#39;baz&#39;</span>
<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>
  <span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code>ExecutionContext <span class="token operator">=</span> <span class="token punctuation">{</span>
  ScopeChain<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* VO + \u6240\u6709\u7236\u7EA7\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u7684 VO */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  VariableObject<span class="token operator">:</span> <span class="token punctuation">{</span>
    arguments<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&#39;0&#39;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      length<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
    bar<span class="token operator">:</span> <span class="token number">0x12033</span> <span class="token comment">// \u5185\u5B58\u5730\u5740</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token operator">:</span> window
<span class="token punctuation">}</span>
</code></pre></div><h3 id="closure" tabindex="-1">Closure <a class="header-anchor" href="#closure" aria-hidden="true">#</a></h3><blockquote><p>\u4E00\u4E2A\u51FD\u6570\u548C\u5BF9\u5176\u5468\u56F4\u72B6\u6001\uFF08lexical environment\uFF0C\u8BCD\u6CD5\u73AF\u5883\uFF09\u7684\u5F15\u7528\u6346\u7ED1\u5728\u4E00\u8D77\uFF08\u6216\u8005\u8BF4\u51FD\u6570\u88AB\u5F15\u7528\u5305\u56F4\uFF09\uFF0C\u8FD9\u6837\u7684\u7EC4\u5408\u5C31\u662F\u95ED\u5305\uFF08closure\uFF09\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u95ED\u5305\u8BA9\u4F60\u53EF\u4EE5\u5728\u4E00\u4E2A\u5185\u5C42\u51FD\u6570\u4E2D\u8BBF\u95EE\u5230\u5176\u5916\u5C42\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u3002\u5728 JavaScript \u4E2D\uFF0C\u6BCF\u5F53\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u95ED\u5305\u5C31\u4F1A\u5728\u51FD\u6570\u521B\u5EFA\u7684\u540C\u65F6\u88AB\u521B\u5EFA\u51FA\u6765\u3002--- MDN</p></blockquote><h3 id="this" tabindex="-1">This <a class="header-anchor" href="#this" aria-hidden="true">#</a></h3><p><code>this</code> \u662F\u8FD0\u884C\u65F6\u7ED1\u5B9A\u7684</p><ol><li>\u5168\u5C40\u53D8\u91CF</li><li>\u6784\u9020\u51FD\u6570</li><li>\u5BF9\u8C61\u65B9\u6CD5</li><li>call apply bind \u7ED1\u5B9A</li></ol><blockquote><p><a href="https://medium.com/@itIsMadhavan/what-is-the-execution-context-stack-in-javascript-e169812e851a" target="_blank" rel="noopener noreferrer">What is the Execution Context &amp; Stack in JavaScript?</a></p></blockquote><blockquote><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#this_in_function_contexts" target="_blank" rel="noopener noreferrer">this</a></p></blockquote><blockquote><p><a href="https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/" target="_blank" rel="noopener noreferrer">Gentle Explanation of &quot;this&quot; in JavaScript</a></p></blockquote>`,55),e=[p];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var m=n(o,[["render",c]]);export{g as __pageData,m as default};
