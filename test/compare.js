function compare (newVersion, oldVersion) {

  const newArr = newVersion.split('.')
  const oldArr = oldVersion.split('.')
  const allNumberPattern = /^\d+$/
  const allStrPattern = /^[a-zA-Z]+$/
  const len = Math.max(newArr.length, oldArr.length)
  let i = 0
  
  while(i< len) {
    if(allNumberPattern.test(newArr[i]) && allNumberPattern.test(oldArr[i])) {
      if(Number(newArr[i]) > Number(oldArr[i])) {
        return true
      }else if(Number(newArr[i]) < Number(oldArr[i])) {
        return false
      }else {
        i ++
      }
    }else if(allStrPattern.test(newArr[i]) && allStrPattern.test(oldArr[i])) {
      if(newArr[i] === oldArr[i]) { 
        i ++ 
      }else if([newArr[i], oldArr[i]].sort()[1] === newArr[i]) {
        return true
      }else {
        return false
      }
    }else {
      let flag = compare(
        compilerStrAndNumToArr(newArr[i]).join('.'), 
        compilerStrAndNumToArr(oldArr[i]).join('.')
      )
      if(flag === undefined) {
        i++
      }else {
        return flag
      }
    }
  }

}

function isString (letter) {
  return typeof letter === 'string' && isNaN(letter)
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


const newVersion = '34.56.34s.56777'
const oldVersion = '34.56.34s.56776'

console.log(compare(newVersion,oldVersion))


// function compare () {
//   let n = 10
//   while (n) {
//     console.log(n)
//     if(n ===6) {
//       // return
//       // break
//       // continue   // error
//     }
//     n --
//   }
// }

// compare()