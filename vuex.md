# vuex

* 全局挂载`vuex`，从根组件注入到每一个子组件中，子组件可通过`this.$store`调用

```vue
  import Vue from 'vue';
  import Vuex from 'vuex';

  Vue.use(Vuex);

  const store = new Vuex.Store({...});

  new Vue({
    el: '#app',
    store,
    ...
  });
```

## state

> 应用的状态

* 组件中获取应用状态

```vue
  this.$store.state.name
  this.$store.state.age
  this.$store.state.tel
  ...
```

* 基于`Vuex`的响应式状态存储，通常在`计算属性`中加工`state`来生成需要的数据，或直接返回状态

```vue
  computed: {
    // 名称大写
    name () {
      return this.$store.state.name.toUpperCase();
    },
    // 是否退休
    isRetired () {
      return this.$store.state.age > 60;
    },
    // 直接返回tel
    tel () {
      return this.$store.state.tel;
    }
  }
```

* 获取多个`state`则可以使用辅助函数`mapState`，该函数的返回为一个对象。

```vue
  computed: mapState({
    name: state => state.name.toUpperCase(),
    isRetired: state => state.age > 60,
    tel: state => state.tel
  })
```

```vue
  data() {
    return {
      company: 'alibaba'
    }
  },
  computed: mapState({
    // 传参为字符串 'tel' 等同于 `state => state.tel`
    tel: 'tel'

    // 若要使用`this`，必须用常规函数
    message (state) {
      return `${state.name} works for ${this.company}`;
    }
  })
```