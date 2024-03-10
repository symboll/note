# Promise

```js
const callback = function () {
  console.log('callBack')
}

function dynamicFunc (cb) {
  setTimeout(cb, 1000)
}

function dynamicFuncAsync () {
  return new Promise(resolve => {
    setTimeout(resolve, 1000)
  })
}

// dynamicFunc(callback)

dynamicFuncAsync()
  .then(callback)
```

### Promise 
```js
class Promise {
  then () {}
  catch () {}
  static resolve () {} 
  static reject () {} 
  static all () {} 
  static race () {} 
  static allSellted () {}
}
```