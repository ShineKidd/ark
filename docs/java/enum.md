---
title: java 枚举
---

定义一组常量


## 自定义枚举

jdk 5.0 之前

```java
class Season {
  // 属性使用 private final 修饰
  private final String seasonName;
  private final String seasonDesc;
  // 使用 private 修饰构造器，并给属性赋值
  private Season (String seasonName, String seasonDesc) {
    this.seasonName = seasonName;
    this.seasonDesc = seasonDesc;
  }
  // 提供当前枚举类的多个对象
  public static final Season SPRING = new Season("春天", "春暖花开");
  public static final Season SUMMER = new Season("夏天", "烈日当空");
  public static final Season AUTUMN = new Season("秋天", "秋高气爽");
  public static final Season WINTER = new Season("冬天", "白雪皑皑");

  public String getSeasonName() {
    return this.seasonName;
  }

  public String getSeasonDesc() {
    return this.seasonDesc;
  }

  @Override
  public String toString() {
    return "Season{" +
            "seasonName='" + this.seasonName + '\'' +
            ", seasonDesc='" + this.seasonDesc + '\'' +
            '}';
  }
}
```

## enum 关键字

jdk 5.0

```java
enum Season {
  SPRING("春天", "春暖花开"),
  SUMMER("夏天", "烈日当空"),
  AUTUMN("秋天", "秋高气爽"),
  WINTER("冬天", "白雪皑皑");

  private final String seasonName;
  private final String seasonDesc;

  Season (String seasonName, String seasonDesc) {
    this.seasonName = seasonName;
    this.seasonDesc = seasonDesc;
  }
    public String getSeasonName() {
    return this.seasonName;
  }

  public String getSeasonDesc() {
    return this.seasonDesc;
  }
}

Season.values() // Season[]
Season.valueOf('SPRING') // Season.SPRING ，找不到会抛出异常
Season.toString() // 返回枚举常量名称
```


## 实现接口的枚举类

```java
interface Song {
  void sing ();
}
enum Season implements Song {
  SRPING {
    public void sing () {
      System.out.println("春天在哪里");
    }
  };
}

Season.SPRING.sing() // 春天在哪里
Season.class.getSuperclass() // java.lang.Enum
```
