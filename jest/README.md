
## 匹配器

* expect
> `expect()`返回一个“期望”的对象

* toBe
> 测试相反的匹配`not.toBe()`

* toEqual
> `toEqual()`递归检查对象或数组的每个字段<br>
> `toBe`和`toEqual`对于数字是等价的

* toBeNull
> 只匹配`null`

* toBeUndefined
> 只匹配`undefined`

* toBeDefined
> 与`toBeUndefined`相反

* toBeTruthy
> 匹配任何`if`语句为真

* toBeFalsy
> 匹配任何`if`语句为假

* toBeGreaterThan
> 大于

* toBeGreaterThanOrEqual
> 大于等于

* toBeLessThan
> 小于

* toBeLessThanOrEqual
> 小于等于

* toBeCloseTo
> 比较浮点数相等，`toBe`用于浮点数有舍入误差

* toMath
> 匹配正则<br>
> `not.toMath`

* toContain
> 检查数组或可迭代对象是否包含某个特定项

* toThrow
> `toThrow()`<br>
> `toThrow(Error)`<br>
> `toThrow('message')`<br>
> `toThrow(/ABC/)`
