# others
## Number
```js
function formatNum (num) {
  if(!num){ return 0 }
  if(isNaN(Number(num))){ return 0 }
  
  let flag = ''
  if(num < 0) {
    flag = '-'
    num = Math.abs(num)
  }

  let stringNum = String(num)
  const integer = stringNum.split('.')[0]
  const decimal = stringNum.split('.')[1] 

  const integerArr = integer.split('').reverse()
  let arr = []
  for(let i =0; i< integerArr.length; i++ ) {
    arr.push(integerArr[i])
    if(i%3 === 2 && i!== integerArr.length -1 ) {
      arr.push(',')
    }
  }
  let result = arr.reverse().join('')
  if(decimal){
    result = result + '.'+ decimal
  }
  if(flag) {
    result = flag + result
  }
  
  return result.trim()
}
```
## Boolean
## undefined
## null
