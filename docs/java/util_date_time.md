---
title: java 工具类之时间
---

## Date

jdk 1.0 引入


## Calendar

Calendar 是抽象类，jdk 1.1 引入


## java.time

jdk 1.8 引入第三方库 joda-time 做为 `java.time`

引入原因：
- 可变性：像日期和时间这样的类应该是不可变的
- 偏移性：Date 中的年份是从 1900 年开始的，而月份都是从 0 开始的
- 格式化：格式化只对 Date 用，而 Calendar 类则不行
- 其他：它们是线程不安全的；不能处理闰秒


### LocalDate

表示 IOS 格式(yyyy-MM-dd)的日期

### LocalTime


### LocalDateTime

### DateTimeFormatter

## java.time.format

## java.time.zone

## java.time.temporal

## java.time.chrono



## Instant








> IOS-8601 日历系统，是国标准化组织指定的现代公民的日期和时间表示法，也就是公历
