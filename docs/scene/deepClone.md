# deepClone

### 深拷贝对象

```js
const dataType = (any) => {
  const toString = Object.prototype.toString
  return toString.call(any).slice(8, -1)
}
function deepClone (obj) {
  const o = {}
  Reflect.ownKeys(obj).map(item => {
    switch (dataType(obj[item])) {
      case 'Array': 
        o[item] = []
        obj[item].forEach(i => {
          o[item].push(dataType(i) === 'Object' ? deepClone(i): i )
        })
        // todoList: Multidimensional Array item is a object, how to do it ?
        break;
      case 'Object':
        if(obj === obj[item]) {
          o[item] = o
        } else {
          o[item] = deepClone(obj[item])
        }
        break;
      case 'Date':
        o[item] = new Date(obj[item])
        break;
      case 'RegExp':
        o[item] = new RegExp(obj[item])
        break;
      case 'Map':
        o[item] = new Map()
        Array.from(obj[item].keys()).map(i => dataType(obj[item].get(i)) === 'Object' ? 
          o[item].set(i, deepClone(a.get(i))): 
          o[item].set(i, obj[item].get(i))) 
        break;
      case 'Set':
        o[item] = new Set()
        Array.from(obj[item]).map(i => dataType(i) === 'Object' ?
          o[item].add(deepClone(i)):
          o[item].add(i)
        )
        break;
      case 'Function':
        // todoList: how to copy a funnction ?
      case 'Number':
      case 'String':
      case 'Boolean':
      case 'Undefined':
      case 'Null':
      case 'BigInt':
      case 'Symbol':
        const descriptor = Object.getOwnPropertyDescriptor(obj, item)
        Object.defineProperty(o,item, descriptor)
        break;
    }
  })
  return o
}
```