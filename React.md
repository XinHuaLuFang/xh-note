1. 事件处理函数相关
```jsx
<button onClick={(e) => this.handleClick(id, e)}>Click</button>
<button onClick={this.handleClick.bind(this, id)}>Click</button>
```
Q: 箭头函数和Function.prototype.bind有什么区别？
> 1. 箭头函数: 每次渲染组件时，都会创建不同的回调函数，如果该回调函数作为prop传入子组件时，这些组件可能会进行额外的重新渲染，造成性能问题。:question:
> 2. react事件对象`e`会被作为第二个参数传递，箭头函数需要显式的传递，bind方式会被隐式传递。
