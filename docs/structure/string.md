# String

## interview
### replace
```js
// inpout  get-element-by-id
// output  getElementById

function localeUpperCase (str) {
  const pattern = /-[a-zA-Z]/g
  return str.replace(pattern, (match) => match.slice(1).toLocaleUpperCase())
}
```
```js
// input: abc123def456
// output: 123abc456def

function exchange (str) {
  const pattern = /([a-zA-Z]+)([1-9]+)/g
  return str.replace(pattern, (match, p1, p2) => {
    return `${p2}${p1}`
  })
}
```
## methods
```js
属性
String length
方法
String.raw()
String.fromCharCode()
String.fromCodePoint()

String.prototype[@@iterator]()
String.prototype.charAt()
String.prototype.charCodeAt()
String.prototype.codePointAt()

String.prototype.includes()
String.prototype.indexOf()
String.prototype.lastIndexOf()

String.prototype.localeCompare()
String.prototype.normalize()
String.prototype.repeat()

String.prototype.padEnd()
String.prototype.padStart()

String.prototype.slice()
String.prototype.split()
String.prototype.concat()
String.prototype.substring()

String.prototype.startsWith()
String.prototype.endsWith()

String.prototype.match()
String.prototype.matchAll()
String.prototype.replace()
String.prototype.replaceAll()
String.prototype.search()

String.prototype.toUpperCase()
String.prototype.toLowerCase()
String.prototype.toLocaleLowerCase()
String.prototype.toLocaleUpperCase()

String.prototype.trim()
String.prototype.trimEnd()
String.prototype.trimStart()

String.prototype.toString()
String.prototype.valueOf()
```