---
title: java 泛型
---

泛型就是一个 标签，表示数据的类型（不能是基本数据类型，如：int double，要是用包装类 Integer）

jdk 5.0 引入参数化类型，在创建集合对象时，指定集合元素的类型

## 为什么要有泛型

```java
ArrayList lst = new ArrayList();
lst.add(12);
lst.add(34);
// 类型不一致，不安全
lst.add("Tom");
for (Object score: lst) {
  // 可能出现 ClassCastException
  int s = (Integer) score;
}
```

## 在集合中使用


```java
ArrayList<Integer> lst = new ArrayList<Integer>();
lst.add(12);
// 编译时，进行类型检查，保证数据安全
// lst.add("Tom"); // 编译不通过
for (Integer score: lst) {
  // 不需要强转类型
  System.out.print(score);
}

Iterator<Integer> it = lst.iterator();
Integer n = it.next();

Map<String, Integer> map = new HashMap<String, Integer>();
// 泛型嵌套
Set<Map.Entry<String, Integer>> set = map.entrySet();
```

## 自定义泛型结构

泛型类、泛型接口、泛型方法

```java
public class Order<T> {
  T id;
}

Order o = new Order<Integer>(); // 指明泛型
public class Order1 extends Order<String> {

}
new Order1(); // Order1 不是泛型类

public class Order2<T> extends Order<T> {

}
new Order2<String>(); // Order2 是泛型类,要指明类型
```

泛型不同的引用不能相互赋值

```java
ArrayList<Integer> list1 = null;
ArrayList<String> list2 = null;
list1 = list2; // error
```

造一个 T 类型的数组

```java
// 编译不同通过
// T[] arr = new T[10];
// 真确写法
T[] arr = (T[]) new Object[10];
```

::: tip 💡
实例化时，如果没有指明类的泛型，则泛型的类型默是 Object，但不等同于 Object
静态方法中不能使用泛型，泛型类型实例化时传入
异常类不能声明为泛型类
:::

## 泛型在继承上的体现


## 通配符的使用


## 泛型应用举例
