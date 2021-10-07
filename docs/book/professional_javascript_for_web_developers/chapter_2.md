# HTML 中的 JavaScript


## 使用 \<script> 元素

列举 8 个属性

src：设置后浏览器会忽略标签内部代码，不受同源策略的限制，但是 https 下不能请求 http 服务器下的资源

type：按惯例，这个值始终是 text/javascript 。当值为 "module" 时，代码会被当成 ES6 模块，设置浏览器不识别的值，会忽略解析其内容

async: 立即下载脚本，不阻塞其他资源下载，不阻塞文档解析，下载完成后立即执行。对外部脚本有效

defer：下载脚本，待文档完全被解析后执行，对外部脚本有效

integrity：指定加密签名，自动校验接受的脚步资源是否签名一致。确保内容分发网络不会提供恶意内容

crossorigin：默认不使用 CORS。 值为 "anonymous" 请求不包含凭据，值为 "use-credentials" 意味着请求会包含凭据

charset：指定代码字符集，大多少浏览器不在乎它的值

language：废弃，大多少浏览器会忽略此属性


## 行内脚步与外部脚本的比较

对于 HTML 中没有设置 async defer 的 \<script> ，浏览器会依次解析（外部脚本则等待下载完再解析），期间会停止对 DOM CSS 的解析（阻塞）

设置了 defer 属性后，浏览就会（推迟）在文档解析完后，DOMContentLoaded 事件之前执行。在实际中 defer 的脚步也不绝对总是按顺序执行或者在 属性后，浏览就会（推迟）在文档解析完后，DOMContentLoaded 事件之前执行

设置了 async 的脚步，会保证在页面的 load 事件之前执行，但相对于 DOMContentLoaded 前后均可能，async 的脚步之间时无法保证执行顺序的

使用 document.createEelement('script') 动态创建的脚本，在添加到 DOM 之前不会发送请求，脚本也是一本加载的，这和 async 属性作用类似。但是这会影响它在资源获取队列中的优先级，可能会影响性能。可以使用 `<link rel="preload" href="xx.js">` 让预加载器知道这些动态请求文件的存在

外部 script 更易于维护和分发，同时可被 http 缓存，轻量独立的 JavaScript 组件在 http2 下请求消耗已显著降低，如果不想支持老的浏览器，这是个不错的选择

把外部加载的 script 放在 \<body> 标签内的最底部，依然是最佳实践


## 文档模式对 JavaScript 有什么影响

IE5.5 发明了文档模式的概念，可使用 doctype 切换文档模式。最初有两种：混杂模式（quirks mode）和标准模式（standard mode）

在 quirk mode 下支持一下非标准的特性，主要体现在 CSS 渲染方面，JavaScript 也有一定关联影响（副作用）

随着浏览器的普及，出现了准标准模式（almost standard mode），支持很多标准特性的同时，又没有那么严格。。。


## 确保 JavaScript 不可用时的用户体验

在不支持 JavaScript 或关闭 JavaScript 功能的浏览器上，会解析 /<noscript> 标签的内容。这样可提醒用户页面依赖 JavaScript 才能正常工作
