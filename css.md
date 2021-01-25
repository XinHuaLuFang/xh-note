| _display_ | box | flex |
| --- | --- | --- |
| __宽度__ | box-flex | flex |
| __布局方向__ | box-orient | flex-direction |
| > 水平布局 | : horizontal | : row : row-reverse |
| > 垂直布局 | : vertical | : column : column-reverse |

* px & rem
```css
html {
  font-size: 100px;
}
body {
  font-size: 16px;
}
@media screen and (max-width: 1600px) {
  html {
    font-size: 84px;
  }
}
@media screen and (max-width: 1300px) {
  html {
    font-size: 78px;
  }
}
```

## 使用`js`获取`dom`样式
1. el.style 只能获取到行内样式
2. [el.getComputedStyle](https://developer.mozilla.org/zh-cn/docs/web/api/window/getcomputedstyle) 获取到元素的最终样式
