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

## 数据类型 7种

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


* 离开作用域的值将被自动标记为可回收，因此将在垃圾收集期间被删除。
* 垃圾收集: 标记清除、引用计数（不再使用）。
* 解除变量的引用(手动设置值为`null`)不仅有助于消除循环引用现象，而且对垃圾收集也有好处。

### Array

* 栈方法 LIFO
  * push
  * pop

* 队列 FIFO
  * push
  * shift

* 反对列
  * unshift
  * pop

* 排序
  * reverse
  * sort

* 位置
  * indexOf
  * lastIndexOf

* 迭代
  * every
  * filter
  * forEach
  * map
  * some

* 归并
  * reduce
  * reduceRight

* 其他
  * concat 不改变原数组
  * slice  不改变原数组 [start, end)
  * splice 删除/插入/替换
  
### Object

* 属性类型
  * 数据属性 `[[Configurable]]`、`[[Enumerable]]`、`[[Writable]]`、`[[Value]]`
  * 访问器属性 `[[Configurable]]`、`[[Enumerable]]`、`[[Get]]`、`[[Set]]`
  
```js
  Object.defineProperty(obj, property, {...});    // 定义单个属性
  Object.defineProperties(obj, {...});  // 定义多个属性
  
  Object.getOwnPropertyDescriptor(obj, property);
```
  
### 创建对象模式

* 工厂模式

  解决了创建多个相似对象的问题，但却未解决对象识别问题。
  
* 构造函数模式
  
  1. 创建一个新对象；
  2. 将构造函数的作用域赋给新对象，this指向这个新对象；
  3. 执行构造函数中的代码，为新对象添加属性；
  4. 返回新对象。

* 原型模式

```js
  function Person() {};
  Person.prototype.name = 'Nicholoas';
  Person.prototype.age = 29;
  Person.prototype.job = 'Software Engineer';
  Person.prototype.sayName = function() {
    alert(this.name);
  }
  var person1 = new Person();
  var person2 = new Person();
  
  Person.prototype.constructor === Person;  // true
  
  person1.__proto__ === Person.prototype;   // true
  person2.__proto__ === Person.prototype;   // true
  
  Person.prototype.isPrototypeOf(person1);  // true
  Person.prototype.isPrototypeOf(person2);  // true
  
  Object.getPrototypeOf(person1) === Person.prototype // true
  
  person1.name = 'Greg';
  alert(person1.name);  // 'Greg' --来自实例，实例属性屏蔽原型的同名属性
  person1.hasOwnProperty('name');   // true
  alert('name' in person1);         // true 单独使用时，in 操作符会在通过对象能够访问给定属性时返回 true
  
  delete person1.name;
  alert(person1.name);  // 'Nicholas' --来自原型
  person1.hasOwnProperty('name');   // false
  alert('name' in person1);         // true
  
  person1.name = 'Greg';
  for (var key in person1) {
    console.log(person1[key]);
  } 
  // 'Greg'
  // 29
  // 'Software Engineer'
  // f() { alert(this.name); }
  // for-in 循环对象时，返回的是所有能通过对象访问的、可枚举的属性，包括实例属性和原型属性。
  
  var keys = Object.keys(Person.prototype); // ['name', 'age', 'job', 'sayName']
  person1.name = 'Rob';
  person1.age = 18;
  Object.defineProperty(person1, {
    pty: { value: 'pty_value', enumerable: true },
    ptya: { value: 'ptya_value' },
    ptyb: { get: function() { return 'ptyb_value' }}
  });
  var p1keys = Object.keys(person1);  // ['name', 'age', 'pty']
  // Object.keys() 可获取对象上所有可枚举的实例属性。
  
  var p1keys = Object.getOwnPropertyNames(person1);  // ['name', 'age', 'pty', 'ptya', 'ptyb']
  // Object.getOwnPropertyNames() 可获取对象上所有的实例属性，无论是否可枚举。
```


## 题目

1. 创建 Object 实例的方法
  * 使用 new 操作符后跟 Object 构造函数
  * 使用对象字面量表示法（不会调用 Object 构造函数）

2. 创建数组的方法
  * 使用 new + Array 构造函数（new可省略）
  * 使用数组字面量表示法

3. [以下代码的结果](http://jsrun.net/uuhKp/edit)
  ```js
    [].copyWithin.call({3: 1, length: 5}, 0, 3);
  ```
  
4. 多个对象实例共享原型所保存的属性和方法的原理

  读取对象的属性时，先从对象实例本身搜索，若找到则返回值，否则从原型对象中搜索。
  
5. delete person1.name 访问 person1.name 结果

  结果为 person1.__proto__.name 的值
  
6. 判断属性存在于原型中
  ```js
    function hasPrototypeProperty(object, name) {
      return !object.hasOwnProperty(name) && (name in object);
    }
  ```

