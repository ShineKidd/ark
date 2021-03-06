---
title: java 注解
---

jdk 5.0 增加里最元数据（Meta Data）的支持。在不改变原有逻辑的基础上，在源文件中嵌入一些补充信息

可用于修饰 包、类、构造器、方法、成员变量、参数、局部变量的声明，替代冗余的代码和 XML 配置

基本上：框架 = 注解 + 反射 + 设计模式


## 文档类注解

```java
/**
 * @author zz,xx
 * @version 1.0.1
 * @see
 * @since
 * @param
 */
```


## jdk 内置注解

在编译时进行格式检查

- @Override ：限定重写父类、接口中的方法
- @Deprecated ：修饰类、方法（向下兼容）
- @SuppressWarnings ：抑制编译器警告



## 自定义注解

需要配上注解的信息处理流程（使用反射）才有意义

```java
// 声明注解
public @interface MyAnnotation {
  // 定义内容成员及默认值
  // 如果没有成员，则表示标识作用
  String value() default "hello";
}

// 使用默认值
@MyAnnotation()
class Dog {

}
@MyAnnotation("hi")
class Person {

}
```


## 元注解

用于修饰其他注解，jdk 5.0 提供 4 个

### Retention

指定被修饰的 Annotation 的生命周期 SOURCE/CLASS(默认)/RUNTIME

```java
@Retention(RetentionPolicy.CLASS)
public @interface MyAnnotation {
  String value() default "hello";
}
```

### Target

指定被修饰的 Annotation 能修饰那些程序元素

```java
// 指定 MyAnnotation 只能修饰类、构造器
@Target({TYPE, CONSTRUCTOR})
public @interface MyAnnotation {
  String value() default "hello";
}
```

### Documented

被修饰的 Annotation 在 javadoc 解析时，能保留下来

```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER, TYPE})
public @interface Deprecated {
}
```

### Inherited

被修饰的 Annotation 将具有继承性，子类继承父类注解


```java
@Inherited
@Retention(RetentionPolicy.RUNTIME)
public @interface MyAnnotation {
  String value() default "hello";
}

@MyAnnotation()
class Person {

}

class Student extends Person {
  public void getAnnotations () {
    Annotation[] annotations = Student.class.getAnnotations();
    System.out.println(annotations[0]);
  }
}
```



## 可重复注解

jdk 8


```java
@Repeatable(MyAnnotations.class)
@interface MyAnnotation {
  String value();
}

@interface MyAnnotations {
  MyAnnotation [] value();
}

// 写多个重复类型的注解
@MyAnnotation("hello")
@MyAnnotation("hi")
class Person {

}
```

⚠️ ：MyAnnotation MyAnnotations 要保持 @Inherited @Retention 和 @Target 等元注解相同

## 类型注解

jdk 1.8

表示该注解可以写在类型变量的生命语句中，比如泛型

```java
@Target({ElementType.TYPE_PARAMETER, ElementType.TYPE_USE})
@interface MyAnnotation {
  String value() default  "hi";
}

class Generic < @MyAnnotation T> {
  public void show () throws @MyAnnotation RuntimeException{
    ArrayList <@MyAnnotation String> list = new ArrayList<>();
    int num = (@MyAnnotation int) 10L;
  }
}
```

