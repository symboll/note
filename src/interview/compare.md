# compare

### 版本号比较

```js
// 钉钉面试题

function compare(newVersion, oldVersion) {

  const newArr = newVersion.split('.')
  const oldArr = oldVersion.split('.')
  const allNumberPattern = /^\d+$/
  const len = Math.max(newArr.length, oldArr.length)
  let i = 0

  while (i < len) {
    if (allNumberPattern.test(newArr[i]) && allNumberPattern.test(oldArr[i])) {
      if (Number(newArr[i]) > Number(oldArr[i])) {
        return true
      } else if (Number(newArr[i]) < Number(oldArr[i])) {
        return false
      } else {
        i++
      }
    } else if (isAllString(newArr[i]) && isAllString(oldArr[i])) {
      if (newArr[i] === oldArr[i]) {
        i++
      } else if ([newArr[i], oldArr[i]].sort()[1] === newArr[i]) {
        return true
      } else {
        return false
      }
    } else if (newArr[i] === undefined || oldArr[i] === undefined) {
      if (newArr[i] === undefined) {
        return false
      } else {
        return true
      }
    } else {
      let flag = compare(
        compilerStrAndNumToArr(newArr[i]).join('.'),
        compilerStrAndNumToArr(oldArr[i]).join('.')
      )
      if (flag === undefined) {
        i++
      } else {
        return flag
      }
    }
  }
}

function isString (letter) {
  return typeof letter === 'string' && isNaN(letter)
}

function isAllString (str) {
  const allStrPattern = /^[a-zA-Z]+$/
  return allStrPattern.test(str) && isString(str)
}

function compilerStrAndNumToArr (str) {
  let flag = isString(str[0])
  let arr = [],index =0
  for(let i =0; i< str.length; i++) {
    if(flag !== isString(str[i])){
      arr.push(str.slice(index,i))
      flag = isString(str[i])
      index = i
    }
  }
  arr.push(str.slice(index))
  return arr
}
```