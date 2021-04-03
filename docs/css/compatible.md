---
title: CSS 兼容性问题
---


### flex 属性

flex 分别设置 flex-grow flex-shrink flex-basis 的值

`flex: unset;` `flex: initial;` 时，解析为默认值 `flex: 0 1 auto`

当第三个值缺省时、或单独设置 flex-grow flex-shrink 时，flex-basis 解析为 auto

IE 10 flex 默认值是 0 0 auto


```html
<main class="container">
  <section class="item">
    <div class="item-inner"></div>
  </section>
</main>

<style>
.container {
  display: flex;
}
.item {
  flex: 1;
}
/**
 * 在低版本的 Safari 中，子元素无法继承夫元素的高度，可以给 .item 相对定位，.item-inner 绝对定位解决
 * 在高版本的 Safari 中，当 .item 的 flex-basis: auto; 时亦无法继承父元素高度
 */
.item-inner {
  height: 100%;
}
</style>
```

### iPhone 刘海屏

默认情况下，viewport 不包含顶部的刘海区域和底部的触控区域，此时若背景色不是白色非常难看

使用 `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">` 可以使 viewport 覆盖整块屏幕。
但是同样也带来了问题，顶部刘海、底部触控区域会遮挡内容。Safari 提供一些常量来解决这个问题：

- safe-area-inset-top
- safe-area-inset-right // 考虑屏幕旋转
- safe-area-inset-left // 考虑屏幕旋转
- safe-area-inset-bottom

这些值可以应用到 margin、padding 上，也可以应用到绝对定位的 top 或 left 上。

```css
.footer-bar {
  /* constant 向下兼容 */
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
```

> https://juejin.cn/post/6844903712268222471
> https://www.w3.org/TR/css-round-display-1/#viewport-fit-descriptor

