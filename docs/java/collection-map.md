---
title: java 集合
---


数组和集合都是对多个数据进行存储操作的结构，简称 java 容器

数组特点
1. 一旦初始化后，其长度就确定了，不可变
2. 一旦定义好，其元素类型就确定，（多态性 Object[]）
3. 提供对方法很有限，添加、删除、插入不方便，效率不高
4. 存储的元素有序、可重复

`Arrays.asList()` 数组 ==> 集合

## Collection

单列数据，元素有序、可重复（动态数组）

### List

`add()` `addAll()` `size()` `isEmpty` `clear()` `remove()` `removeAll()` `contains()` `containsAll()` `retainAll()` `equals()`
`hasCode()` `toArray()` `iterator()`


💡 `contains()` `remove()` 调用元素的 `equals()` 方法进行比较



### ArrayList
### LinkedList
### Vector

### Set

元素无序、不可重复

## Map

双列数据 y = f(x)


### HashMap


### LinkedHashMap
### TreeMap
### Hashtable
### Properties

