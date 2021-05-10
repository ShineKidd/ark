import{o as a,c as e,d as n}from"./app.2a3e59c4.js";const p='{"title":"npm","description":"","frontmatter":{"title":"npm"},"headers":[{"level":2,"title":".npmrc","slug":"npmrc"},{"level":2,"title":"package.json","slug":"package-json"},{"level":2,"title":"package-lock.json","slug":"package-lock-json"}],"relativePath":"javascript/npm.md","lastUpdated":1620648668820}',r={},c=n('<p>npm 从 cli 环境变量，npmrc 文件获取配置信息</p><h2 id="npmrc"><a class="header-anchor" href="#npmrc" aria-hidden="true">#</a> .npmrc</h2><div class="language-bash"><pre><code>projectRootDir/.npmrc\n~/.npmrc\n</code></pre></div><p>指定的包配置特定的源</p><div class="language-bash"><pre><code><span class="token comment"># @babel/{a,b,c..} 走这个源下载 npm 包</span>\n@babel:registry<span class="token operator">=</span>http://192.168.31.16:4873\n@vue:registry<span class="token operator">=</span>http://192.168.31.56:4877\n</code></pre></div><h2 id="package-json"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2><p>设置 <code>&quot;private&quot;: true</code> 防止包被发到公网</p><ul><li>types typings</li></ul><h2 id="package-lock-json"><a class="header-anchor" href="#package-lock-json" aria-hidden="true">#</a> package-lock.json</h2>',9);r.render=function(n,p,r,s,t,o){return a(),e("div",null,[c])};export default r;export{p as __pageData};