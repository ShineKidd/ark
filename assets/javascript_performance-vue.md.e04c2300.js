import{_ as e,c as t,o as p,b as a}from"./app.e632a585.js";const v='{"title":"vue \u6027\u80FD\u4F18\u5316","description":"","frontmatter":{"title":"vue \u6027\u80FD\u4F18\u5316"},"headers":[{"level":3,"title":"\u4F18\u5316\u70B9\uFF1A","slug":"\u4F18\u5316\u70B9\uFF1A"},{"level":3,"title":"SSR Vs \u540C\u6784","slug":"ssr-vs-\u540C\u6784"}],"relativePath":"javascript/performance-vue.md","lastUpdated":1635690391842}',r={},i=a('<p>\u95EE\u9898\uFF1A\u5355\u9875\u5E94\u7528\uFF0C\u52A0\u8F7D\u901F\u5EA6\u6162\uFF0C\u9996\u9875\u767D\u5C4F\u65F6\u95F4\u957F</p><p>Document Content Load</p><p>First Paint ==&gt; <code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code> \u9AA8\u67B6\u5C4F</p><p>First Contentful Paint ==&gt; \u9759\u6001 dom \u751F\u6210</p><p>First Meaningful Paint ==&gt; ajax \u6570\u636E\u56DE\u6765</p><p>Time To Interactive</p><p>(Largest Contentful Paint)</p><h3 id="\u4F18\u5316\u70B9\uFF1A" tabindex="-1">\u4F18\u5316\u70B9\uFF1A <a class="header-anchor" href="#\u4F18\u5316\u70B9\uFF1A" aria-hidden="true">#</a></h3><ol><li>v-for</li></ol><p>\u5982\u679C\u9875\u9762\u6709\u4EA4\u4E92\u51FA\u53D1\u5217\u8868\u53D8\u5316\uFF0C\u9700\u8981\u6307\u5B9A\u552F\u4E00\u7684 key \u503C</p><ol start="2"><li>keep-alive</li></ol><p>include \u5C5E\u6027\u8BBE\u7F6E\u8981\u7F13\u5B58\u7684\u7EC4\u4EF6\u540D</p><ol start="3"><li><p>\u6309\u9700\u5F15\u5165\u7EC4\u4EF6</p></li><li><p>\u8DEF\u7531\u5206\u5272</p></li></ol><h3 id="ssr-vs-\u540C\u6784" tabindex="-1">SSR Vs \u540C\u6784 <a class="header-anchor" href="#ssr-vs-\u540C\u6784" aria-hidden="true">#</a></h3><p>SSR \u670D\u52A1\u7AEF\u6E32\u67D3\uFF08php\u3001jsp\uFF09</p><p>\u9884\u6E32\u67D3\uFF1A\u901A\u8FC7\u65E0\u5934\u6D4F\u89C8\u5668\u9884\u5148\u6267\u884C\u4EE3\u7801\uFF0C\u751F\u6210 html \u5185\u5BB9\uFF08\u9AA8\u67B6\u5C4F\uFF09</p><p>\u540C\u6784\uFF1A\u4E00\u5957\u4EE3\u7801\u5BA2\u6237\u7AEF\uFF0C\u670D\u52A1\u7AEF\u540C\u65F6\u4F7F\u7528\uFF08vue\u3001react\u3001nuxt\uFF09\u4E2D\u95F4 node \u5C42\u9884\u6E32\u67D3\u9875\u9762\uFF08\u5E76\u53D1\u65F6\u670D\u52A1\u538B\u529B\u5927\uFF09</p><p>cdn \u8BF7\u6C42\u65F6\u95F4\u7247</p><p>quickLink</p><p>DNS: dns-preftch preconnect</p><p>prefetch preload prerender</p>',21),n=[i];function s(o,l,c,d,_,u){return p(),t("div",null,n)}var f=e(r,[["render",s]]);export{v as __pageData,f as default};
