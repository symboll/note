# currying

### 科里化

```js{1}
 add(1)(2)(3)() = 6;

function curry (fn) {
  let allArgs = [];
  return function next(){
    let args = [...arguments]
    if(args.length > 0){
      allArgs = allArgs.concat(args);
      return next;
    }else{
      const res = fn.apply(null, allArgs)
      allArgs = []
      return res
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

```js{1,16,17,18}
add(1)(2)(3) == 6  // true;

function curry (fn) {
  let allArgs = [];
  function next(){
    let args = [...arguments]
    if(args.length > 0){
      allArgs = allArgs.concat(args);
      return next;
    }else{
      const res = fn.apply(null, allArgs)
      allArgs = []
      return res
    }
  } 
  next.toString = function () {
    return fn.apply(null, allArgs)
  }
  return next
}

function fn () {
  let arg = Array.from(arguments)
  return arg.reduce((a, b) => a+b , 0)
}

let add = curry(fn)
```

