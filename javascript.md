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

* `基本类型`的值在内存中占据固定大小的空间，因此被保存在`栈内存`中。
* `引用类型`的值是对象，保存在`堆内存`中。
* 从一个变量向另一个变量复制`基本类型`的值，会创建这个值的一个副本。
* 从一个变量向另一个变量复制`引用类型`的值，复制的其实是指针，因此两个变量最终都指向同一个对象。
* 确定值的基本类型用`typeof`操作符，确定是哪种引用类型用`instanceof`操作符。


* 执行环境: 全局执行环境、函数执行环境。
* 每次进入一个新的执行环境，都会创建一个作用域链，用于搜索变量和函数。
* 函数的局部环境不仅可访问函数作用域中的变量，而且可访问其父环境、全局环境中的变量。
* 全局环境只能访问在全局环境中定义的变量和函数，而不能直接访问局部环境中的任何数据。
* 执行环境有助于确定应该何时释放内存。


* 离开作用域的值将被自动标记为可回首，因此将在垃圾收集期间被删除。
* 垃圾收集: 标记清除、引用计数（不再使用）。
* 解除变量的引用(手动设置值为`null`)不仅有助于消除循环引用现象，而且对垃圾收集也有好处。