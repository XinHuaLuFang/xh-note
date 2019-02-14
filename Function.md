# Function

* 没有重载；
* 函数声明与函数表达式：函数声明有函数声明提升，因此可以在之前进行调用，函数表达式则无法提前调用；

```js
// 作为值的函数
function createComparisonFunction(propertyName) {
  return function(obj1, obj2) {
    var value1 = obj1[propertyName];
    var value2 = obj2[propertyName];
    
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
}

var data = [{name: 'John', age: 28}, {name: 'Nicholas', age: 29}];
data.sort(createComparisonFunction('name'));
```

# arguments.callee.caller

## this
this引用的是函数据以执行的环境对象

## length 
函数希望接受的命名参数的个数

## prototype
在es5中，此属性不可枚举，所以使用for-in无法发现。

诸如 toString() valueOf() 等方法都保存在 prototype 名下。

## apply && call
非继承而来

扩充函数赖以运行的作用域，使得对象与方法不需要有任何耦合关系。

```js
fun.apply(this, [...]);
fun.apply(this, arguments);

fun.call(this, arg1, arg2, ...);  // call必须明确的传入每一个参数
```

## bind