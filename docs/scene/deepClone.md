# deepClone

### 深拷贝对象

```js
let obj = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: '我是一个对象', id: 1 },
  arr: [0, 1, 2],
  func: function () { console.log('我是一个函数') },
  date: new Date(0),
  reg: new RegExp('/我是一个正则/ig'),
  [Symbol('1')]: 1,
  map: new Map([['a','b'], ['c', 'd']]),
  set: new Set([1,2,{name: 'zhangsan'}]),
};
Object.defineProperty(obj, 'innumerable', {
  enumerable: false, value: '不可枚举属性' }
);
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj



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