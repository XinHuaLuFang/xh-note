# Array

## concat([arr1[, arr2[, ...[, arrN]]]])

> 连接数组，返回浅拷贝；  
若参数为空，则返回当前数组的浅拷贝；  
不改变原数组。

```js
// 一般数组
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
arr1.concat(arr2);
// [1, 2, 3, 'a', 'b', 'c']
```

```js
// 嵌套数组
let arr1 = [[1]];
let arr2 = [2, [3]]
let arr3 = arr1.concat(arr2);
// [[1], 2, [3]];

arr1[0].push('1');
console.log(arr3);
// [[1, '1'], 2, [3]]
```


## copyWithin(target[, start[, end]]) <sup>*ES6*</sup>

> 从数组的指定位置浅拷贝元素到数组的另一个指定位置，不包括`end`；  
不会修改数组的长度；  
返回修改后的数组。

```js
// 只有第一个参数时，在指定位置从0开始复制，一直覆盖到数组末尾
[1, 2, 3, 4, 5].copyWithin(1);
// [1, 1, 2, 3, 4]

// 第三个参数缺省时，其值为this.length - 1
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

// 若参数为负值，则等价于this.length + arg，下面示例参数等价于(3, 2, 4)
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

// 非数组也可以使用
[].copyWithin.call({3: 1, length: 5}, 0, 3);
// {0: 1, 3: 1, length: 5}
```


## entries() <sup>*ES6*</sup>

> 返回Array Iterator


## every(callback(item[, index[, array]])[, thisArg])

* 为数组中的每个元素执行一次`callback`函数，直到它找到一个使`callback`返回`false`(可转换为布尔值`false`)的元素；
  * 如果发现了一个这样的元素，`every`方法将立即返回`false`；
  * 否则，`every`就返回`true`。
* `callback`只会被已经赋值的索引调用，所以稀疏数组不影响效率；
* `thisArg`参数为`callback`中的this值。若省略该参数，在`strict`模式下，`this`为`undefined`，否则为全局对象；
* 在遍历开始后，添加到数组中的元素不会被`callback`访问到，例如`push`；
* 在遍历开始后，被删除的元素不会被访问到；
* 被修改的元素传入`callback`的值是访问到他们那一刻的值；
* 空数组调用`every`返回为`true`；
* 不改变原数组。

```js
// 检测数组中的所有元素是否都大于10
function isBigEnough(value, index, array) {
  return value >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);     // false
[12, 54, 18, 130, 44].every(isBigEnough);   // true
```

```
// 未赋值的索引不会调用callback
function isBigEnough(value, index, array) {
  if (index === 0) {
    delete array[1]
  }
  console.log(`${index}: ${value}`);
  return value >= 10;
}
let arr = [11, 12, 13];
arr.every(isBigEnough);
console.log(arr);
// 0: 11
// 2: 13
// 11,,13
```

```js
// every时shift
function isBigEnough(value, index, array) {
  if (index === 0) {
    array.shift();
  }
  console.log(`${index}: ${value}`);
  return value >= 10;
}
let arr = [11, 12, 13];
arr.every(isBigEnough);
console.log(arr);
// 0: 11
// 1: 13
// 12,13
```

```js
// every时unshift
function isBigEnough(value, index, array) {
  if (index === 0) {
    array.unshift(10);
  }
  console.log(`${index}: ${value}`);
  return value >= 10;
}
let arr = [11, 12, 13];
arr.every(isBigEnough);
console.log(arr);
// 0: 11
// 1: 11
// 2: 12
// 10,11,12,13
```

```js
// every时pop
function isBigEnough(value, index, array) {
  if (index === 0) {
    array.pop();
  }
  console.log(`${index}: ${value}`);
  return value >= 10;
}
let arr = [11, 12, 13];
arr.every(isBigEnough);
console.log(arr);
// 0: 11
// 1: 12
// 11,12
```

```js
// every时push
function isBigEnough(value, index, array) {
  if (index === 0) {
    array.push(14);
  }
  console.log(`${index}: ${value}`);
  return value >= 10;
}
let arr = [11, 12, 13];
arr.every(isBigEnough);
console.log(arr);
// 0: 11
// 1: 12
// 2: 13
// 11,12,13,14
```


## fill(value[, start[, end]]) <sup>*ES6*</sup>

> 用一个固定值填充／替换数组元素；  
`start`默认为0，`end`默认为`this.length`，不包括`end`;  
返回修改后的数组。

```js
[1, 2, 3].fill(4);            // [4, 4, 4]
[1, 2, 3].fill(4, 1);         // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);      // [1, 4, 3]
[1, 2, 3].fill(4, -3, -2);    // [4, 2, 3]
[].fill.call({length: 3}, 4); // {0: 4, 1: 4, 2: 4, length: 3}

var arr = Array(3).fill({});
arr[0].hi = 'hi';             // [{hi: 'hi'}, {hi: 'hi'}, {hi: 'hi'}]
```


## filter(callback(value[, index[, array]])[, thisArg])

* 遍历数组元素调用`callback`函数，返回使`callback`返回`true`(等价于`true`)的元素组成的新数组；
* `callback`只会被已经赋值的索引调用，所以稀疏数组不影响效率；
* `thisArg`参数为`callback`中的this值。若省略该参数，在`strict`模式下，`this`为`undefined`，否则为全局对象；
* 在遍历开始后，添加到数组中的元素不会被`callback`访问到，例如`push`；
* 在遍历开始后，被删除的元素不会被访问到；
* 被修改的元素传入`callback`的值是访问到他们那一刻的值；
* 空数组调用`filter`返回为`[]`;
* 不改变原数组。

```js
// 过滤出大于等于10的元素
function isBigEnough(value, index, array) {
  return value >= 10;
}
[12, 5, 8, 130, 44].filter(isBigEnough);
// [12, 130, 44]
```

```js
// 搜索业务
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(query) {
  return fruits.filter(function(item) {
    return item.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
filterItems('ap');    // ['apple', 'grapes']
filterItems('an');    // ['banana', 'mango', 'orange']
```


## find(callback(item[, index[, array]])[, thisArg]) <sup>*ES6*</sup>

* 遍历数组元素调用`callback`函数，返回使`callback`返回`true`(等价于`true`)的第一个元素，否则返回`undefined`；
* 所有索引都会调用`callback`函数，所以对于稀疏数组，调用`find`方法比`every`、`filter`要慢;
* 在遍历开始后，添加到数组中的元素不会被`callback`访问到，例如`push`；
* 在遍历开始后，被删除的元素仍会被访问到；:red_circle:
* 被修改的元素传入`callback`的值是访问到他们那一刻的值；
* 空数组调用`find`返回`undefined`；
* 不会改变原数组。

```js
function isBigEnough(value, index, array) {
  if (index === 0) {
    delete array[2];
  }
  console.log(`${index}: ${value}`);
  return value > 12;
}
let arr = [11, 12, 13];
console.log(arr.find(isBigEnough));
console.log(arr);
// 0: 11
// 1: 12
// 2: undefined
// 空字符串
// 11,12,
```

```js
// find + push
function isBigEnough(value, index, array) {
  if (index === 0) {
    array.push(14);
  }
  console.log(`${index}: ${value}`);
  return value > 11;
}
let arr = [11, 12, 13];
console.log(arr.find(isBigEnough));
console.log(arr);
// 0: 11
// 1: 12
// 12
// 11,12,13,14
```

```js
// find + pop
function isBigEnough(value, index, array) {
  if (index === 0) {
    array.pop();
  }
  console.log(`${index}: ${value}`);
  return value > 12;
}
let arr = [11, 12, 13];
console.log(arr.find(isBigEnough));
console.log(arr);
// 0: 11
// 1: 12
// 2: undefined
// 空字符串
// 11,12
```

```js
// find + shift
function isBigEnough(value, index, array) {
  if (index === 0) {
    array.shift();
  }
  console.log(`${index}: ${value}`);
  return value > 15;
}
let arr = [11, 12, 13];
console.log(arr.find(isBigEnough));
console.log(arr);
// 0: 11
// 1: 13
// 2: undefined
// 空字符串
// 12,13
```

```
// find + unshift
function isBigEnough(value, index, array) {
  if (index === 0) {
    array.unshift(10);
  }
  console.log(`${index}: ${value}`);
  return value > 11;
}
let arr = [11, 12, 13];
console.log(arr.find(isBigEnough));
console.log(arr);
// 0: 11 
// 1: 11
// 2: 12
// 12
// 10,11,12,13
```


## findIndex(callback(item[, index[, array]])[, this.Arg]) <sup>*ES6*</sup>

* 遍历数组元素调用`callback`函数，返回使`callback`返回`true`(等价于`true`)的第一个元素的索引，否则返回`-1`；
* 所有索引都会调用`callback`函数，所以对于稀疏数组，调用`findIndex`方法比`every`、`filter`要慢;
* 在遍历开始后，添加到数组中的元素不会被`callback`访问到，例如`push`；
* 在遍历开始后，被删除的元素仍会被访问到；:red_circle:
* 被修改的元素传入`callback`的值是访问到他们那一刻的值；
* 空数组调用`findIndex`返回`-1`；
* 不改变原数组。


## forEach(callback(item([, index[, array]])[, thisArg])

* 遍历数组元素调用`callback`函数，没有办法中止或者跳出遍历，除了抛出一个异常；:red_circle:
* 在遍历开始后，添加到数组中的元素不会被`callback`访问到，例如`push`；
* 在遍历开始后，被删除的元素不会被访问到；
* 被修改的元素传入`callback`的值是访问到他们那一刻的值；
* 返回undefined；
* 不可链式调用。:interrobang:


## from(arrayLike[, mapFn[, thisArg]]) <sup>*ES6*</sup>

* 通过以下方式来创建数组对象：
  * 伪数组对象（拥有一个`length`属性和若干索引属性的任意对象）；
  * 可迭代对象（如`Map`和`Set`等）；
* `Array.from(obj, mapFn, thisArg)`就相当于`Array.from(obj).map(mapFn, thisArg)`；
* from的length属性为1；
* 返回新的数组实例；
* 在`ES6`中，`Class`语法允许我们为内置类型（比如`Array`）和自定义类创建子类（`SubArray`）。这些子类会继承父类的静态方法，比如`SubArray.from()`，调用该方法后会返回子类（`SubArray`）的一个实例，而不是父类（`Array`）的实例。:interrobang:

```js
function combine() {
  let arr = [].concat.apply([], arguments);
  return Array.from(new Set(arr));
}

var m = [1, 2, 2], n = [2, 3, 3];
combine(m, n);  // [1, 2, 3]
```


## includes(searchElement[, fromIndex = 0]) <sup>*ES6*</sup>

* 判断数组中是否包含指定的值；
* 如果`fromIndex`大于等于数组长度，则返回`false`，不会在数组中搜索；
* 如果`fromIndex`小于`0`，且`this.length + fromIndex`小于`0`，则整个数组都会被搜索；
* 通用方法，可被用于其他类型的对象；
* 返回`true`或`false`。

```js
(function() {
  [].includes.call(arguments, 'a');   // true
  [].includes.call(arguments, 'd');   // false
})('a', 'b', 'c')
```


## indexOf(item[, fromIndex = 0])

* 在数组中找到指定元素的索引；
* 如果`fromIndex`大于等于数组长度，则返回`-1`，不会在数组中搜索；
* 如果`fromIndex`小于`0`，且`this.length + fromIndex`小于`0`，则整个数组都会被搜索；
* 如果`fromIndex`小于`0`，搜索顺序仍然是从前向后；:red_circle:
* 返回指定元素在数组中的索引，否则返回`-1`。

```js
[1 ,2, 3, 4, 5, 2].indexOf(2);      // 1
[1, 2, 3, 4, 5, 2].indexOf(2, -4);  // 5
[1, 2, 3, 4, 5 ,2].indexOf(1, -4);  // -1
```

```js
// 找出指定元素出现的所有位置
var indexes = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while(idx != -1) {
  indexes.push(idx);
  idx = array.indexOf(element, idx + 1);
}
// indexes -> [0, 2, 4]
```


## isArray() <sup>*ES6*</sup>

```js
// Polyfill
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
}
```


## join(separator = ',')

* 使用分隔符将一个数组（或类数组对象）的所有元素连接成一个字符串并返回这个字符串；
* 若数组长度为`0`，则返回空字符串；  
* 数组中的`undefined`和`null`都会被转化成空字符串；
* 不改变原数组。

```js
// 连接类数组对象
function f(a, b, c) {
  return Array.prototype.join.call(arguments);
}
f(1, 'a', true);  // '1,a,true'
```


## keys() <sup>*ES6*</sup>

* 返回一个包含数组中每个索引键的Array Iterator对象；
* Array Iterator会包含没有元素的索引。

```js
var arr = ['a', , 'c', undefined, false, null];
Object.keys(arr);   // ['0', '2', '3', '4', '5']
[...arr.keys()];    // [0, 1, 2, 3, 4, 5]
```


## lastIndexOf(element[, fromIndex = this.length - 1])

* 返回指定元素在数组中的最后一个索引;
* 从`this.length - 1`处开始向前查找；
* 若`fromIndex >= this.length`，则从数组末尾向前查找； 
* 若`fromIndex`为负数，且绝对值大于等于`this.length`，则返回`-1`；
* 使用严格相等比较。


## map(callback(item[, index[, array]])[, thisArg])

* 遍历数组元素调用`callback`函数，每次的返回值组成新数组；
* `callback`只会在有值的索引上被调用；
* 在遍历开始后，添加到数组中的元素不会被`callback`访问到；
* 在遍历开始后，被删除的元素不会被访问到；
* 被修改的元素传入`callback`的值是访问到他们那一刻的值；
* 不改变原数组。

```js
// parseInt的第二个参数`index`为进制
['1', '2', '3'].map(parseInt);          // [1, NaN, NaN]

['1', '2', '3'].map(Number);            // [1, 2, 3]

['1.1', '2.2e2', '3e300'].map(Number);  // [1.1, 220, 3e+300]
```


## pop()

* 删除数组最后一个元素并；
* 返回被删除的元素；
* 空数组返回`undefined`；
* 会改变数组长度。








## sort([compareFunction])