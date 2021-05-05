---
title: JavaScript Interpreter
---


JavaScript 存在编译阶段么？

如下代码，打印的结果是？

```js
console.log(f)
var f = 1
console.log(f)
function f () {}
console.log(f)
```

交互 var 和 function 声明的顺序呢？

把 var 改成 let 呢？


### Hoisting

var 声明的变量和 function 声明的函数

## Execution Context

### This

runtime binding




## Scope Chain

JavaScript 的三种作用域

- 全局作用域
- 函数作用域
- eval 作用域
- try-catch 作用域
- 块级作用域

里面声明的变量不能被外部访问



作用域(scope)

作用域链(scope chain)


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

> https://medium.com/@itIsMadhavan/what-is-the-execution-context-stack-in-javascript-e169812e851a
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#this_in_function_contexts
