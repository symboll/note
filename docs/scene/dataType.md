# dataType
### 类型判断

```js
const dataType = (any) => {
  const toString = Object.prototype.toString
  return toString.call(any).slice(8, -1)
}

dataType(new Array())           // 'Array'
dataType(new Date);             // 'Date'
dataType(new String);           // 'String'
dataType(Math);                 // 'Math'
dataType(undefined);            // 'Undefined'
dataType(null);                 // 'Null'
dataType(new Promise(()=> {}))  // "Promise"
```

```js
Array.isArray(any)
```

```js
typeof any
```

```js
a instanceof A
```