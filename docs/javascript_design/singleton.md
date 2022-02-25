# singleton 

单例模式

### Eager  饿汉单例模式
```js
class Eager {
  static instance = new Eager('eager')
  constructor(name) {
    console.log('Eageer constructor', name)
    this.name = name
  }
}
module.exports = { Eager }
```


```js
class Lazy {
  static #instance = null;
  static getInstance() {
    if (!Lazy.instance) {
      Lazy.instace = new Lazy('lazy')
    }
    return Lazy.instance
  }
  constructor(name) {
    console.log('lazy constructor', name)
    this.name = name
  }
}
module.exports = { Lazy }
```