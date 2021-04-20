# currying

### 科里化

```js
// 网易面试题
add(1)(2)(3)() = 6;
```
```js
function curry () {
  let allArgs = [];
  return function next(){
    let args = [...arguments]
    if(args.length > 0){
      allArgs = allArgs.concat(args);
      return next;
    }else{
      let copyArgs = allArgs
      allArgs = []
      return fn.apply(null, copyArgs);
    }
  } 
}

function fn () {
  let arg = Array.from(arguments)
  return arg.reduce((a, b) => a+b , 0)
}

let add = curry(fn)
```

``` js
function add () {
  let arg = Array.from(arguments)
  if(arg.length === 0) {
    let res = add.arr.reduce((a, b) => a+b , 0)
    add.arr = []
    return res
  }else {
    add.arr = add.arr.concat(arg)
    return add
  }
}
add.arr = []
```
