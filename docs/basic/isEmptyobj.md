# isEmptyObject
### 空对象判断
```js
const isEmpty = obj => {
  return Object.keys(obj).length > 0 ? true : false
}

const isEmpty = obj => {
  return Reflect.ownKeys(obj).length > 0 ? true : false
}

```