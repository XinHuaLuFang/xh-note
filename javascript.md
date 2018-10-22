## 链式调用


## DOM

```
DOM
├── DOM Level 0: 指的是IE4最初支持的DHTML。
│
├── DOM Level 1: 主要目标是映射文档结构。
│    ├── DOM Core: 规定如何映射基于XML的文档结构，以便简化对文档中任意部分的访问和操作。
│    └── DOM HTML: 在DOM核心的基础上加以扩展，添加了针对HTML的对象和方法。
│
├── DOM Level 2:
│    ├── DOM视图(DOM Views): 定义了跟踪不同文档视图的接口。
│    ├── DOM事件(DOM Events): 定义了事件和事件处理的接口。
│    ├── DOM样式(DOM Style): 定义了基于CSS为元素应用样式的接口。
│    └── DOM遍历和范围(DOM Traversal and Range): 定义了遍历和操作文档树的接口。
│
├── DOM Level 3:
│    ├── DOM加载和保存(DOM Load and Save): 统一方式加载和保存文档。
│    ├── DOM验证(DOM Validation): 验证文档
│    └── 扩展了DOM Core，涉及XML Infoset、XPath和XML Base。
```

## 数据类型 6种

`Undefined`、`Null`、`Boolean`、`Number`、`String`、`Object`、`Symbol`<sup>ES6新增</sup>

```javascript
var message = 'some string';
typeof message        // 'string'
typeof null           // 'object'
typeof ppxia          // 'undefined'
typeof true           // 'boolean'
typeof {}             // 'object'

typeof 10086          // 'number'
typeof Infinity       // 'number'
typeof NaN            // 'number'

typeof function() {}  // 'function'

```