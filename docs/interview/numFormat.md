# numberFormat

### 数字格式化
```js{1}
// 12345678.987 => 12,345,678.987
function formatNum (num) {
  if(!num){ return 0 }
  if(isNaN(Number(num))){ return 0 }
  
  let flag = ''
  if(num < 0) {
    flag = '-'
    num = Math.abs(num)
  }

  let stringNum = String(num)
  // 整数部分
  let integer = stringNum.split('.')[0]
  // 小数部分
  const decimal = stringNum.split('.')[1] 
  // 余数
  let remainder = integer.length % 3

  while (3 - remainder > 0) {
    integer = '0' + integer
    remainder++
  }

  const pattern = /(\d{3})/g
  let res =  integer.split(pattern).filter(v => v).join(',')

  while (res[0] === '0') {
    res = res.slice(1)
  }

  if(decimal){
    res = res + '.'+ decimal
  }
  if(flag) {
    res = flag + result
  }
  return res
}
```