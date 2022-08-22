# deepClone

```js
const dataType = (any) => {
  const toString = Object.prototype.toString
  return toString.call(any).slice(8, -1)
}
const funParmasArr = ["length", "name", "arguments", "caller", "prototype"]

function deepClone(obj) {
  const o = {}

  function deepArr(arr) {
    const resArr = []
    arr.map((item) => {
      resArr.push(
        dataType(item) === "Array"
          ? deepArr(item)
          : dataType(item) === "Object"
          ? deepClone(item)
          : item
      )
    })
    return resArr
  }
  Reflect.ownKeys(obj).map((item) => {
    switch (dataType(obj[item])) {
      case "Array":
        o[item] = []
        obj[item].forEach((i) => {
          o[item].push(dataType(i) === "Object" ? deepClone(i) : i)
        })
        o[item].map((current, index) => {
          if (Array.isArray(current)) {
            o[item][index] = deepArr(current)
          }
        })
        break
      case "Object":
        if (obj === obj[item]) {
          o[item] = o
        } else {
          o[item] = deepClone(obj[item])
        }
        break
      case "Date":
        o[item] = new Date(obj[item])
        break
      case "RegExp":
        o[item] = new RegExp(obj[item])
        break
      case "Map":
        o[item] = new Map()
        Array.from(obj[item].keys()).map((i) =>
          dataType(obj[item].get(i)) === "Object"
            ? o[item].set(i, deepClone(a.get(i)))
            : o[item].set(i, obj[item].get(i))
        )
        break
      case "Set":
        o[item] = new Set()
        Array.from(obj[item]).map((i) =>
          dataType(i) === "Object" ? o[item].add(deepClone(i)) : o[item].add(i)
        )
        break
      case "Function":
        o[item] = eval(obj[item])
        break
      case "Math":
        o[item] = Math
        break
      case "Number":
      case "String":
      case "Boolean":
      case "Undefined":
      case "Null":
      case "BigInt":
      case "Symbol":
        const descriptor = Object.getOwnPropertyDescriptor(obj, item)
        Object.defineProperty(o, item, descriptor)
        break
      default:
        throw new Error(`${dataType(obj[item])} 不支持 deepClone`)
    }
  })
  return o
}
```
