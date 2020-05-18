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
