# Queue
- 栈，后进先出；
- 队列，先进先出。
### 如何用栈实现一个队列？

```js
// 使用栈实现队列的下列操作：

// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空。

class Queue {
  constructor() {
    this.stack = []
    this.auxiliary = []
  }
  push (value) {
    this.stack.push(value)
  }
  pop () {
    if(this.auxiliary.length <= 0) {
      while(this.stack.length) {
        this.auxiliary.push(this.stack.pop())
      }
    }
    return this.auxiliary.pop()
  }
  peek () {
    if(this.auxiliary.length <= 0) {
      while (this.stack.length != 0) {
        this.auxiliary.push(this.stack.pop())
      }
    }
    const auxiliaryLen = this.auxiliary.length
    return this.auxiliaryLen && this.auxiliary[auxiliaryLen - 1]
  }
  empty () {
    return !this.stack.length && !this.auxiliary.length
  }
}
```