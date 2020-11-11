### flatten

```js
const flatten = (arr, depth = Infinity) => {
  return arr.flat(depth)
}
```

```js
const flatten = (arr) => {
  return [].concat(...arr.map(item => Array.isArray(item) ? flatten2(item): item))
}
```

```js
const flatten = (arr) => {
  return arr.reduce((result, item) => result.concat(Array.isArray(item) ? flatten3(item): item), [])
}
```

```js
const flatten = (arr) => {
  const stack = []
  while (arr.length) {
    const item = arr.pop()
    if(Array.isArray(item)) {
      arr.push(...item)
    }else {
      stack.push(item)
    }
  }
  return stack.reverse()
}
```
