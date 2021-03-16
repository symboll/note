# exchange
```js
// input: abc123def456
// output: 123abc456def

function exchange (str) {
  const numPattern = /\d+/g
  const strPattern = /[a-z]+/g
  let strRes = [], numRes = [], stack = []
  while(strRes) {
    strRes = strPattern.exec(str)
    if(strRes) {
      stack.push(strRes['index'])
    }
  }
  while(numRes) {
    numRes = numPattern.exec(str)
    if(numRes) {
      stack.push(numRes['index'])
    }
  }

  stack.sort((a,b)=> a-b)
  let res = []
  for(let i =0; i< stack.length; i++) {
    res.push(str.slice(stack[i], stack[i+1]))
  }
  res = res.map((item,index)=> index%2 === 1 ? res[index-1]: (res[index + 1]? res[index + 1]: ''))
  return res.join('')
}
```