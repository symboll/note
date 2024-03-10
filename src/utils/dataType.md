# dataType

```js
const dataType = (any) => {
  const toString = Object.prototype.toString
  return toString.call(any).slice(8, -1)
}

dataType(new Array())           // 'Array'
dataType(new Date());           // 'Date'
dataType(new String());         // 'String'
dataType(Math);                 // 'Math'
dataType(undefined);             // 'Undefined'
dataType(null);                 // 'Null'
dataType(new Promise(()=> {}))  // "Promise"
```

###  基础数据类型
```js
typeof any

// String
const s = 'abc'
typeof s  // 'string'

//  Number
const n = 12
typeof n // 'number'

//  Boolean
const b = true
typeof b // 'boolean'

//  undefined
const u = undefined
typeof u // "undefined"

// null
const n = null
typeof n  // "object"

// Symbol
const s = Symbol()
typeof s // "symbol"

// bigInt
const b = 12n
typeof b // "bigint"
```

### Array
```js
const list = []
Array.isArray(list)
list instanceof Array
list.constructor === Array
Object.getPrototypeOf(list) === Array.prototype
Array.prototype.isPrototypeOf(list)
```