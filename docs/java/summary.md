---
title: 总结
---

### 相似比较

底层结构均使用 char[] 存储

- String： 不可变的字符序列（效率最低）
- StringBuffer： 可变的字符序列，线程安全（效率低）
- StringBuilder： 可变的字符序列，线程不安全（效率高）JDK5.0

StringBuilder，StringBuffer：初始化 char[] 容量 16 ，超出是自动扩容
