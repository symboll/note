# Singleton 
单例模式

```js{1}
 // 饿汉单例模式
class Eager {
  static instance = new Eager('eager')
  constructor(name) {
    console.log('Eageer constructor', name)
    this.name = name
  }
}
```


```js{1}
// 懒汉单例模式
class Lazy {
  static #instance = null;      // 私有属性
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
```