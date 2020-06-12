### 静态资源
1. 在`js`中被导入或在`template/css`中被引用；
2. 放置在`public`目录下。

> 推荐第一种方式
> * 脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求；
> * 文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误；
> * 最终生成的文件名包含了内容哈希，因此你不必担心浏览器会缓存它们的老版本。

### 简单的数据共享
```js
// store.js
export default {
  var1: '',
  var2: '',
  var3: ''
}

// component-a
<input v-model="dataA.var1" />

import store from './store'
export default {
  data() {
    return {
      dataA: store
    }
  }
}

// component-b
<input v-model="dataB.var1" />

import store from './store'
export default {
  data() {
    return {
      dataB: store
    }
  }
}
```
