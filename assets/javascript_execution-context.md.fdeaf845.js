import{o as n,c as s,d as a}from"./app.2a3e59c4.js";const t='{"title":"Execution Context","description":"","frontmatter":{"title":"Execution Context"},"headers":[{"level":2,"title":"Concepts","slug":"concepts"},{"level":2,"title":"Scope","slug":"scope"},{"level":3,"title":"Hoisting","slug":"hoisting"},{"level":3,"title":"Scope Chain","slug":"scope-chain"},{"level":2,"title":"Execution Context","slug":"execution-context"},{"level":3,"title":"Closure","slug":"closure"},{"level":3,"title":"This","slug":"this"}],"relativePath":"javascript/execution-context.md","lastUpdated":1620648668820}',o={},p=a('<h2 id="concepts"><a class="header-anchor" href="#concepts" aria-hidden="true">#</a> Concepts</h2><p><strong>JavaScript 是「弱类型」「动态」语言</strong></p><div class="language-js"><pre><code><span class="token comment">// 隐式类型转换</span>\n<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>\nbar <span class="token operator">=</span> <span class="token number">1</span>\n\n<span class="token comment">// 在运行过程中才检查数据类型</span>\n<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span> <span class="token operator">?</span> <span class="token string">&#39;foo&#39;</span> <span class="token operator">:</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>JavaScript (目前)有 8 种数据类型</strong></p><div class="language-js"><pre><code>Number String Boolean Symbol BigInt Object <span class="token keyword">null</span> <span class="token keyword">undefined</span>\n</code></pre></div><p><strong>JavaScript 执行前需要编译</strong></p><p>词法分析、语法解析、代码优化、代码生成</p><p>Uncaught SyntaxError: Unexpected token</p><h2 id="scope"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> Scope</h2><p><strong>什么是作用域</strong></p><p>作用域是指在程序中定义变量的区域，该位置决定了变量的生命周期。通俗地理解，作用域就是变量与函数的可访问范围，即作用域控制着变量和函数的可见性和生命周期</p><p><strong>4 (主要的)种作用域</strong></p><p>全局作用域 &amp; 函数作用域</p><div class="language-js"><pre><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">123</span>\n    bar <span class="token operator">=</span> <span class="token number">456</span>\n<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> doc<span class="token punctuation">,</span> <span class="token keyword">undefined</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>\n      bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> document<span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">)</span>\n<span class="token comment">// =&gt; 123 456</span>\n<span class="token comment">// =&gt; undefined</span>\n</code></pre></div><p>ES6 块级作用域</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// =&gt; undefined</span>\n<span class="token comment">// =&gt; 0</span>\n<span class="token comment">// =&gt; 1</span>\n<span class="token comment">// =&gt; 2</span>\n</code></pre></div><p>eval 作用域</p><div class="language-js"><pre><code><span class="token string">&#39;use strict&#39;</span>\n<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>\n<span class="token function">eval</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  var bar = &#39;foo&#39;\n  console.log(bar)\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span>\n<span class="token comment">// =&gt; foo</span>\n<span class="token comment">// =&gt; bar</span>\n<span class="token comment">// =&gt; undefined</span>\n</code></pre></div><h3 id="hoisting"><a class="header-anchor" href="#hoisting" aria-hidden="true">#</a> Hoisting</h3><p><strong>按序执行么？</strong></p><div class="language-js"><pre><code><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>\n<span class="token comment">// =&gt; undefined</span>\n<span class="token comment">// =&gt; undefined</span>\n\n<span class="token comment">/** Vs **/</span>\n<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>\n<span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><strong>声明式、表达式定义函数的区别</strong></p><div class="language-js"><pre><code><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// =&gt; foo</span>\n<span class="token comment">// =&gt; 123</span>\n<span class="token comment">// =&gt; undefined</span>\n\n<span class="token comment">/** Vs **/</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// =&gt; 123</span>\n<span class="token comment">// =&gt; undefined</span>\n</code></pre></div><p><strong>在 if 语句中定义的函数</strong></p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">,</span> bar<span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo ~&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>\n<span class="token punctuation">}</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// =&gt; undefined true undefined true</span>\n<span class="token comment">// =&gt; Uncaught TypeError: foo is not a function</span>\n</code></pre></div><h3 id="scope-chain"><a class="header-anchor" href="#scope-chain" aria-hidden="true">#</a> Scope Chain</h3><p>JavasSript 的作用域属于「词法作用域」或叫「静态作用域」</p><p><strong>作用域链</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>\n  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;golobal&#39;</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// =&gt; golobal</span>\n<span class="token comment">// =&gt; undefined</span>\n</code></pre></div><p><strong>简单表示调用栈</strong></p><div class="language-"><pre><code>             Call Stack\n┌──────────────────────────────────┐\n│         ┌────────────────────┐   │\n│    bar: │                    │   │\n│         └────────────────────┘   │\n│         ┌────────────────────┐   │\n│    foo: │var name = &#39;foo&#39;    │   │\n│         └────────────────────┘   │\n│         ┌────────────────────┐   │\n│         │var name = &#39;global&#39; │   │\n│ global: │function bar        │   │\n│         │function foo        │   │\n│         └────────────────────┘   │\n└──────────────────────────────────┘\n</code></pre></div><p><strong>块级作用域如何实现</strong></p><p>var 声明的变量，存在着变量覆盖、变量污染的问题，ES6 引入块级作用域</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">10</span>\n  <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>\n  <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">22</span>\n  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;golobal&#39;</span>\n<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">6</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// =&gt; golobal 6</span>\n<span class="token comment">// =&gt; undefined</span>\n</code></pre></div><div class="language-"><pre><code>                    Call Stack\n┌───────────────────────────────────────────────────┐\n│       ┌────────────────────────────────────────┐  │\n│       │   variable env         lexical env     │  │\n│       │ ┌────────────────┐ ┌─────────────────┐ │  │\n│       │ │                │ │let name = &#39;bar&#39; │ │  │\n│   bar │ │                │ └─────────────────┘ │  │\n│       │ │                │ ┌─────────────────┐ │  │\n│       │ │                │ │let age = 10     │ │  │\n│       │ └────────────────┘ └─────────────────┘ │  │\n│       └────────────────────────────────────────┘  │\n│       ┌────────────────────────────────────────┐  │\n│       │   variable env         lexical env     │  │\n│   foo │ ┌────────────────┐ ┌─────────────────┐ │  │\n│       │ │var name = &#39;foo&#39;│ │let age = 22     │ │  │\n│       │ └────────────────┘ └─────────────────┘ │  │\n│       └────────────────────────────────────────┘  │\n│       ┌────────────────────────────────────────┐  │\n│       │   variable env          lexical env    │  │\n│       │ ┌───────────────────┐ ┌──────────────┐ │  │\n│ global│ │var name = &#39;global&#39;│ │ let age = 6  │ │  │\n│       │ │function bar       │ │              │ │  │\n│       │ │function foo       │ │              │ │  │\n│       │ └───────────────────┘ └──────────────┘ │  │\n│       └────────────────────────────────────────┘  │\n└───────────────────────────────────────────────────┘\n</code></pre></div><p><code>let</code> <code>const</code> 声明的变量，使用了小型的栈结构进行保存</p><h2 id="execution-context"><a class="header-anchor" href="#execution-context" aria-hidden="true">#</a> Execution Context</h2><p>当函数调用时</p><ol><li>创建阶段</li></ol><ul><li>初始化作用域链(Scope Chain)</li><li>创建变量对象(Variable Object)，用于保存声明的函数和变量</li><li>创建 arguments 对象，浅拷贝 arguments 对象</li><li>扫描函数内部 <ul><li>先扫描 function 声明的函数 <ul><li>如果 VO 中不存在，则以函数名为属性，值为该函数在内存中的地址</li><li>发现 function 声明的&quot;同名&quot;函数，则覆盖 VO 中已有的属性的值</li></ul></li><li>再扫描 var 声明的变量 <ul><li>如果变量名在 VO 中不存在，则创建 VO 属性，初始化值为 undefined</li><li>如果变量名在 VO 中已存在，则忽略，继续往下扫描</li></ul></li></ul></li><li>确定 this 的值</li></ul><ol start="2"><li>激活、代码执行阶段</li></ol><ul><li>给变量赋值、执行代码</li></ul><p>var 和 function 声明同名情况以及 function 重复声明情况</p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>\n<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">90</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>\n<span class="token comment">// =&gt; ƒ foo () { console.log(123) }</span>\n<span class="token comment">// =&gt; 90</span>\n<span class="token comment">// =&gt; undefined</span>\n</code></pre></div><p>抽象表示执行上下文</p><div class="language-js"><pre><code><span class="token keyword">var</span> baz <span class="token operator">=</span> <span class="token string">&#39;baz&#39;</span>\n<span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>\n  <span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-js"><pre><code>ExecutionContext <span class="token operator">=</span> <span class="token punctuation">{</span>\n  ScopeChain<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">/* VO + 所有父级的执行上下文的 VO */</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  VariableObject<span class="token operator">:</span> <span class="token punctuation">{</span>\n    arguments<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string">&#39;0&#39;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      length<span class="token operator">:</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>\n    bar<span class="token operator">:</span> <span class="token number">0x12033</span> <span class="token comment">// 内存地址</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token keyword">this</span><span class="token operator">:</span> window\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="closure"><a class="header-anchor" href="#closure" aria-hidden="true">#</a> Closure</h3><blockquote><p>一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。--- MDN</p></blockquote><h3 id="this"><a class="header-anchor" href="#this" aria-hidden="true">#</a> This</h3><p><code>this</code> 是运行时绑定的</p><ol><li>全局变量</li><li>构造函数</li><li>对象方法</li><li>call apply bind 绑定</li></ol><blockquote><p><a href="https://medium.com/@itIsMadhavan/what-is-the-execution-context-stack-in-javascript-e169812e851a" target="_blank" rel="noopener noreferrer">What is the Execution Context &amp; Stack in JavaScript?</a></p></blockquote><blockquote><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#this_in_function_contexts" target="_blank" rel="noopener noreferrer">this</a></p></blockquote><blockquote><p><a href="https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/" target="_blank" rel="noopener noreferrer">Gentle Explanation of &quot;this&quot; in JavaScript</a></p></blockquote>',55);o.render=function(a,t,o,e,c,l){return n(),s("div",null,[p])};export default o;export{t as __pageData};