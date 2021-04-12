# String

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