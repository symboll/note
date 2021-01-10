# recursion
### 递归
函数调用自身，称为递归。

```js
const arr = [1,2,3,[4,5,[6,7],8,9],10]

// expect: [1,2,3,4,5,6,7,8,9,10]

const flatten = (arr) => {
  return arr.reduce((result, item) => 
    result.concat(Array.isArray(item) ? flatten(item): item), [])
}

```

```js
const arr = [
  { name: "a", },
  { name: "b",
    children: [
      { name: "e",
        children: [
          { name: 'g' }
        ]
      },
      { name: "f", },
    ],
  },
  { name: "c", },
  { name: "d", },
]

// expect: ['a', 'b', 'e', 'g', 'f', 'c', 'd']
// 有待优化
function recursion(arr) {
  return arr.reduce(
    (result, item) =>
      result.concat(
        Array.isArray(item.children)
          ? item.children.unshift({ name: item.name }) && recursion(item.children)
          : item.name
      ),
    []
  )
}
```

<!-- ```js
const fs = require('fs')
const path = require('path')

const readDir = (entry) => {
  const dirInfo = fs.readdirSync(entry)
  return [].concat(...dirInfo.map(item => {
    const location = path.join(entry, item)
    return fs.statSync(location).isDirectory() ?
      readDir(location): location
    })
  )
}
``` -->

### 尾调用
 尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。
```js
function f(x){
  return g(x)
}
```
函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）。

尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。

### 尾递归
函数调用自身，称为递归。如果尾调用自身，就称为尾递归。
递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。

```js
// 阶乘
function factorial(n, total=1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5) // 120
```

```js
// Fibonacci
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};
  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

Fibonacci2(100) // 573147844013817200000
Fibonacci2(1000) // 7.0330367711422765e+208
Fibonacci2(10000) // Infinity
```