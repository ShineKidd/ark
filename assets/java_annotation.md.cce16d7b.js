import{_ as n,c as a,o as s,b as t}from"./app.e632a585.js";const m='{"title":"java \u6CE8\u89E3","description":"","frontmatter":{"title":"java \u6CE8\u89E3"},"headers":[{"level":2,"title":"\u6587\u6863\u7C7B\u6CE8\u89E3","slug":"\u6587\u6863\u7C7B\u6CE8\u89E3"},{"level":2,"title":"jdk \u5185\u7F6E\u6CE8\u89E3","slug":"jdk-\u5185\u7F6E\u6CE8\u89E3"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u6CE8\u89E3","slug":"\u81EA\u5B9A\u4E49\u6CE8\u89E3"},{"level":2,"title":"\u5143\u6CE8\u89E3","slug":"\u5143\u6CE8\u89E3"},{"level":3,"title":"Retention","slug":"retention"},{"level":3,"title":"Target","slug":"target"},{"level":3,"title":"Documented","slug":"documented"},{"level":3,"title":"Inherited","slug":"inherited"},{"level":2,"title":"\u53EF\u91CD\u590D\u6CE8\u89E3","slug":"\u53EF\u91CD\u590D\u6CE8\u89E3"},{"level":2,"title":"\u7C7B\u578B\u6CE8\u89E3","slug":"\u7C7B\u578B\u6CE8\u89E3"}],"relativePath":"java/annotation.md","lastUpdated":1635690391842}',p={},o=t(`<p>jdk 5.0 \u589E\u52A0\u91CC\u6700\u5143\u6570\u636E\uFF08Meta Data\uFF09\u7684\u652F\u6301\u3002\u5728\u4E0D\u6539\u53D8\u539F\u6709\u903B\u8F91\u7684\u57FA\u7840\u4E0A\uFF0C\u5728\u6E90\u6587\u4EF6\u4E2D\u5D4C\u5165\u4E00\u4E9B\u8865\u5145\u4FE1\u606F</p><p>\u53EF\u7528\u4E8E\u4FEE\u9970 \u5305\u3001\u7C7B\u3001\u6784\u9020\u5668\u3001\u65B9\u6CD5\u3001\u6210\u5458\u53D8\u91CF\u3001\u53C2\u6570\u3001\u5C40\u90E8\u53D8\u91CF\u7684\u58F0\u660E\uFF0C\u66FF\u4EE3\u5197\u4F59\u7684\u4EE3\u7801\u548C XML \u914D\u7F6E</p><p>\u57FA\u672C\u4E0A\uFF1A\u6846\u67B6 = \u6CE8\u89E3 + \u53CD\u5C04 + \u8BBE\u8BA1\u6A21\u5F0F</p><h2 id="\u6587\u6863\u7C7B\u6CE8\u89E3" tabindex="-1">\u6587\u6863\u7C7B\u6CE8\u89E3 <a class="header-anchor" href="#\u6587\u6863\u7C7B\u6CE8\u89E3" aria-hidden="true">#</a></h2><div class="language-java"><pre><code><span class="token comment">/**
 * @author zz,xx
 * @version 1.0.1
 * @see
 * @since
 * @param
 */</span>
</code></pre></div><h2 id="jdk-\u5185\u7F6E\u6CE8\u89E3" tabindex="-1">jdk \u5185\u7F6E\u6CE8\u89E3 <a class="header-anchor" href="#jdk-\u5185\u7F6E\u6CE8\u89E3" aria-hidden="true">#</a></h2><p>\u5728\u7F16\u8BD1\u65F6\u8FDB\u884C\u683C\u5F0F\u68C0\u67E5</p><ul><li>@Override \uFF1A\u9650\u5B9A\u91CD\u5199\u7236\u7C7B\u3001\u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5</li><li>@Deprecated \uFF1A\u4FEE\u9970\u7C7B\u3001\u65B9\u6CD5\uFF08\u5411\u4E0B\u517C\u5BB9\uFF09</li><li>@SuppressWarnings \uFF1A\u6291\u5236\u7F16\u8BD1\u5668\u8B66\u544A</li></ul><h2 id="\u81EA\u5B9A\u4E49\u6CE8\u89E3" tabindex="-1">\u81EA\u5B9A\u4E49\u6CE8\u89E3 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6CE8\u89E3" aria-hidden="true">#</a></h2><p>\u9700\u8981\u914D\u4E0A\u6CE8\u89E3\u7684\u4FE1\u606F\u5904\u7406\u6D41\u7A0B\uFF08\u4F7F\u7528\u53CD\u5C04\uFF09\u624D\u6709\u610F\u4E49</p><div class="language-java"><pre><code><span class="token comment">// \u58F0\u660E\u6CE8\u89E3</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B9A\u4E49\u5185\u5BB9\u6210\u5458\u53CA\u9ED8\u8BA4\u503C</span>
  <span class="token comment">// \u5982\u679C\u6CA1\u6709\u6210\u5458\uFF0C\u5219\u8868\u793A\u6807\u8BC6\u4F5C\u7528</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528\u9ED8\u8BA4\u503C</span>
<span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5143\u6CE8\u89E3" tabindex="-1">\u5143\u6CE8\u89E3 <a class="header-anchor" href="#\u5143\u6CE8\u89E3" aria-hidden="true">#</a></h2><p>\u7528\u4E8E\u4FEE\u9970\u5176\u4ED6\u6CE8\u89E3\uFF0Cjdk 5.0 \u63D0\u4F9B 4 \u4E2A</p><h3 id="retention" tabindex="-1">Retention <a class="header-anchor" href="#retention" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u88AB\u4FEE\u9970\u7684 Annotation \u7684\u751F\u547D\u5468\u671F SOURCE/CLASS(\u9ED8\u8BA4)/RUNTIME</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>CLASS<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="target" tabindex="-1">Target <a class="header-anchor" href="#target" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u88AB\u4FEE\u9970\u7684 Annotation \u80FD\u4FEE\u9970\u90A3\u4E9B\u7A0B\u5E8F\u5143\u7D20</p><div class="language-java"><pre><code><span class="token comment">// \u6307\u5B9A MyAnnotation \u53EA\u80FD\u4FEE\u9970\u7C7B\u3001\u6784\u9020\u5668</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span>TYPE<span class="token punctuation">,</span> CONSTRUCTOR<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="documented" tabindex="-1">Documented <a class="header-anchor" href="#documented" aria-hidden="true">#</a></h3><p>\u88AB\u4FEE\u9970\u7684 Annotation \u5728 javadoc \u89E3\u6790\u65F6\uFF0C\u80FD\u4FDD\u7559\u4E0B\u6765</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token punctuation">{</span>CONSTRUCTOR<span class="token punctuation">,</span> FIELD<span class="token punctuation">,</span> LOCAL_VARIABLE<span class="token punctuation">,</span> METHOD<span class="token punctuation">,</span> PACKAGE<span class="token punctuation">,</span> PARAMETER<span class="token punctuation">,</span> TYPE<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Deprecated</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="inherited" tabindex="-1">Inherited <a class="header-anchor" href="#inherited" aria-hidden="true">#</a></h3><p>\u88AB\u4FEE\u9970\u7684 Annotation \u5C06\u5177\u6709\u7EE7\u627F\u6027\uFF0C\u5B50\u7C7B\u7EE7\u627F\u7236\u7C7B\u6CE8\u89E3</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> getAnnotations <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Annotation</span><span class="token punctuation">[</span><span class="token punctuation">]</span> annotations <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>annotations<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u53EF\u91CD\u590D\u6CE8\u89E3" tabindex="-1">\u53EF\u91CD\u590D\u6CE8\u89E3 <a class="header-anchor" href="#\u53EF\u91CD\u590D\u6CE8\u89E3" aria-hidden="true">#</a></h2><p>jdk 8</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Repeatable</span><span class="token punctuation">(</span><span class="token class-name">MyAnnotations</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotations</span> <span class="token punctuation">{</span>
  <span class="token class-name">MyAnnotation</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5199\u591A\u4E2A\u91CD\u590D\u7C7B\u578B\u7684\u6CE8\u89E3</span>
<span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@MyAnnotation</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u26A0\uFE0F \uFF1AMyAnnotation MyAnnotations \u8981\u4FDD\u6301 @Inherited @Retention \u548C @Target \u7B49\u5143\u6CE8\u89E3\u76F8\u540C</p><h2 id="\u7C7B\u578B\u6CE8\u89E3" tabindex="-1">\u7C7B\u578B\u6CE8\u89E3 <a class="header-anchor" href="#\u7C7B\u578B\u6CE8\u89E3" aria-hidden="true">#</a></h2><p>jdk 1.8</p><p>\u8868\u793A\u8BE5\u6CE8\u89E3\u53EF\u4EE5\u5199\u5728\u7C7B\u578B\u53D8\u91CF\u7684\u751F\u547D\u8BED\u53E5\u4E2D\uFF0C\u6BD4\u5982\u6CDB\u578B</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE_PARAMETER<span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE_USE<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span>  <span class="token string">&quot;hi&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Generic</span> <span class="token operator">&lt;</span> <span class="token annotation punctuation">@MyAnnotation</span> <span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> show <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token annotation punctuation">@MyAnnotation</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">{</span>
    <span class="token class-name">ArrayList</span> <span class="token operator">&lt;</span><span class="token annotation punctuation">@MyAnnotation</span> <span class="token class-name">String</span><span class="token operator">&gt;</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token annotation punctuation">@MyAnnotation</span> <span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token number">10L</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,33),e=[o];function c(l,u,i,k,r,d){return s(),a("div",null,e)}var g=n(p,[["render",c]]);export{m as __pageData,g as default};
