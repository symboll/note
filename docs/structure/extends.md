# extends

### es5
```js
function Father (name) {
  this.name = name
}

function Child (name, age) {
  Father.call(this, name)
  this.age = age
}
```

```js
function Father (name) {
  this.name = name
}
Father.prototype.say = function () {
  console.log('say something ~')
}

function Child (name, age) {
  this.age = age
}

Child.prototype = new Father()
```

```js
function Father (name) {
  this.name = name
}
Father.prototype.say = function () {
  console.log('say something ~')
}

function Child (name, age) {
  Father.call(this, name)
  this.age = age
}

Child.prototype = new Father()
```
```js
function Father (name) {
  this.name = name
}
Father.prototype.say = function () {
  console.log('say something ~')
}

function Child (name, age) {
  Father.call(this, name)
  this.age = age
}

Child.prototype = Father.prototype
```
```js
function Father (name) {
  this.name = name
}
Father.prototype.say = function () {
  console.log('say something ~')
}

function Child (name, age) {
  Father.call(this, name)
  this.age = age
}

Child.prototype = Object.create(Father.prototype)
Child.prototype.constructor = Child
```
### es6
```js
class Father {
  constructor(name) {
    this.name = name
  }
}

class Child extends Father {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}
```


### super
```js
/** 
 * super 
 * 既可以作为函数使用，也可以作为对象使用
 * 作为函数， 代表父类的构造函数 constructor。  作为函数只能在 子类的 constructor中使用
 * 作为对象，在子类的普通方法中指向 父类的 原型对象
 *         在 子类的静态方法中指向 父类
 */

/***
 * es5 先创建子构造函数的 实例 this， 再将父构造方法的 方法，属性，添加到 this上
 * es6 先从父类取到 实例 this，再调用super函数之后。将子类的属性 方法 添加到this上。
 * /
```

### new 
```js
class P {}
const p = new P('name', 'age')


new myClass {
  var obj = {}
  Object.setPrototypeOf(obj, myClass.prototype)
  var result = myClass.call(obj, 'name','age')
  return typeof result === 'object'? result : obj;
}

/***
 * 1.创建一个空对象obj
 * 2.将新创建的空对象的隐式原型指向 其构造函数的显式原型。
 * 3.使用call 改变this的指向。
 * 4.如果无返回值或者返回一个非对象，则将obj作为返回值，如果返回值是一个新对象，那么直接返回该对象
 * 
 * 所以new 的过程，就是使用call改变了this的指向。
 * /
```

### 不使用new 创建一个类的实例对象
```js
class P {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  say () {
    console.log(`say ${this.name}`)
  }
}

const P = Reflect.construct(P, ['zhangsan', 18])
```