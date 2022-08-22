# unique

```js
const unique = (arr) => new Set([...arr])

const unique = (arr) => {
  const obj = {}

  const dataType = (any) =>
    Object.prototype.toString
      .call(any)
      .slice(8, -1)
      .toLocaleLowerCase()

  const basicTypeList = ["string", "number", "boolean", "undefined", "null"]

  return arr
    .filter((item) => {
      if (dataType(item) === "object") {
        const keys = Object.keys(item).sort()
        const bool = keys
          .map((cur) => item[cur])
          .every(
            (ele) =>
              [...basicTypeList, "bigint"].includes(dataType(ele)) ||
              Symbol.keyFor(item)
          )

        let splicingKey = ""
        if (bool) {
          splicingKey = keys
            .map((cur) => `${typeof cur}:${cur}:${item[cur].toString()}`)
            .join("")

          return obj.hasOwnProperty(splicingKey)
            ? false
            : (obj[splicingKey] = true)
        } else {
          return item
        }
      }
    })
    .concat(
      Array.from(
        new Set(
          arr.filter((item) =>
            [...basicTypeList, "bigint", "symbol"].includes(dataType(item))
          )
        )
      )
    )
}
```
