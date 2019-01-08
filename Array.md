# Array

## concat([arr1[, arr2[, ...[, arrN]]]])

> 连接数组，返回浅拷贝；  
不会修改原数组；  
若参数为空，则返回当前数组的浅拷贝。

```
// 一般数组
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
arr1.concat(arr2);
// [1, 2, 3, 'a', 'b', 'c']
```

```
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

> 从数组的指定位置浅拷贝元素到数组的另一个指定位置；  
不会修改数组的长度；  
返回修改后的数组。

```
// 只有第一个参数时，在指定位置从0开始复制，一直覆盖到数组末尾
[1, 2, 3, 4, 5].copyWithin(1);
// [1, 1, 2, 3, 4]

// 第三个参数缺省时，其值为Array.length - 1
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

// 若参数为负值，则等价于Array.length + arg，下面示例参数等价于(3, 2, 4)
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

// 非数组也可以使用
[].copyWithin.call({3: 1, length: 5}, 0, 3);
// {0: 1, 3: 1, length: 5}
```


## entries() <sup>*`ES6`*</sup>

> 返回Array Iterator


## every(callback[, thisArg])

> 检测数组所有元素是否都符合指定的条件；  
若有一个不满足，则返回false，且剩余元素不会再检测；  
空数组返回`true`；  
在遍历开始后，添加到数组中的元素不会被`callback`访问到；  
在遍历开始后，被删除的元素不会被访问到，被修改的元素传入`callback`的值是修改后的值；  
不改变原数组

```
// 检测数组中的所有元素是否都大于10
funciton isBigEnough(value, index, array) {
  return value >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);
// false
[12, 54, 18, 130, 44].every(isBigEnough);
// true
```

```
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

```
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

```
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

```
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

