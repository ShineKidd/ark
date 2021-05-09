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
function foo(){
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

```js
console.log(f)
var f = 1
console.log(f)
function f () {}
console.log(f)
// -----
print()
function print() {
  console.log(1)
}
var print = function() {
  console.log(2)
}
print()
// ---
```



在 if 语句中定义的函数

```js
console.log(foo, 'foo' in window) // undefined true
if (false) {
  function foo () {
    console.log('foo ~')
  }
}
foo() // Uncaught TypeError: foo is not a function
```

### Scope Chain



**结论**
- 在 if 代码块中，避免用声明式定义函数
- 一段代码如果定义了两个相同名字的函数，那么最终生效的是最后一个函数
- `var` `function` 声明的变量，存在变量提升的现象
-




var 声明的变量和 function 声明的函数

## This

runtime binding



### var let const

var 存在着变量覆盖、变量污染

三者是如何并存的？

块级作用域就是通过词法环境的栈结构来实现的，而变量提升是通过变量环境来实现，通过这两者的结合，JavaScript引擎也就同时支持了变量提升和块级作用域了。


## Scope Chain

JavaScript 的三种作用域

- 全局作用域
- 函数作用域
- eval 作用域
- try-catch 作用域
- 块级作用域

里面声明的变量不能被外部访问


```js
var name = 'f'
bar()
function foo () {
  console.log(name)
}
function bar () {
  var name = 'b'
  foo()
}
```


作用域(scope)

作用域链(scope chain)

调用栈就是用来管理函数调用关系的一种数据结构。因此要讲清楚调用栈，你还要先弄明白函数调用和栈结构

当使用eval函数的时候，eval的代码也会被编译，并创建执行上下文。
## Execution Stack

- stack exceed error

each function call creates a new execution context

to stages to create a execution context by js interpreter

函数和变量是有区别的

```js
// 两种写法一样么

```

函数和方法是有区别的


```js
function b () {
  throw 'errr'
}
```


```js
console.log(a)
function a () { console.log('a') }
var a = 90
console.log(a)
```


执行函数前，解释器先扫描一遍函数内部, 仅定义，而未赋值
1. 创建阶段
  - 创建 scope chain
  - 创建 variables functions and arguments
  - determine the value of ‘this’

2. 激活、代码执行阶段
 - 给变量赋值、执行代码

 执行上下文可抽象成

```js
executionContextObj = {
  /* variableObject + all parent execution context's variableObject */
  'scopeChain': {
  },
  /* function arguments / parame ters, inner variable and function declarations */
  'variableObject': {
      arguments: {
        0: 22,
        length: 1
      },
      f:  // pointer to the function
      ...
     },
  'this': {}
}

```

### variable environment
### lexical environment

在编译阶段生成

## closure

> [What is the Execution Context & Stack in JavaScript?](https://medium.com/@itIsMadhavan/what-is-the-execution-context-stack-in-javascript-e169812e851a)

> [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#this_in_function_contexts)

> [Gentle Explanation of "this" in JavaScript](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)
