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

```js
const arr = []
Array.isArray(arr)
arr instanceof Array
arr.constructor === Array
Object.getPrototypeOf(arr) === Array.prototype
Array.prototype.isPrototypeOf(arr)
```

####  基础数据类型
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