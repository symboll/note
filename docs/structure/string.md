# String

## interview
### replace
```js
inpout  get-element-by-id
output  getElementById
```
```js
function localeUpperCase (str) {
  for(let i=0; i< str.length; i++) {
    if(str[i]==='-') {
      const pattern = new RegExp('-'+ str[i+1])
      str = str.replace(pattern, str[i+1].toLocaleUpperCase())
    }
  }
  return str
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