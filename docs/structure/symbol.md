# Symbol


### Symbol.hasInstance
```js
class A {
  [Symbol.hasInstance](instance) {
    return instance instanceof Array;
  }
}
const a = new A()
[1, 2, 3] instanceof a // true

class Even {
  static [Symbol.hasInstance](instance) {
    return Number(instance) % 2 === 0;
  }
}
// 等同于
const Even = {
  [Symbol.hasInstance](instance) {
    return Number(instance) % 2 === 0;
  }
};

1 instanceof Even       // false
2 instanceof Even       // true
12345 instanceof Even   // false
```
### Symbol.iterator
```js
const iterable = {};
iterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...iterable] // [1, 2, 3]
```

### Symbol.toPrimitive
```js
let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
     }
   }
};

2 * obj          // 246
3 + obj          // '3default'
obj == 'default' // true
String(obj)      // 'str'
```

### Symbol.toStringTag
```js
class A {
  get [Symbol.toStringTag]() {
    return 'xxx';
  }
}

const a = new A();
Object.prototype.toString.call(x) // "[object xxx]"
```