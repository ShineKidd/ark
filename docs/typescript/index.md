---
title: TypeScript 基础
---

## 常见错误


- TS2456 范型循环引用自身

```ts
type T = Readonly<T> // TS2456
```

- TS2554 函数形参与实参个数不匹配


```ts
function f (a: string | undefined): void { }
f() // TS2554
```

- TS2794 Promise resolve 参数缺失

```ts
new Promise((resolve, reject) => {
  resolve() // TS2794 可 new Promise<void> 解决
})
```


- TS1169 interface 中使用非字面量或者非唯一的 symbol 类型

```ts
interface {
  [k in 'a' | 'b']: string // TS1169
}
```

- TS2345 传参时，类型不兼容

```ts
function f (type: TypeEnum): void { }
f(EnumA.XXX) // TS2345
```


- TS2589 范型实例化嵌套过深


- TS2322 变量赋值操作，类型不兼容

```ts
const s: string = 1 // TS2322
```

- TS2352 类型未正确缩窄

```ts
function f (s?: string) {
  s.trim() // TS2352
}

// 异步
let s: string | undefined = 'str'
if (s) {
  setTimeout(() => {
    s.trim() // TS2352
  }, 10);
}
```
