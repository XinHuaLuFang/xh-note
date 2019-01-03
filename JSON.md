# JSON - JavaScript Object Notation

> 它是一种数据格式，而不是一种编程语言

## 语法

> JSON的语法可表示以下三种类型的值

* 简单值（不支持 `undefined` ）
  * 字符串 - __JSON字符串必须使用双引号__
  * 数值
  * 布尔值
  * null

* 对象 - __属性名必须加双引号__

* 数组

## 解析与序列化

> 早期的JSON解析器基本上是用 JS 的 eval() 函数，但存在风险，可能会执行一些恶意代码。ES5 定义了全局对象 JSON，提供了 stringify() 和 parse() 方法。

* JSON.stringify(value[, replacer [, space]])

  把一个 JS 对象序列化为一个 JSON 字符串，所有__函数__及__原型成员__都会被有意忽略，值为 undefined 的任何属性也都会被跳过。

* JSON.parse(value[, reviver])

```javascript
  JSON.parse('{"p": 5}', function(k, v) {
    if (k === '') return v;   // 如果到了最顶层，直接返回属性值
    return v * 2;             // 否则将属性值变为原来的 2 倍
  })                          // { p: 10 }
```


## 题目

1. [统计字符串中，各个字符出现的次数](https://jsrun.net/LBhKp/edit)
2. [将js对象中的所有数字翻倍](https://jsrun.net/3BhKp/edit)
