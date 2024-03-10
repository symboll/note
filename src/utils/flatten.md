# flatten

```js
const flatten = (arr, depth = Infinity) => arr.flat(depth)

const flatten = (arr) =>
  [].concat(...arr.map((item) => (Array.isArray(item) ? flatten(item) : item)))

const flatten = (arr) =>
  arr.reduce(
    (result, item) => result.concat(Array.isArray(item) ? flatten(item) : item),
    []
  )

const flatten = (arr) => {
  const res = []
  while (arr.length) {
    const last = arr.pop()
    if (Array.isArray(last)) {
      arr.push(...last)
    } else {
      res.unshift(last)
    }
  }
  return res
}
```
