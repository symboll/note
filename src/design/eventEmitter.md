# EventEmitter 

观察者模式

```js
class eventEmitter {
  constructor() {
    this.eventMap = new Map()
  }
  on (type, cb) {
    if(typeof cb !== 'function') { throw new Error('') }
    if(!this.eventMap.has(type)) {
      this.eventMap.set(type, [])
    }
    this.eventMap.get(type).push(cb)
  }
  emit (type, ...params) {
    if(this.eventMap.get(type)) {
      this.eventMap.get(type).forEach(item => {
        item.call(null, ...params)
      })
    }
  }
  off (type, cb) {
    if(this.eventMap.has(type)) {
      const index = this.eventMap.get(type).findIndex(item => item === cb)
      if(index >= 0) {
        this.eventMap.get(type).splice(index, 1)
      }
    }
  }
}
```