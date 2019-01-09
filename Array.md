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


## copyWithin(target[, start[, end]]) <sup>*`ES6`*</sup>

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


## entries() <sup>*`ES6`*</sup>

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


## fill(value[, start[, end]]) <sup>*`ES6`*</sup>

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