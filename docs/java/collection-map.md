---
title: java 集合
---

数组和集合都是对多个数据进行存储操作的结构，简称 java 容器

数组特点回顾
1. 一旦初始化后，其长度就确定了，不可变
2. 一旦定义好，其元素类型就确定，（多态性 Object[]）
3. 提供对方法很有限，添加、删除、插入不方便，效率不高
4. 存储的元素有序、可重复

## Collection

```bash
Collection
  |-- List
  |  |-- ArraryList
  |  |-- LinkedList
  |  |-- Vector
  |-- Set
  |  |-- HashSet
  |     |-- LinkedHashSet
  |-- TreeSet

Map
  |-- Hashtable
  |  |-- Properties
  |-- HashMap
  |  |-- LinkedHashMap
  |-- SortedMap
  |  |-- TreeMap
```

单列数据，元素有序、可重复（动态数组）

定义的方法

`add()` `addAll()` `size()` `isEmpty` `clear()` `remove()` `removeAll()` `contains()` `containsAll()` `retainAll()` `equals()`
`hashCode()` `toArray()` `iterator()` `forEach()`

### List

```java
ArrayList lst = new ArrayList(); // jdk1.7 创建容量是 10 的 Object[](jdk1.8 第一次 add 时创建)，指定初始容量
lst.add(123) // 容量不足时，扩容 1.5 倍，使用 copyOf 复制原有数据
for (Object obj: lst) {
  System.out.println(obj);
}
```

::: tip 💡
`contains()` `remove()` 调用元素的 `equals()` 方法进行比较，添加对象时要重写该方法
`iterator.remove()` 不同于集合的 `remove()`
数组 转 集合 `Arrays.asList()`
:::


区别：
- ArrayList 作为 List 接口的主要实现类，线程不安全、效率高，底层存储 Object[]
- LinkedList 底层存储 双向链表，删除、插入性能高
- Vector 作为 List 接口的“古老”实现类 jdk1.0，线程安全、效率低 Object[]，基本不用了

共同点：
- 都实现类 List 接口，存储数据是有序的，可重复的


ArrayList 特有

`indexOf()` `lastIndexOf()` `get(index)` `set(index, ojb)`  `subList()`

### Set

元素无序、不可重复(通过`equals()` `hasCode()`判断)，我们添加的对象要重写这两个方法

- HashSet Set: 接口主要实现类，线程不安全，底层使用数组和链表存储（HashMap）
- LinkedHashSet: HashSet 子类，每个元素维护了对前、后元素的引用，遍历效率高于 HashSet
- TreeSet: 可以按照添加的对象指定属性进行排序


::: tip 💡 hasCode 之 31
尽量选择的大的系数，计算得到的 hash 地址越大，“冲突”越少，查找效率高
31 只占 5bits 相乘时数据溢出的概率小
31 可以由 i*31 == (i &lt;&lt; 5) - 1 表示，很多虚拟机有做优化
31 是一个素数，一个数乘以这个素数，得到的结果只能被这个素数、被乘数、1 整除，可以降低 hash 冲突的概率
:::


### TreeSet

::: tip 💡
仅保存相同类型的数据，数据要实现 Comparable 接口
内部判断是否相同使用 `compareTo()` 返回 0 就表示相同数据
内部红黑树的存储结构，查询效率比 List 高
:::

```java
new TreeSet();
// 自定义排序
new TreeSet(Comparator);
```

## Map

双列数据 y = f(x)

Map 中的 key 是无序的，不可重复，使用 Set 存储所有的 key

Map 中的 value 是无序，可重复，使用 Collection 存储所有的 value

Map 中的 Entry 是无序，不可重复，使用 Set 存储所有的 value


### 方法

`put(Object: key, Object: value)` `putAll(Map: m)` `remove(Object: key)` `clear()` `size()` `isEmpty()` `equals()` `get(Object: key)` `containsKey(Object: key)` `containsValue(Object: value)` `keySet()` `values()` `entrySet()`


- HashMap jdk 1.2 线程不安全，可存储 null 的 key value，底层 数组 + 链表

初始容量 16，填充因子 0.75，当某一索引上的链表长度 > 8 且 Node[] 长度 > 64 ，该索引位置数据转为用红黑树存储

```java
HashMap map = new HashMap(); // Entry[] 长度 16  ，扩容时 容量翻倍
map.put(key, value)
// key.hashCode()
// code 相同
//   key.equals() ? 替换 value : 添加成链表
// code 不同，添加
```
jdk8 用 Node[] 代替 Entry ，搜查 put 才创建。存储：数组 + 链表 + 红黑树（



- LinkedHashMap 遍历时按添加的顺序

继承至 HashMap 内部定义了 Entry 类，替换 HashMap 的 Node 类

- TreeMap 底层使用 红黑树

要求 key 是同一个类创建的对象，因为要根据 key 进行排序


```java
// 定制排序，传入 Comparator 对象
TreeMap map = new TreeMap(new Comparator () {
  @override
  public int compare(Object o1, Object o2) {
    if (o1 instanceof User && o2 instanceof User) {
      User u1 = (User)o1;
      User u2 = (User)o2;
      return Integer.compare(u1.getAge(), u2.getAge());
    } else {
      throw new RuntimeException("输入的类型不匹配");
    }
  }
});
```


- Hashtable: jdk 1.0 线程安全效率低，不建议使用，不能存储 null
- Properties

用于处理配置文件，key value 都是 string 型

```java
public class TestProperties {
  public static void main (String[] args) throws Exception {
    Properties pros = new Properties();
    FileInputStream fis = new FileInputStream("./jdbc.properties");
    pros.load(fis);
    String name = pros.getProperty("name");
    String pwd = pros.getProperty("password");
  }
}
```

## Collections

操作 Collection Map 的工具类

常用方法

`reverse(List)` `shuffle(List)` `sort(List)` 自然排序 `swap(List, Int, Int)` `max(Collection, Comparator?)` `min(Collection, Comparator?)` `frequency(Collection, Object)` 自定元素出现的次数 `copy(List dest, List src)` `replaceAll(List, Object oldVal, Object newVal)`


将指定集合包装成线程同步的集合


```java
List unsafeList = new ArrayList();
List safeList = Collections.synchronizedList(lisunsafeListt);
```
