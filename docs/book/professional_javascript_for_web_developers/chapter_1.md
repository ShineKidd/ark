# 什么是 JavaScript


## JavaScript 历史回顾

1995 年问世，为了代替 Perl 等服务端语言处理输入验证（减少与服务器一次往返通讯的耗时），网景开发了客户端（浏览器）脚步语言

网景工程师 Brendan Eich 着手开发名称 Mocha（后来改名 LiveScript）的脚本语言，而后与 Sun 公司合作开发，改名 JavaScript（蹭 Java 热度）

微软发布 IE3 包含 JavaScript 实现，取名 JScript，这是网景公司永远的痛！此时 JavaScript 还没有标准和规范。

1997 年 JavaScript1.1 作为提案，提交给欧洲计算机制造商协会(Ecma)。第 39 技术委员会(TC39)承担了标准化该语言的任务。他们花数月时间打造了 ECMA-262 这个语言标准

1998 年，国际化标准组织（ISO）和国际电工委员会（IEC）也将 ECMAScript 采纳为标准。自此，各家浏览器均以 ECMAScript 作为自己 JavaScript 的实现依据


## JavaScript 是什么

完整的 JavaScript 实现包含以下几个部分

- 核心（ECMAScript）
- 文档对象模型（DOM）
- 浏览器对象模型（BOM）


## JavaScript 与 ECMAScript 的关系

ECMAScript 并不局限于浏览器，Web 浏览器只是 ECMAScript 实现可能存在的一种宿主环境，其他还有如 Node.js Adobe Flash

ECMA-262 定义了这么语言的：语法、类型、语句、关键字、保留字、操作符、全局对象。

ECMAScript 只是对实现这个规范描述的**所有**方面的一门语言的**称呼**


## JavaScript 的不同版本

2009 发布 ES5 ：ES4 改动太大，发布前被放弃，ES3.1 作为第 5 版发布

2015 发布 ES6(ES2015、ES Harmony)：支持了类、模块、迭代器、生成器、箭头函数、期约（Promise）、反射、代理和众多数据类型

2016 发布 ES7

2017 发布 ES8

... 一年一个版本小幅度迭代
