# isEmptyObject

```js
const isEmpty = (obj) => (Object.keys(obj).length > 0 ? true : false)

const isEmpty = (obj) => (Reflect.ownKeys(obj).length > 0 ? true : false)

const isEmpty = (obj) => (JSON.stringify(obj) === "{}" ? true : false)

const isEmpty = (obj) => {
  for (let key in obj) {
    return false
  }
  return true
}
```
