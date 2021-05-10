---
title: Execution Context
---

## Concepts

**JavaScript 是「弱类型」「动态」语言**

```js
// 隐式类型转换
var bar = 'bar'
bar = 1

// 在运行过程中才检查数据类型
function foo () {
  return Math.random() > 0.5 ? 'foo' : 1
}
console.log(typeof foo())
```

**JavaScript (目前)有 8 种数据类型**

```js
Number String Boolean Symbol BigInt Object null undefined
```

**JavaScript 执行前需要编译**

词法分析、语法解析、代码优化、代码生成

Uncaught SyntaxError: Unexpected token


## Scope

**什么是作用域**

作用域是指在程序中定义变量的区域，该位置决定了变量的生命周期。通俗地理解，作用域就是变量与函数的可访问范围，即作用域控制着变量和函数的可见性和生命周期


**4 (主要的)种作用域**

全局作用域 & 函数作用域

```js
var foo = 123
    bar = 456
;(function (root, doc, undefined) {
  var foo = 'foo',
      bar = 'bar'
})(window, document)
console.log(foo, bar)
// => 123 456
// => undefined
```

ES6 块级作用域

```js
function foo (){
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  }
}
foo()
// => undefined
// => 0
// => 1
// => 2
```

eval 作用域

```js
'use strict'
var bar = 'bar'
eval(`
  var bar = 'foo'
  console.log(bar)
`)
console.log(bar)
// => foo
// => bar
// => undefined
```

### Hoisting

**按序执行么？**

```js
bar()
function bar () {
  console.log(foo)
}
var foo = 'foo'
// => undefined
// => undefined

/** Vs **/
bar()
var foo = 'foo'
function bar () {
  console.log(foo)
}
```

**声明式、表达式定义函数的区别**

```js
foo()
function foo () {
  console.log('foo')
}
var foo = function () {
  console.log(123)
}
foo()
// => foo
// => 123
// => undefined

/** Vs **/
foo()
function foo () {
  console.log('foo')
}
function foo () {
  console.log(123)
}
// => 123
// => undefined
```

**在 if 语句中定义的函数**

```js
console.log(foo, 'foo' in window, bar, 'bar' in window)
if (false) {
  function foo () {
    console.log('foo ~')
  }
  var bar = 'bar'
}
foo()
// => undefined true undefined true
// => Uncaught TypeError: foo is not a function
```


### Scope Chain

JavasSript 的作用域属于「词法作用域」或叫「静态作用域」

**作用域链**

```js
function bar () {
  console.log(name)
}
function foo () {
  var name = 'foo'
  bar()
}
var name = 'golobal'
foo()
// => golobal
// => undefined
```

**简单表示调用栈**

```
             Call Stack
┌──────────────────────────────────┐
│         ┌────────────────────┐   │
│    bar: │                    │   │
│         └────────────────────┘   │
│         ┌────────────────────┐   │
│    foo: │var name = 'foo'    │   │
│         └────────────────────┘   │
│         ┌────────────────────┐   │
│         │var name = 'global' │   │
│ global: │function bar        │   │
│         │function foo        │   │
│         └────────────────────┘   │
└──────────────────────────────────┘
```

**块级作用域如何实现**

var 声明的变量，存在着变量覆盖、变量污染的问题，ES6 引入块级作用域

```js
function bar () {
  let age = 10
  {
    let name = 'bar'
  }
  console.log(name, age)
}
function foo () {
  var name = 'foo'
  let age = 22
  bar()
}
var name = 'golobal'
let age = 6
foo()
// => golobal 6
// => undefined
```

```
                    Call Stack
┌───────────────────────────────────────────────────┐
│       ┌────────────────────────────────────────┐  │
│       │   variable env         lexical env     │  │
│       │ ┌────────────────┐ ┌─────────────────┐ │  │
│       │ │                │ │let name = 'bar' │ │  │
│   bar │ │                │ └─────────────────┘ │  │
│       │ │                │ ┌─────────────────┐ │  │
│       │ │                │ │let age = 10     │ │  │
│       │ └────────────────┘ └─────────────────┘ │  │
│       └────────────────────────────────────────┘  │
│       ┌────────────────────────────────────────┐  │
│       │   variable env         lexical env     │  │
│   foo │ ┌────────────────┐ ┌─────────────────┐ │  │
│       │ │var name = 'foo'│ │let age = 22     │ │  │
│       │ └────────────────┘ └─────────────────┘ │  │
│       └────────────────────────────────────────┘  │
│       ┌────────────────────────────────────────┐  │
│       │   variable env          lexical env    │  │
│       │ ┌───────────────────┐ ┌──────────────┐ │  │
│ global│ │var name = 'global'│ │ let age = 6  │ │  │
│       │ │function bar       │ │              │ │  │
│       │ │function foo       │ │              │ │  │
│       │ └───────────────────┘ └──────────────┘ │  │
│       └────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

`let` `const` 声明的变量，使用了小型的栈结构进行保存


## Execution Context

当函数调用时

1. 创建阶段
  - 初始化作用域链(Scope Chain)
  - 创建变量对象(Variable Object)，用于保存声明的函数和变量
  - 创建 arguments 对象，浅拷贝 arguments 对象
  - 扫描函数内部
    - 先扫描 function 声明的函数
      - 如果 VO 中不存在，则以函数名为属性，值为该函数在内存中的地址
      - 发现 function 声明的"同名"函数，则覆盖 VO 中已有的属性的值
    - 再扫描 var 声明的变量
      - 如果变量名在 VO 中不存在，则创建 VO 属性，初始化值为 undefined
      - 如果变量名在 VO 中已存在，则忽略，继续往下扫描
  - 确定 this 的值

2. 激活、代码执行阶段
  - 给变量赋值、执行代码

var 和 function 声明同名情况以及 function 重复声明情况

```js
console.log(foo)
function foo () {
  console.log('foo')
}
function foo () {
  console.log(123)
}
var foo = 90
console.log(foo)
// => ƒ foo () { console.log(123) }
// => 90
// => undefined
```


抽象表示执行上下文

```js
var baz = 'baz'
function foo (num) {
  var name = 'foo'
  function bar () { }
}
foo(3)
```


```js
ExecutionContext = {
  ScopeChain: {
    /* VO + 所有父级的执行上下文的 VO */
  },
  VariableObject: {
    arguments: {
      '0': 3,
      length: 1
    },
    name: 'foo',
    bar: 0x12033 // 内存地址
  },
  this: window
}
```

### Closure

> 一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。--- MDN

### This

`this` 是运行时绑定的

1. 全局变量
2. 构造函数
3. 对象方法
4. call apply bind 绑定


> [What is the Execution Context & Stack in JavaScript?](https://medium.com/@itIsMadhavan/what-is-the-execution-context-stack-in-javascript-e169812e851a)

> [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#this_in_function_contexts)

> [Gentle Explanation of "this" in JavaScript](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)
